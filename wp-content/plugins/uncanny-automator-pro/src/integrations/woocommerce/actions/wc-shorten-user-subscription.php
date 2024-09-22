<?php

namespace Uncanny_Automator_Pro;

use Uncanny_Automator\Recipe;

/**
 * Class WC_SHORTEN_USER_SUBSCRIPTION
 *
 * @package Uncanny_Automator_Pro
 */
class WC_SHORTEN_USER_SUBSCRIPTION {

	use Recipe\Actions;
	use Recipe\Action_Tokens;

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
		$this->set_action_code( 'WC_SHORTEN_SUBSCRIPTION' );
		$this->set_action_meta( 'WC_SUBSCRIPTIONS' );
		$this->set_requires_user( true );
		$this->set_is_pro( true );

		/* translators: Action - WooCommerce Subscription */
		$this->set_sentence( sprintf( esc_attr_x( "Shorten a user's subscription to {{a specific product:%1\$s}} by {{a number of:%2\$s}} {{days:%3\$s}}", 'WooCommerce Subscriptions', 'uncanny-automator-pro' ), $this->get_action_meta(), $this->get_action_meta() . '_NO_OF:' . $this->get_action_meta(), $this->get_action_meta() . '_DURATION:' . $this->get_action_meta() ) );

		/* translators: Action - WooCommerce Subscription */
		$this->set_readable_sentence( esc_attr_x( "Shorten a user's subscription to {{a specific product}} by {{a number of}} {{days}}", 'WooCommerce Subscriptions', 'uncanny-automator-pro' ) );

		$this->set_options_callback( array( $this, 'load_options' ) );

		$this->set_action_tokens(
			array(
				'PRODUCT_TITLE'     => array(
					'name' => _x( 'Product title', 'WooCommerce Subscriptions', 'uncanny-automator-pro' ),
				),
				'PRODUCT_ID'        => array(
					'name' => _x( 'Product ID', 'WooCommerce Subscriptions', 'uncanny-automator-pro' ),
					'type' => 'int',
				),
				'PRODUCT_URL'       => array(
					'name' => _x( 'Product URL', 'WooCommerce Subscriptions', 'uncanny-automator-pro' ),
					'type' => 'url',
				),
				'PRODUCT_THUMB_URL' => array(
					'name' => _x( 'Product featured image URL', 'WooCommerce Subscriptions', 'uncanny-automator-pro' ),
					'type' => 'url',
				),
				'PRODUCT_THUMB_ID'  => array(
					'name' => _x( 'Product featured image ID', 'WooCommerce Subscriptions', 'uncanny-automator-pro' ),
					'type' => 'int',
				),
			),
			$this->action_code
		);

		$this->register_action();
	}

	/**
	 * load_options
	 *
	 * @return array
	 */
	public function load_options() {

		$select = array(
			'option_code'     => $this->get_action_meta() . '_DURATION',
			'label'           => esc_attr_x( 'Length', 'WooCommerce Subscriptions', 'uncanny-automator-pro' ),
			'input_type'      => 'select',
			'default_value'   => null,
			'options'         => array(
				'day'   => esc_attr_x( 'Days', 'WooCommerce Subscriptions', 'uncanny-automator-pro' ),
				'week'  => esc_attr_x( 'Week', 'WooCommerce Subscriptions', 'uncanny-automator-pro' ),
				'month' => esc_attr_x( 'Month', 'WooCommerce Subscriptions', 'uncanny-automator-pro' ),
				'year'  => esc_attr_x( 'Year', 'WooCommerce Subscriptions', 'uncanny-automator-pro' ),
			),
			'options_show_id' => false,
		);

		$options = array(
			'options_group' => array(
				$this->get_action_meta() => array(
					Automator()->helpers->recipe->woocommerce->options->pro->all_wc_subscriptions( _x( 'Subscription product', 'WooCommerce Subscriptions', 'uncanny-automator-pro' ), $this->get_action_meta(), false, false, false ),
					Automator()->helpers->recipe->field->text(
						array(
							'option_code' => $this->get_action_meta() . '_NO_OF',
							'label'       => _x( 'Number', 'WooCommerce Subscriptions', 'uncanny-automator-pro' ),
							'input_type'  => 'text',
							'tokens'      => true,
						)
					),
					Automator()->helpers->recipe->field->select( $select ),
				),
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

		// Get subscription ID
		$product_id = isset( $parsed[ $this->get_action_meta() ] ) ? sanitize_text_field( $parsed[ $this->get_action_meta() ] ) : 0;
		$no_of      = isset( $parsed[ $this->get_action_meta() . '_NO_OF' ] ) ? sanitize_text_field( $parsed[ $this->get_action_meta() . '_NO_OF' ] ) : 0;
		$duration   = isset( $parsed[ $this->get_action_meta() . '_DURATION' ] ) ? sanitize_text_field( $parsed[ $this->get_action_meta() . '_DURATION' ] ) : 0;

		$product = wc_get_product( absint( $product_id ) );
		if ( ! $product->is_type( 'subscription' ) ) {
			$action_data['complete_with_errors'] = true;
			$error_message                       = _x( 'The product is not of a subscription type.', 'woocommerce-subscriptions', 'uncanny-automator-pro' );
			Automator()->complete->action( $user_id, $action_data, $recipe_id, $error_message );

			return;
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
			$action_data['do-nothing']           = true;
			$action_data['complete_with_errors'] = true;
			$error_message                       = _x( 'No active subscriptions were found.', 'WooCommerce Subscriptions', 'uncanny-automator-pro' );
			Automator()->complete->action( $user_id, $action_data, $recipe_id, $error_message );

			return;
		}

		$count = 0;
		foreach ( $subscriptions as $subscription_list ) {
			$subscription = wcs_get_subscription( $subscription_list->get_id() );
			$expiry       = $subscription->get_date( 'end' );
			// The subscription does not expire,
			// no need to extend the date
			if ( empty( $expiry ) || intval( '0' ) === intval( $expiry ) ) {
				continue;
			}
			$dates_to_update        = array();
			$new_expiry             = strtotime( - $no_of . ' ' . $duration, strtotime( $expiry ) );
			$dates_to_update['end'] = gmdate( 'Y-m-d H:i:s', $new_expiry );

			$order_number = sprintf( _x( '#%s', 'hash before order number', 'WooCommerce Subscriptions' ), $subscription->get_order_number() ); //phpcs:ignore WordPress.WP.I18n.MissingTranslatorsComment
			$order_link   = sprintf( '<a href="%s">%s</a>', esc_url( wcs_get_edit_post_link( $subscription->get_id() ) ), $order_number );

			try {
				$subscription->update_dates( $dates_to_update );
				// translators: placeholder contains a link to the order's edit screen.
				$subscription->add_order_note( sprintf( __( 'Subscription successfully shortened by Automator. Order %s', 'WooCommerce Subscriptions' ), $order_link ) );
				$count ++;
			} catch ( \Exception $e ) {
				// translators: placeholder contains a link to the order's edit screen.
				$subscription->add_order_note( sprintf( __( 'Failed to shorten subscription after customer renewed early. Order %s', 'WooCommerce Subscriptions' ), $order_link ) );
			}
		}

		$this->hydrate_tokens(
			array(
				'PRODUCT_TITLE'     => get_the_title( absint( $product_id ) ),
				'PRODUCT_ID'        => absint( $product_id ),
				'PRODUCT_URL'       => get_the_permalink( absint( $product_id ) ),
				'PRODUCT_THUMB_URL' => get_the_post_thumbnail_url( absint( $product_id ) ),
				'PRODUCT_THUMB_ID'  => get_post_thumbnail_id( absint( $product_id ) ),
			)
		);

		if ( 0 === $count ) {
			$action_data['do-nothing'] = true;
			//$action_data['complete_with_errors'] = true;
			$error_message = _x( 'The subscription has no end date.', 'WooCommerce Subscriptions', 'uncanny-automator-pro' );
			Automator()->complete->action( $user_id, $action_data, $recipe_id, $error_message );

			return;
		}

		Automator()->complete->action( $user_id, $action_data, $recipe_id );
	}
}
