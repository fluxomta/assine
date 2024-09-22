<?php

function calcular_preco_proporcional($product_id, $data_inscricao) {
    $product = wc_get_product($product_id);
    $preco_original = $product->get_regular_price();
    $dias_no_mes = date('t', strtotime($data_inscricao));
    $preco_diario = $preco_original / $dias_no_mes;
    $dia_da_inscricao = date('j', strtotime($data_inscricao));
    $dias_restantes = $dias_no_mes - $dia_da_inscricao + 1;
    $preco_final = $preco_diario * $dias_restantes;
    return $preco_final;
}

function atualizar_preco_no_carrinho($cart) {
    if (is_admin() && !defined('DOING_AJAX')) return;

    foreach ($cart->get_cart() as $cart_item) {
        $product_id = $cart_item['product_id'];
        $data_inscricao = date('Y-m-d');
        $preco_final = calcular_preco_proporcional($product_id, $data_inscricao);
        $cart_item['data']->set_price($preco_final);
    }
}

add_action('woocommerce_before_calculate_totals', 'atualizar_preco_no_carrinho', 10, 1);

function adicionar_mensagem_validade_checkout($checkout) {
    if (WC()->cart->is_empty()) {
        return;
    }

    foreach (WC()->cart->get_cart() as $cart_item) {
        $product = wc_get_product($cart_item['product_id']);
        $preco_original = $product->get_regular_price();
        $dias_no_mes = date('t');
        $dia_atual = date('j');
        $dias_restantes = $dias_no_mes - $dia_atual + 1;
        $preco_diario = $preco_original / $dias_no_mes;
        $preco_proporcional = $preco_diario * $dias_restantes;

        $mensagem_validade = sprintf(
            "Este produto é válido até o último dia deste mês. O valor original é R$ %s e você está pagando um valor proporcional de R$ %s referente a %s dias de uso.",
            number_format($preco_original, 2, ',', '.'),
            number_format($preco_proporcional, 2, ',', '.'),
            $dias_restantes
        );

        echo '<tr class="cart-validade"><th colspan="2">' . $mensagem_validade . '</th></tr>';
    }
}
add_action('woocommerce_review_order_after_order_total', 'adicionar_mensagem_validade_checkout');
