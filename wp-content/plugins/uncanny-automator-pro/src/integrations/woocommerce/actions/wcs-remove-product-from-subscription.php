<?php

namespace Uncanny_Automator_Pro;

use Uncanny_Automator\Recipe\Action;

/**
 * Class WCS_REMOVE_PRODUCT_FROM_SUBSCRIPTION
 *
 * @pacakge Uncanny_Automator_Pro
 */
class WCS_REMOVE_PRODUCT_FROM_SUBSCRIPTION extends Action {

	/**
	 * @return mixed|void
	 */
	protected function setup_action() {

		if ( ! class_exists( 'WC_Subscriptions' ) ) {
			return false;
		}

		$this->set_integration( 'WC' );
		$this->set_action_code( 'WCS_REMOVE_PRODUCT' );
		$this->set_action_meta( 'WCS_PRODUCTS' );
		$this->set_is_pro( true );
		$this->set_requires_user( true );
		$this->set_sentence( sprintf( esc_attr_x( "Remove {{a subscription product:%1\$s}} from the user's {{subscription:%2\$s}}", 'Woo Subscription', 'uncanny-automator-pro' ), $this->get_action_meta(), 'SUBSCRIPTION_ID:' . $this->get_action_meta() ) );
		$this->set_readable_sentence( esc_attr_x( "Remove {{a subscription product}} from the user's {{subscription}}", 'Woo Subscription', 'uncanny-automator-pro' ) );
	}

	/**
	 * Define the Action's options
	 *
	 * @return array
	 */
	public function options() {
		$subscription_options = Automator()->helpers->recipe->woocommerce->options->pro->all_wc_subscriptions( null, $this->get_action_meta(), false, false, false );
		$options              = array();
		foreach ( $subscription_options['options'] as $k => $option ) {
			$options[] = array(
				'text'  => esc_attr_x( $option, 'Woo Subscription', 'uncanny-automator-pro' ),
				'value' => $k,
			);
		}

		return array(
			array(
				'input_type'            => 'select',
				'option_code'           => $this->get_action_meta(),
				'label'                 => _x( 'Subscription product', 'Woo Subscription', 'uncanny-automator-pro' ),
				'required'              => true,
				'options'               => $options,
				'relevant_tokens'       => array(),
				'supports_custom_value' => false,
			),
			Automator()->helpers->recipe->field->int(
				array(
					'option_code' => 'SUBSCRIPTION_ID',
					'label'       => _x( 'Subscription ID', 'Woo Subscription', 'uncanny-automator-pro' ),
					'description' => _x( 'Leave empty to remove from all active subscriptions.', 'Woo Subscription', 'uncanny-automator-pro' ),
					'required'    => false,
				)
			),
		);
	}

	/**
	 * @param int $user_id
	 * @param array $action_data
	 * @param int $recipe_id
	 * @param array $args
	 * @param       $parsed
	 */
	protected function process_action( $user_id, $action_data, $recipe_id, $args, $parsed ) {
		$product_id      = sanitize_text_field( $parsed[ $this->get_action_meta() ] );
		$subscription_id = sanitize_text_field( $parsed['SUBSCRIPTION_ID'] );

		$product = wc_get_product( absint( $product_id ) );

		if ( ! $product->is_type( 'subscription' ) ) {
			$this->add_log_error( esc_attr_x( 'The provided product is not a valid a subscription product.', 'Woo Subscription', 'uncanny-automator-pro' ) );

			return false;
		}

		// If Subscription ID is set, remove the product from the subscription
		if ( ! empty( $subscription_id ) ) {
			$subscription = wcs_get_subscription( absint( $subscription_id ) );
			if ( ! $subscription instanceof \WC_Subscription ) {
				$this->add_log_error( esc_attr_x( 'The provided subscription ID is not a valid subscription ID.', 'Woo Subscription', 'uncanny-automator-pro' ) );

				return false;
			}

			$this->remove_product_from_subscription( $subscription, $product_id );

			return true;
		}

		$active_subscriptions = wcs_get_subscriptions(
			array(
				'subscriptions_per_page' => 9999,
				'orderby'                => 'start_date',
				'order'                  => 'DESC',
				'customer_id'            => $user_id,
				'product_id'             => absint( $product_id ),
				'subscription_status'    => array( 'active' ),
				'meta_query_relation'    => 'AND',
			)
		);

		if ( empty( $active_subscriptions ) ) {
			$this->add_log_error( esc_attr_x( 'There are no active subscriptions for this user.', 'WooCommerce Subscription', 'uncanny-automator-pro' ) );

			return null;
		}

		// Loop through active subscriptions
		foreach ( $active_subscriptions as $subscription ) {

			$this->remove_product_from_subscription( $subscription, $product_id );
		}

		return true;
	}

	/**
	 * @param $subscription
	 * @param $product_id
	 *
	 * @return bool
	 */
	public function remove_product_from_subscription( $subscription, $product_id ) {
		// Check if the subscription contains the specified product
		if ( ! $subscription->has_product( $product_id ) ) {
			$this->add_log_error( esc_attr_x( 'The subscription does not contain the provided product.', 'Woo Subscription', 'uncanny-automator-pro' ) );

			return false;
		}
		// Check if the subscription contains the specified product
		$subscription_items = $subscription->get_items();

		if ( empty( $subscription_items ) ) {
			$this->add_log_error( esc_attr_x( 'The subscription does not contain the provided product.', 'Woo Subscription', 'uncanny-automator-pro' ) );

			return false;
		}

		$modified = false;
		foreach ( $subscription_items as $item_id => $item ) {
			$product = $item->get_product();
			if ( $product && (int) $product->get_id() === (int) $product_id ) {
				$subscription->update_status( 'on-hold' );
				// Remove the product from the subscription
				$c = $subscription->remove_item( $item_id );
				if ( $c ) {
					$modified = true;
				}
				// Save the subscription
				$subscription->calculate_totals();
				$subscription->save();
				$subscription->update_status( 'active' );
			}
		}

		if ( ! $modified ) {
			$this->add_log_error( esc_attr_x( 'Unable to remove the product from the subscription.', 'Woo Subscription', 'uncanny-automator-pro' ) );

			return false;
		}
	}
}
