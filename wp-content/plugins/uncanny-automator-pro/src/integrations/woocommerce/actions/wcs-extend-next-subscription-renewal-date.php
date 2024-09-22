<?php

namespace Uncanny_Automator_Pro;

/**
 * Class WCS_EXTEND_NEXT_SUBSCRIPTION_RENEWAL_DATE
 *
 * @package Uncanny_Automator_Pro
 */
class WCS_EXTEND_NEXT_SUBSCRIPTION_RENEWAL_DATE extends \Uncanny_Automator\Recipe\Action {

	/**
	 * @return mixed|void
	 */
	protected function setup_action() {

		if ( ! class_exists( 'WC_Subscriptions' ) ) {
			return false;
		}
		$this->set_integration( 'WC' );
		$this->set_action_code( 'WCS_NEXT_DATE_EXTENDED' );
		$this->set_action_meta( 'WCS_PRODUCTS' );
		$this->set_is_pro( true );
		$this->set_requires_user( true );
		$this->set_sentence( sprintf( esc_attr_x( "Extend the user's next subscription renewal date to {{a specific product:%1\$s}} by {{a number of days:%2\$s}}", 'WooCommerce Subscription', 'uncanny-automator-pro' ), $this->get_action_meta(), 'NUMBER_OF_DAYS:' . $this->get_action_meta() ) );
		$this->set_readable_sentence( esc_attr_x( "Extend the user's next subscription renewal date to {{a specific product}} by {{a number of days}}", 'WooCommerce Subscription', 'uncanny-automator-pro' ) );
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
				'text'  => esc_attr_x( $option, 'WooCommerce Subscription', 'uncanny-automator-pro' ),
				'value' => $k,
			);
		}

		return array(
			array(
				'input_type'      => 'select',
				'option_code'     => $this->get_action_meta(),
				'label'           => _x( 'Subscription product', 'WooCommerce Subscription', 'uncanny-automator-pro' ),
				'required'        => true,
				'options'         => $options,
				'relevant_tokens' => array(),
			),
			Automator()->helpers->recipe->field->text(
				array(
					'option_code' => 'NUMBER_OF_DAYS',
					'label'       => __( 'Days', 'uncanny-automator-pro' ),
					'input_type'  => 'int',
				)
			),
		);
	}

	/**
	 * @param int   $user_id
	 * @param array $action_data
	 * @param int   $recipe_id
	 * @param array $args
	 * @param       $parsed
	 */
	protected function process_action( $user_id, $action_data, $recipe_id, $args, $parsed ) {
		$product_id = sanitize_text_field( $parsed[ $this->get_action_meta() ] );
		$no_of_days = sanitize_text_field( $parsed['NUMBER_OF_DAYS'] );

		$product = wc_get_product( absint( $product_id ) );

		if ( ! $product->is_type( 'subscription' ) ) {
			$this->add_log_error( esc_attr_x( 'Provided product is not of a subscription type.', 'WooCommerce Subscription', 'uncanny-automator-pro' ) );

			return false;
		}

		$subscriptions = wcs_get_subscriptions(
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
		if ( empty( $subscriptions ) ) {
			$this->add_log_error( esc_attr_x( 'No active subscriptions were found for this user.', 'WooCommerce Subscription', 'uncanny-automator-pro' ) );

			return false;
		}

		$count = 0;
		foreach ( $subscriptions as $subscription_list ) {
			$subscription                    = wcs_get_subscription( $subscription_list->get_id() );
			$dates_to_update                 = array();
			$dates_to_update['next_payment'] = gmdate( 'Y-m-d H:i:s', wcs_add_time( $no_of_days, 'day', $subscription->get_time( 'next_payment' ) ) );

			//          if ( $subscription->get_time( 'end' ) <= strtotime( $dates_to_update['next_payment'] ) ) {
			//              $this->add_log_error( esc_attr_x( 'The end date must occur after the next payment date.', 'WooCommerce Subscription', 'uncanny-automator-pro' ) );
			//
			//              return false;
			//          }

			$order_number = sprintf( _x( '#%s', 'hash before order number', 'woocommerce-subscriptions' ), $subscription->get_order_number() ); //phpcs:ignore WordPress.WP.I18n.MissingTranslatorsComment
			$order_link   = sprintf( '<a href="%s">%s</a>', esc_url( wcs_get_edit_post_link( $subscription->get_id() ) ), $order_number );

			try {
				$subscription->update_dates( $dates_to_update );
				// translators: placeholder contains a link to the order's edit screen.
				$subscription->add_order_note( sprintf( __( 'Subscription successfully extended by %d days with Automator.', 'woocommerce-subscriptions' ), $no_of_days ) );
				$count ++;
			} catch ( \Exception $e ) {
				// translators: placeholder contains a link to the order's edit screen.
				$subscription->add_order_note( sprintf( __( 'Failed to extend the next date for the subscription after customer renewed early. Order %s', 'woocommerce-subscriptions' ), $order_link ) );
			}
		}

		if ( 0 === $count ) {
			$this->add_log_error( esc_attr_x( 'The subscription has no next date.', 'WooCommerce Subscription', 'uncanny-automator-pro' ) );

			return false;
		}

		return true;
	}

}
