<?php

namespace Uncanny_Automator_Pro;

use Uncanny_Automator\Recipe;

/**
 * Class WC_SUBSCRIPTION_RENEWAL_FAIL
 *
 * @package Uncanny_Automator_Pro
 */
class WC_SUBSCRIPTION_RENEWAL_FAIL {

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
		$this->set_trigger_code( 'WCS_PAYMENT_FAILS' );
		$this->set_trigger_meta( 'WOOSUBSCRIPTIONS' );
		$this->set_is_login_required( true );
		$this->set_is_pro( true );
		/* Translators: Trigger sentence - WooCommerce Subscription */
		$this->set_sentence( sprintf( esc_html__( "A user's renewal payment for {{a subscription product:%1\$s}} fails", 'uncanny-automator-pro' ), $this->get_trigger_meta() ) );

		/* Translators: Trigger sentence - WooCommerce Subscription */
		$this->set_readable_sentence( esc_html__( "A user's renewal payment for {{a subscription product}} fails", 'uncanny-automator-pro' ) ); // Non-active state sentence to show

		$this->add_action( 'woocommerce_subscription_renewal_payment_failed' );
		$this->set_options_callback( array( $this, 'load_options' ) );
		$this->register_trigger();
	}

	/**
	 * @return array
	 */
	public function load_options() {

		return Automator()->utilities->keep_order_of_options(
			array(
				'options' => array(
					Automator()->helpers->recipe->woocommerce->options->pro->all_wc_subscriptions( null, $this->get_trigger_meta() ),
				),
			)
		);

	}

	/**
	 * @param ...$args
	 *
	 * @return bool
	 */
	public function validate_trigger( ...$args ) {
		$subscription = $args[0][0];

		if ( $subscription instanceof \WC_Subscription ) {
			$this->set_user_id( $subscription->get_user_id() );

			return true;
		}

		return false;

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
	 * Check email subject against the trigger meta
	 *
	 * @param mixed ...$args
	 *
	 * @return void
	 */
	public function validate_conditions( ...$args ) {
		$subscription = $args[0][0];

		if ( $subscription instanceof \WC_Subscription ) {
			$items = $subscription->get_items();
			foreach ( $items as $item ) {
				$result = $this->find_all( $this->trigger_recipes() )
							   ->where( array( $this->get_trigger_meta() ) )
							   ->match( array( $item->get_product_id() ) )
							   ->format( array( 'intval' ) )
							   ->get();

				return $result;
			}
		}
	}
}
