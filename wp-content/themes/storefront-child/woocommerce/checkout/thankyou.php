<?php
defined( 'ABSPATH' ) || exit;
?>

<div class="woocommerce-order">

<?php
	if ( $order ) :

        do_action( 'woocommerce_before_thankyou', $order->get_id() );
	?>

<?php if ( $order->has_status( 'failed' ) ) : ?>

<p class="woocommerce-notice woocommerce-notice--error woocommerce-thankyou-order-failed"><?php esc_html_e( 'Unfortunately your order cannot be processed as the originating bank/merchant has declined your transaction. Please attempt your purchase again.', 'woocommerce' ); ?></p>

    <p class="woocommerce-notice woocommerce-notice--error woocommerce-thankyou-order-failed-actions">
        <a href="<?php echo esc_url( $order->get_checkout_payment_url() ); ?>" class="button pay"><?php esc_html_e( 'Pay', 'woocommerce' ); ?></a>
        <?php if ( is_user_logged_in() ) : ?>
            <a href="<?php echo esc_url( wc_get_page_permalink( 'myaccount' ) ); ?>" class="button pay"><?php esc_html_e( 'My account', 'woocommerce' ); ?></a>
        <?php endif; ?>
    </p>

<?php else : ?>

    <?php wc_get_template( 'checkout/order-received.php', array( 'order' => $order ) ); ?>


    <div class="text-center text-lg ">
        <h1 class="text-3xl font-bold text-center">Obrigado pela sua compra!</h1>

        <h2 class="text-2xl font-bold woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received mb-4">
            <?php _e( 'Seu pedido foi processado com sucesso.', 'woocommerce' ); ?>
        </h2>

        <p>Acesse a plataforma para realizar o <strong>download do seu Indicador</strong> utilizando seu email e senha cadastrados na finalização da compra.</p>
        <p><strong>Verifique sua caixa de e-mail</strong></p>
        <p> Veja agora mesmo o tutorial sobre acesso a plataforma e o download do indicador</p>
    </div>
    <div class="max-w-3xl mx-auto">
        <div class="p-2 bg-secondary-500 rounded-md mt-4 shadow-md">
            <iframe src="https://player.vimeo.com/video/1011167771" class="w-full aspect-video" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
    </div>


    <div class="grid grid-cols-2 mt-4">
        <ul class="woocommerce-order-overview woocommerce-thankyou-order-details order_details">
            <li class="woocommerce-order-overview__order order">
                <?php esc_html_e( 'Order number:', 'woocommerce' ); ?>
                <strong><?php echo $order->get_order_number(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></strong>
            </li>

            <li class="woocommerce-order-overview__date date">
                <?php esc_html_e( 'Date:', 'woocommerce' ); ?>
                <strong><?php echo wc_format_datetime( $order->get_date_created() ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></strong>
            </li>

            <?php if ( is_user_logged_in() && $order->get_user_id() === get_current_user_id() && $order->get_billing_email() ) : ?>
                <li class="woocommerce-order-overview__email email">
                    <?php esc_html_e( 'Email:', 'woocommerce' ); ?>
                    <strong><?php echo $order->get_billing_email(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></strong>
                </li>
            <?php endif; ?>

            <li class="woocommerce-order-overview__total total">
                <?php esc_html_e( 'Total:', 'woocommerce' ); ?>
                <strong><?php echo $order->get_formatted_order_total(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></strong>
            </li>

            <?php if ( $order->get_payment_method_title() ) : ?>
                <li class="woocommerce-order-overview__payment-method method">
                    <?php esc_html_e( 'Payment method:', 'woocommerce' ); ?>
                    <strong><?php echo wp_kses_post( $order->get_payment_method_title() ); ?></strong>
                </li>
            <?php endif; ?>
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

        <div class="max-w-7xl rounded-md p-8 text-white  flex items-center justify-center flex-col">
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

<?php do_action( 'woocommerce_thankyou_' . $order->get_payment_method(), $order->get_id() ); ?>
<?php do_action( 'woocommerce_thankyou', $order->get_id() ); ?>

<?php else : ?>

<?php wc_get_template( 'checkout/order-received.php', array( 'order' => false ) ); ?>

<?php endif; ?>

</div>
