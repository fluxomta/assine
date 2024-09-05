<?php
function display_upsell_products() {
    if ( WC()->cart->is_empty() ) {
        return;
    }

    $cart_items = WC()->cart->get_cart();

    foreach ( $cart_items as $cart_item ) {
        $product = wc_get_product( $cart_item['product_id'] );
        $upsells = $product->get_upsell_ids();

        if ( ! empty( $upsells ) ) {
            echo '<div class="upsells products">';
            
            foreach ( $upsells as $upsell_id ) {
                $upsell_product = wc_get_product( $upsell_id );
                $current_product_name = $product->get_name();
                $upsell_product_name = $upsell_product->get_name();

                echo '<p class="text-2xl text-white">' . sprintf( 
                    __('Temos uma oportunidade que pode te interessar, faça o upgrade do seu <span class="text-secondary-300">%1$s</span> pelo nosso <span class="text-secondary-500">%2$s</span>', 'woocommerce'), 
                    esc_html($current_product_name), 
                    esc_html($upsell_product_name) 
                ) . '</p>';

                setup_postdata( $GLOBALS['post'] =& $upsell_product );
                wc_get_template_part( 'content', 'product' );

                // Adicionando o botão de substituição
                echo '<button class="w-full px-2 py-4 text-lg font-bold border-0 rounded-lg bg-secondary-500 hover:bg-secondary-600 text-primary-500 substitute-product" data-current-product-id="' . esc_attr( $product->get_id() ) . '" data-upsell-product-id="' . esc_attr( $upsell_id ) . '">';
                echo __('Fazer Upgrade', 'woocommerce');
                echo '</button>';
            }

            woocommerce_product_loop_end();
            echo '</div>';
            wp_reset_postdata();
        }
    }
}


function substitute_product_in_cart() {
    // Verifica e sanitiza os dados recebidos
    $current_product_id = isset($_POST['current_product_id']) ? intval($_POST['current_product_id']) : 0;
    $upsell_product_id = isset($_POST['upsell_product_id']) ? intval($_POST['upsell_product_id']) : 0;

    if ($current_product_id && $upsell_product_id) {
        // Remove o produto atual do carrinho
        foreach (WC()->cart->get_cart() as $cart_item_key => $cart_item) {
            if ($cart_item['product_id'] == $current_product_id) {
                WC()->cart->remove_cart_item($cart_item_key);
                break;
            }
        }

        // Adiciona o produto upsell no carrinho
        WC()->cart->add_to_cart($upsell_product_id);

        wp_send_json_success(array('message' => 'Produto substituído com sucesso.'));
    } else {
        wp_send_json_error(array('message' => 'Erro ao processar a substituição.'));
    }

    wp_die();
}
add_action('wp_ajax_substitute_product_in_cart', 'substitute_product_in_cart');
add_action('wp_ajax_nopriv_substitute_product_in_cart', 'substitute_product_in_cart');

// ==========================================
// Função para salvar os campos de CPF, CNPJ, Tipo de Pessoa, Número, Complemento e Bairro via API REST
// ==========================================
function save_custom_billing_fields_via_api($customer, $data) {
    $user_id = $customer->get_id();

    // Adicionar logs para depuração
    error_log('Saving custom billing fields for user ID: ' . $user_id);
    error_log('Received billing data: ' . print_r($data['billing'], true));

    // Verificar se o campo 'billing' existe e é um array
    if (isset($data['billing']) && is_array($data['billing'])) {

        // Salvar CPF se estiver presente nos dados enviados
        if (!empty($data['billing']['billing_cpf'])) {
            update_user_meta($user_id, 'billing_cpf', sanitize_text_field($data['billing']['billing_cpf']));
        }

        // Salvar CNPJ se estiver presente nos dados enviados
        if (!empty($data['billing']['billing_cnpj'])) {
            update_user_meta($user_id, 'billing_cnpj', sanitize_text_field($data['billing']['billing_cnpj']));
        }

        // Salvar Tipo de Pessoa se estiver presente nos dados enviados
        if (!empty($data['billing']['billing_persontype'])) {
            update_user_meta($user_id, 'billing_persontype', sanitize_text_field($data['billing']['billing_persontype']));
        }
		
		// Salvar Número, Complemento e Bairro
		if( isset( $data['billing']['billing_number'] ) ) {
			update_user_meta( $user_id, 'billing_number', sanitize_text_field( $data['billing']['billing_number'] ) );
		}

		if( isset( $data['billing']['billing_address_2'] ) ) {
			update_user_meta( $user_id, 'billing_address_2', sanitize_text_field( $data['billing']['billing_address_2'] ) );
		}

		if( isset( $data['billing']['billing_neighborhood'] ) ) {
			update_user_meta( $user_id, 'billing_neighborhood', sanitize_text_field( $data['billing']['billing_neighborhood'] ) );
		}
    }
}
add_action('woocommerce_rest_customer_update', 'save_custom_billing_fields_via_api', 10, 2);



function woocommerce_checkout_personal_data() {
    // Esta função pode exibir campos de usuário (dados pessoais)
    echo '<div class="flex flex-wrap woocommerce-billing-fields__field-wrapper">';
    woocommerce_form_field( 'billing_first_name', array(
        'type'          => 'text',
        'label'         => __('Nome'),
        'required'      => true,
    ), WC()->checkout->get_value( 'billing_first_name' ));

    woocommerce_form_field( 'billing_last_name', array(
        'type'          => 'text',
        'label'         => __('Sobrenome'),
        'required'      => true,
    ), WC()->checkout->get_value( 'billing_last_name' ));

    woocommerce_form_field( 'billing_email', array(
        'type'          => 'email',
        'label'         => __('Email'),
        'required'      => true,
    ), WC()->checkout->get_value( 'billing_email' ));

    // Adicione outros campos necessários
    echo '</div>';
}


function woocommerce_checkout_billing_data() {
    // Obter o objeto de checkout do WooCommerce
    $checkout = WC()->checkout();

    // Verificar se o objeto foi obtido corretamente
    if (!$checkout) {
        return;
    }

    // Campos de faturamento padrão do WooCommerce
    echo '<div class="flex flex-wrap woocommerce-billing-fields__field-wrapper">';
    do_action( 'woocommerce_before_checkout_billing_form', $checkout );

    foreach ( $checkout->get_checkout_fields( 'billing' ) as $key => $field ) {
        woocommerce_form_field( $key, $field, $checkout->get_value( $key ) );
    }

    do_action( 'woocommerce_after_checkout_billing_form', $checkout );
    echo '</div>';
}
