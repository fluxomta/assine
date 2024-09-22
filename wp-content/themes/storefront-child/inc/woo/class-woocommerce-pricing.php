<?php

class WooCommerce_Pricing {

    // Método para calcular o preço proporcional
    public function calcular_preco_proporcional($product_id, $data_inscricao = null) {
        $product = wc_get_product($product_id);
        $preco_original = $product->get_regular_price();
        $dias_no_mes = date('t', strtotime($data_inscricao ?: date('Y-m-d')));
        $preco_diario = $preco_original / $dias_no_mes;
        $dia_da_inscricao = date('j', strtotime($data_inscricao ?: date('Y-m-d')));
        $dias_restantes = $dias_no_mes - $dia_da_inscricao + 1;
        $preco_final = $preco_diario * $dias_restantes;
        return $preco_final;
    }

    // Método para atualizar o preço dos itens no carrinho
    public function atualizar_preco_no_carrinho($cart) {
        if (is_admin() && !defined('DOING_AJAX')) return;

        foreach ($cart->get_cart() as $cart_item) {
            $product_id = $cart_item['product_id'];
            $preco_final = $this->calcular_preco_proporcional($product_id);
            $cart_item['data']->set_price($preco_final);
        }
    }

    // Método para adicionar uma mensagem de validade no checkout
    public function adicionar_mensagem_validade_checkout($checkout) {
        if (WC()->cart->is_empty()) {
            return;
        }

        foreach (WC()->cart->get_cart() as $cart_item) {
            $product_id = $cart_item['product_id'];
            $mensagem_validade = $this->gerar_mensagem_validade($product_id);

            echo '<tr class="cart-validade"><th colspan="2">' . $mensagem_validade . '</th></tr>';
        }
    }

    // Método para gerar a mensagem de validade do produto
    public function gerar_mensagem_validade($product_id) {
        $product = wc_get_product($product_id);
        $preco_original = $product->get_regular_price();
        $dias_no_mes = date('t');
        $dia_atual = date('j');
        $dias_restantes = $dias_no_mes - $dia_atual + 1;
        $preco_diario = $preco_original / $dias_no_mes;
        $preco_proporcional = $preco_diario * $dias_restantes;

        return sprintf(
            "Este produto é válido até o último dia deste mês. O valor original é R$ %s e você está pagando um valor proporcional de R$ %s referente a %s dias de uso.",
            number_format($preco_original, 2, ',', '.'),
            number_format($preco_proporcional, 2, ',', '.'),
            $dias_restantes
        );
    }
}

// Instanciando a classe e registrando os hooks
$woocommerce_pricing = new WooCommerce_Pricing();
add_action('woocommerce_before_calculate_totals', array($woocommerce_pricing, 'atualizar_preco_no_carrinho'), 10, 1);
add_action('woocommerce_review_order_after_order_total', array($woocommerce_pricing, 'adicionar_mensagem_validade_checkout'));
