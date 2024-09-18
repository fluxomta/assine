<?php
defined( 'ABSPATH' ) || exit;
?>

<div class="text-center text-lg ">
<h1 class="text-3xl font-bold text-center">Obrigado pela sua compra!</h1>

<h2 class="text-2xl font-bold woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received mb-4">
    <?php _e( 'Seu pedido foi processado com sucesso.', 'woocommerce' ); ?>
</h2>

<p >
    Acesse a plataforma para realizar o <strong>download do seu Indicador</strong> utilizando seu email e senha cadastrados na finalização da compra.
</p>
<p><strong>Verifique sua caixa de e-mail</strong>, enviamos 1 tutorial sobre o download do indicador e acesso da plataforma.</p>
</div>
<?php if ( $order ) : ?>
<div class="grid grid-cols-2 mt-4">
    <ul class="woocommerce-order-overview woocommerce-thankyou-order-details order_details bg-primary-500">

        <li class="woocommerce-order-overview__order order">
            <?php _e( 'Número do pedido:', 'woocommerce' ); ?>
            <strong><?php echo $order->get_order_number(); ?></strong>
        </li>

        <li class="woocommerce-order-overview__date date">
            <?php _e( 'Data do pedido:', 'woocommerce' ); ?>
            <strong><?php echo wc_format_datetime( $order->get_date_created() ); ?></strong>
        </li>

        <li class="woocommerce-order-overview__total total">
            <?php _e( 'Total da compra:', 'woocommerce' ); ?>
            <strong><?php echo $order->get_formatted_order_total(); ?></strong>
        </li>

        <li class="woocommerce-order-overview__payment-method method">
            <?php _e( 'Método de pagamento:', 'woocommerce' ); ?>
            <strong><?php echo wp_kses_post( $order->get_payment_method_title() ); ?></strong>
        </li>
        <li class="woocommerce-order-overview__products products">
    <?php _e( 'Indicador Assinado:', 'woocommerce' ); ?>
    <strong>
        <?php
        // Obtém os itens do pedido e exibe os nomes dos produtos
        $items = $order->get_items();
        foreach ( $items as $item ) {
            echo $item->get_name(); // Nome do produto
            break; // Considera apenas o primeiro produto, ou remova isso para mostrar todos
        }
        ?>
    </strong>
</li>

    </ul>

    <div class="max-w-7xl rounded-md p-8 text-white bg-primary-500 border border-secondary-400 flex items-center justify-center flex-col">
        <h2 class="text-white text-2xl font-bold"></h2>
        <a href="https://dashboard.fluxomta.com/login" class="btn-large" target="_Blank">Acessar agora</a>
    <div>
</div>

<?php
defined( 'ABSPATH' ) || exit;

// Obtém o ID do pedido da variável global de WooCommerce
if ( isset( $order ) && is_a( $order, 'WC_Order' ) ) {
    $order_id = $order->get_id();
} else {
    $order_id = apply_filters( 'woocommerce_thankyou_order_id', absint( get_query_var( 'order-received' ) ) );
}

// Certifique-se de que o pedido foi recuperado
$order = wc_get_order( $order_id );
if ( $order ) :
    $items = $order->get_items();
    if ( ! empty( $items ) ) :
        // Pega o nome do primeiro produto
        foreach ( $items as $item ) {
            $product_name = $item->get_name();
            break; // Considera apenas o primeiro produto
        }

        // Sanitiza o nome do produto para ser usado na URL
        $product_name_slug = sanitize_title( $product_name );
        ?>

        <script type="text/javascript">
            document.addEventListener("DOMContentLoaded", function() {
                // Adiciona o parâmetro do produto na URL
                var productName = "<?php echo $product_name_slug; ?>";
                var newUrl = new URL(window.location.href);
                newUrl.searchParams.set('produto', productName);
                window.history.replaceState({}, '', newUrl);
            });
        </script>

    <?php endif;
endif;
?>


<?php endif; ?>
