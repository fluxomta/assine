<?php

namespace Uncanny_Automator_Pro;

use Uncanny_Automator\Recipe;

/**
 * Class WC_SET_SUBSCRIPTION_STATUS
 *
 * @package Uncanny_Automator_Pro
 */
class WC_SET_SUBSCRIPTION_STATUS {
	use Recipe\Actions;

	/**
	 * Set up Automator action constructor.
	 */
	public function __construct() {
		include_once ABSPATH . 'wp-admin/includes/plugin.php';
		if ( is_plugin_active( 'woocommerce-subscriptions/woocommerce-subscriptions.php' ) ) {
			$this->setup_action();
		}
	}

	/**
	 * Define and register the action by pushing it into the Automator object
	 */
	protected function setup_action() {
		$this->set_integration( 'WC' );
		$this->set_action_code( 'WCVARIATIONSUBSCRIPION' );
		$this->set_action_meta( 'WOOVARIATIONSUBS' );
		$this->set_requires_user( true );
		$this->set_is_pro( true );

		/* translators: Action - WooCommerce Subscription */
		$this->set_sentence( sprintf( esc_attr__( "Set the user's subscription of {{a subscription product:%1\$s}} to {{a status:%2\$s}}", 'uncanny-automator-pro' ), $this->get_action_meta(), 'WCS_STATUS' ) );

		/* translators: Action - WooCommerce Subscription */
		$this->set_readable_sentence( esc_attr__( "Set the user's subscription of {{a subscription product}} to {{a status}}", 'uncanny-automator-pro' ) );

		$this->set_options_callback( array( $this, 'load_options' ) );
		$this->register_action();
	}

	/**
	 * load_options
	 *
	 * @return array
	 */
	public function load_options() {

		$options = array(
			'options' => array(
				Automator()->helpers->recipe->woocommerce->options->pro->all_wc_subscriptions( __( 'Subscription product', 'uncanny-automator-pro' ), $this->get_action_meta(), false, true ),
				Automator()->helpers->recipe->woocommerce->options->pro->wc_subscription_statuses( null, 'WCS_STATUS' ),
			),
		);

		return Automator()->utilities->keep_order_of_options( $options );
	}

	/**
	 * Process the action.
	 *
	 * @param $user_id
	 * @param $action_data
	 * @param $recipe_id
	 * @param $args
	 * @param $parsed
	 *
	 * @return void.
	 * @throws \Exception
	 */
	protected function process_action( $user_id, $action_data, $recipe_id, $args, $parsed ) {
		// Get product ID
		$product_id = isset( $parsed[ $this->get_action_meta() ] ) ? sanitize_text_field( $parsed[ $this->get_action_meta() ] ) : 0;
		$sub_args   = array(
			'customer_id'            => $user_id,
			'subscriptions_per_page' => 999,
			'subscription_status'    => apply_filters(
				'automator_pro_woo_subscription_status',
				array(
					'active',
					'on-hold',
					'pending',
					'pending-cancel',
				),
				$this
			),
		);
		// If "Any" not selected, fetch by product
		if ( intval( '-1' ) !== intval( $product_id ) ) {
			$sub_args['product_id'] = $product_id;
		}
		// get subscriptions
		$subscriptions = wcs_get_subscriptions( $sub_args );

		// No subscriptions found
		if ( empty( $subscriptions ) ) {
			$action_data['do-nothing']           = true;
			$action_data['complete_with_errors'] = true;
			$error_message                       = __( 'The user was not a subscriber of the specified product.', 'uncanny-automator-pro' );
			if ( intval( '-1' ) !== intval( $product_id ) ) {
				$error_message = __( 'No subscription is associated with the user.', 'uncanny-automator-pro' );
			}
			Automator()->complete->action( $user_id, $action_data, $recipe_id, $error_message );

			return;
		}
		//
		$set_status = Automator()->parse->text( str_replace( 'wc-', '', $action_data['meta']['WCS_STATUS'] ), $recipe_id, $user_id, $args );
		$sub_failed = array();
		$sub_passed = array();
		/** @var \WC_Subscription $subscription */
		foreach ( $subscriptions as $subscription ) {
			if ( ! $subscription->has_status( $set_status ) && $subscription->can_be_updated_to( $set_status ) ) {
				try {
					$subscription->update_status( $set_status );
					$sub_passed[ $subscription->get_id() ] = sprintf( 'Subscription #%d - Status changed to %s', $subscription->get_id(), $set_status );
				} catch ( \Exception $e ) {
					$error_message                         = $e->getMessage();
					$sub_failed[ $subscription->get_id() ] = sprintf( 'Subscription #%d - %s', $subscription->get_id(), $error_message );
				}
			} else {
				$sub_failed[ $subscription->get_id() ] = sprintf( '#%d - %s %s to %s', $subscription->get_id(), __( 'Subscription status cannot be switched from' ), $subscription->get_status(), $set_status );
			}
		}
		// Nothing changed
		if ( empty( $sub_passed ) && empty( $sub_failed ) ) {
			$error_message = __( 'We are not able to change subscription status.', 'uncanny-automator-pro' );
		}

		// Some subscriptions failed
		if ( ! empty( $sub_failed ) ) {
			$error_message = join( ', ', $sub_failed );
		}
		if ( ! empty( $sub_passed ) && ! empty( $error_message ) ) {
			$error_message = sprintf( '%s, %s', $error_message, join( ',', $sub_passed ) );
		}

		if ( ! empty( $error_message ) ) {
			$action_data['do-nothing']           = true;
			$action_data['complete_with_errors'] = true;
			$message                             = $error_message;
			Automator()->complete->action( $user_id, $action_data, $recipe_id, $message );

			return;
		}

		Automator()->complete->action( $user_id, $action_data, $recipe_id );
	}
}
