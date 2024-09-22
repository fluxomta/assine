<?php
defined( 'ABSPATH' ) || exit;
?>

<div class="woocommerce-order">

<?php
if ( $order ) :

    do_action( 'woocommerce_before_thankyou', $order->get_id() );

    if ( $order->has_status( 'failed' ) ) : ?>

        <p class="woocommerce-notice woocommerce-notice--error woocommerce-thankyou-order-failed">
            <?php esc_html_e( 'Unfortunately your order cannot be processed as the originating bank/merchant has declined your transaction. Please attempt your purchase again.', 'woocommerce' ); ?>
        </p>

        <p class="woocommerce-notice woocommerce-notice--error woocommerce-thankyou-order-failed-actions">
            <a href="<?php echo esc_url( $order->get_checkout_payment_url() ); ?>" class="button pay">
                <?php esc_html_e( 'Pay', 'woocommerce' ); ?>
            </a>
            <?php if ( is_user_logged_in() ) : ?>
                <a href="<?php echo esc_url( wc_get_page_permalink( 'myaccount' ) ); ?>" class="button pay">
                    <?php esc_html_e( 'My account', 'woocommerce' ); ?>
                </a>
            <?php endif; ?>
        </p>

    <?php else : ?>

        <?php if ( $order->has_status( 'on-hold' ) ) : ?>
            <!-- Se o status do pedido for "on-hold" -->
            <?php do_action( 'woocommerce_thankyou_' . $order->get_payment_method(), $order->get_id() ); ?>
            <?php do_action( 'woocommerce_thankyou', $order->get_id() ); ?>
        <?php else : ?>
            <!-- Se o status do pedido for "concluído" ou outro -->
            <div class="text-center text-lg">
                <h1 class="text-3xl font-bold text-center">Obrigado pela sua compra!</h1>

                <h2 class="text-2xl font-bold woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received mb-4">
                    <?php _e( 'Seu pedido foi processado com sucesso.', 'woocommerce' ); ?>
                </h2>

                <p>Acesse a plataforma para realizar o <strong>download do seu Indicador</strong> utilizando seu email e senha cadastrados na finalização da compra.</p>
                <p><strong>Verifique sua caixa de e-mail</strong></p>
                <p>Veja agora mesmo o tutorial sobre acesso a plataforma e o download do indicador</p>
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
                        <strong><?php echo esc_html( $order->get_order_number() ); ?></strong>
                    </li>

                    <li class="woocommerce-order-overview__date date">
                        <?php esc_html_e( 'Date:', 'woocommerce' ); ?>
                        <strong><?php echo esc_html( wc_format_datetime( $order->get_date_created() ) ); ?></strong>
                    </li>

                    <?php if ( is_user_logged_in() && $order->get_user_id() === get_current_user_id() && $order->get_billing_email() ) : ?>
                        <li class="woocommerce-order-overview__email email">
                            <?php esc_html_e( 'Email:', 'woocommerce' ); ?>
                            <strong><?php echo esc_html( $order->get_billing_email() ); ?></strong>
                        </li>
                    <?php endif; ?>

                    <li class="woocommerce-order-overview__total total">
                        <?php esc_html_e( 'Total:', 'woocommerce' ); ?>
                        <strong><?php echo esc_html( $order->get_formatted_order_total() ); ?></strong>
                    </li>

                    <?php if ( $order->get_payment_method_title() ) : ?>
                        <li class="woocommerce-order-overview__payment-method method">
                            <?php esc_html_e( 'Payment method:', 'woocommerce' ); ?>
                            <strong><?php echo wp_kses_post( $order->get_payment_method_title() ); ?></strong>
                        </li>
                    <?php endif; ?>

                    <li class="woocommerce-order-overview__products products">
                        <?php esc_html_e( 'Indicador Assinado:', 'woocommerce' ); ?>
                        <strong>
                            <?php
                            $items = $order->get_items();
                            foreach ( $items as $item ) {
                                echo esc_html( $item->get_name() ); // Nome do produto
                                break; // Considera apenas o primeiro produto, ou remova isso para mostrar todos
                            }
                            ?>
                        </strong>
                    </li>
                </ul>

                <div class="max-w-7xl rounded-md p-8 text-white flex items-center justify-center flex-col">
                    <a href="https://dashboard.fluxomta.com/login" class="btn-large" target="_blank">Acessar agora</a>
                </div>
            </div>

            <?php
            // Obtém o nome do primeiro produto
            $items = $order->get_items();
            if ( ! empty( $items ) ) {
                foreach ( $items as $item ) {
                    $product_name = $item->get_name();
                    break; // Considera apenas o primeiro produto
                }

                // Sanitiza o nome do produto para ser usado na URL
                $product_name_slug = sanitize_title( $product_name );
            }
            ?>

            <script type="text/javascript">
                document.addEventListener("DOMContentLoaded", function() {
                    // Adiciona o parâmetro do produto na URL
                    var productName = "<?php echo esc_js( $product_name_slug ); ?>";
                    var newUrl = new URL(window.location.href);
                    newUrl.searchParams.set('produto', productName);
                    window.history.replaceState({}, '', newUrl);
                });
            </script>

        <?php endif; // Fim do else que verifica o status do pedido ?>
        
    <?php endif; // Fim do else que verifica se o pedido falhou ?>

    <?php do_action( 'woocommerce_thankyou_' . $order->get_payment_method(), $order->get_id() ); ?>
    <?php do_action( 'woocommerce_thankyou', $order->get_id() ); ?>

<?php endif; ?>

</div>
