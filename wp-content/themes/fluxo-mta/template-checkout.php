<?php
/*
 * Template Name: Checkout Multi-Step with Persistent Order Review
 * Description: Template de checkout multi-step com resumo persistente.
 */

get_header('checkout'); ?>

<div class="w-full mb-4 bg-primary-600">
    <div class="container w-full mx-auto">
        <?php
        // Verifique se existe algum produto no carrinho
        if ( ! WC()->cart->is_empty() ) {
            $cart_items = WC()->cart->get_cart();
            // Pegue o primeiro produto no carrinho (como será sempre apenas 1 produto)
            foreach ( $cart_items as $cart_item ) {
                $product = wc_get_product( $cart_item['product_id'] );
                $product_name = $product->get_name();
                break; // Só precisamos do primeiro produto
            }
        } else {
            $product_name = __('Produto', 'woocommerce');
        }
        ?>
        <div class="p-4 px-6 text-2xl font-semibold text-white">
            Checkout - Assinatura <span class="text-secondary-500"><?php echo esc_html( $product_name ); ?></span>
        </div>
    </div>
</div>

<div class="container px-4 mx-auto">
    <form id="checkout-form" method="post" class="checkout woocommerce-checkout">
        <div id="checkout-steps" class="col-span-3 step-content">
                <?php the_content();?>
        </div>
    </form>
</div>

<?php get_footer('checkout'); ?>
