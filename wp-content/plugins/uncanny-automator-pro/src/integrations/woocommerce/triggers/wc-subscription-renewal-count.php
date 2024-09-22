<?php

namespace Uncanny_Automator_Pro;

use Uncanny_Automator\Recipe;

/**
 * Class WC_SUBSCRIPTION_RENEWAL_COUNT
 *
 * @package Uncanny_Automator_Pro
 */
class WC_SUBSCRIPTION_RENEWAL_COUNT {

	use Recipe\Triggers;

	/**
	 * Set up Automator trigger constructor.
	 */
	public function __construct() {
		include_once ABSPATH . 'wp-admin/includes/plugin.php';
		if ( is_plugin_active( 'woocommerce-subscriptions/woocommerce-subscriptions.php' ) ) {
			$this->setup_trigger();
		}
	}

	/**
	 * Define and register the trigger by pushing it into the Automator object
	 */
	public function setup_trigger() {
		$this->set_integration( 'WC' );
		$this->set_trigger_code( 'WC_SUBSCRIPTION_RENEWAL_COUNT' );
		$this->set_trigger_meta( 'WOOSUBSCRIPTIONS' );
		$this->set_is_login_required( true );
		$this->set_is_pro( true );
		$this->set_author( Automator()->get_author_name( $this->get_trigger_code() ) );
		$this->set_support_link( Automator()->get_author_support_link( $this->get_trigger_code(), 'integration/woocommerce/' ) );
		/* Translators: Trigger sentence - WooCommerce Subscription */
		$this->set_sentence( sprintf( esc_attr_x( 'A user renews a subscription to {{a product:%1$s}} for the {{nth:%2$s}} time', 'WooCommerce Subscription', 'uncanny-automator-pro' ), $this->get_trigger_meta(), 'RENEWAL_COUNT' ) );
		/* Translators: Trigger sentence - WooCommerce Subscription */
		$this->set_readable_sentence( esc_attr_x( 'A user renews a subscription to {{a product}} for the {{nth}} time', 'WooCommerce Subscription', 'uncanny-automator-pro' ) ); // Non-active state sentence to show
		$this->set_action_hook( 'woocommerce_subscription_renewal_payment_complete' );
		$this->set_action_args_count( 2 );
		$this->set_options_callback( array( $this, 'load_options' ) );
		$this->register_trigger();
	}

	/**
	 * @return array
	 */
	public function load_options() {
		$options_array = array(
			'options' => array(
				Automator()->helpers->recipe->woocommerce->options->pro->all_wc_subscriptions( null, $this->trigger_meta ),
				Automator()->helpers->recipe->field->text(
					array(
						'option_code'     => 'RENEWAL_COUNT',
						'input_type'      => 'int',
						'label'           => esc_attr_x( 'Count', 'WooCommerce Subscription', 'uncanny-automator-pro' ),
						'min_number'      => 1,
						'relevant_tokens' => array(),
						//'token_name'  => _x( 'Renewal count', 'uncanny-automator-pro' ),
					)
				),
			),
		);

		return Automator()->utilities->keep_order_of_options( $options_array );
	}

	/**
	 * @param ...$args
	 *
	 * @return bool
	 */
	public function validate_trigger( ...$args ) {
		list( $subscription, $last_order ) = array_shift( $args );

		if ( ! $subscription instanceof \WC_Subscription || ! $last_order instanceof \WC_Order ) {
			return false;
		}

		return true;

	}

	/**
	 * @param $data
	 *
	 * @return void
	 */
	public function prepare_to_run( $data ) {
		$this->set_conditional_trigger( true );
	}

	/**
	 * Check product_ID and renewal count against the trigger meta
	 *
	 * @param mixed ...$args
	 *
	 * @return bool|mixed
	 */
	public function validate_conditions( ...$args ) {
		$subscription = $args[0][0];
		if ( ! $subscription instanceof \WC_Subscription ) {
			return false;
		}
		$renewal_count = $subscription->get_payment_count( 'completed', 'renewal' );
		$items         = $subscription->get_items();
		/** @var \WC_Order_Item_Product $item */
		$matched = false;
		foreach ( $items as $item ) {

			if ( 'subscription' !== $item->get_product()->get_type() && 'subscription_variation' !== $item->get_product()->get_type() ) {
				continue;
			}

			$matched = $this->find_all( $this->trigger_recipes() )
							->where( array( $this->get_trigger_meta(), 'RENEWAL_COUNT' ) )
							->match( array( $item->get_product_id(), $renewal_count ) )
							->format( array( 'intval', 'absint' ) )
							->get();

			if ( $matched ) {
				break;
			}
		}

		return $matched;
	}
}
