<?php

namespace Uncanny_Automator_Pro;

use Uncanny_Automator\Recipe;

/**
 * Class WC_EXTENDUSERSUBSCRIPTION
 *
 * @package Uncanny_Automator_Pro
 */
class WC_EXTENDUSERSUBSCRIPTION {

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
		$this->set_action_code( 'WC_EXTENDUSERSUBSCRIPTION' );
		$this->set_action_meta( 'WC_EXTENDUSERSUBSCRIPTION_META' );
		$this->set_requires_user( true );
		$this->set_is_pro( true );

		/* translators: Action - WooCommerce Subscription */
		$this->set_sentence( sprintf( esc_attr__( "Extend a user's subscription to {{a specific product:%1\$s}} by {{a number of:%2\$s}} {{days:%3\$s}}", 'uncanny-automator-pro' ), $this->get_action_meta(), $this->get_action_meta() . '_NO_OF', $this->get_action_meta() . '_DURATION' ) );

		/* translators: Action - WooCommerce Subscription */
		$this->set_readable_sentence( esc_attr__( "Extend a user's subscription to {{a specific product}} by {{a number of}} {{days}}", 'uncanny-automator-pro' ) );

		$this->set_options_callback( array( $this, 'load_options' ) );

		$this->set_action_tokens(
			array(
				'PRODUCT_TITLE'     => array(
					'name' => __( 'Product title', 'uncanny-automator-pro' ),
				),
				'PRODUCT_ID'        => array(
					'name' => __( 'Product ID', 'uncanny-automator-pro' ),
					'type' => 'int',
				),
				'PRODUCT_URL'       => array(
					'name' => __( 'Product URL', 'uncanny-automator-pro' ),
					'type' => 'url',
				),
				'PRODUCT_THUMB_URL' => array(
					'name' => __( 'Product featured image URL', 'uncanny-automator-pro' ),
					'type' => 'url',
				),
				'PRODUCT_THUMB_ID'  => array(
					'name' => __( 'Product featured image ID', 'uncanny-automator-pro' ),
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
			'label'           => esc_attr__( 'Length', 'uncanny-automator-pro' ),
			'input_type'      => 'select',
			'default_value'   => null,
			'options'         => array(
				'day'   => esc_attr__( 'Days', 'uncanny-automator-pro' ),
				'week'  => esc_attr__( 'Week', 'uncanny-automator-pro' ),
				'month' => esc_attr__( 'Month', 'uncanny-automator-pro' ),
				'year'  => esc_attr__( 'Year', 'uncanny-automator-pro' ),
			),
			'options_show_id' => false,
		);

		$options = array(
			'options' => array(
				Automator()->helpers->recipe->woocommerce->options->pro->all_wc_subscriptions( __( 'Subscription product', 'uncanny-automator-pro' ), $this->get_action_meta(), false, false, false ),
				Automator()->helpers->recipe->field->text(
					array(
						'option_code' => $this->get_action_meta() . '_NO_OF',
						'label'       => __( 'Number', 'uncanny-automator-pro' ),
						'input_type'  => 'text',
						'tokens'      => true,
					)
				),
				Automator()->helpers->recipe->field->select( $select ),
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
			$error_message                       = __( 'No active subscriptions were found.', 'uncanny-automator-pro' );
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
			$dates_to_update['end'] = gmdate( 'Y-m-d H:i:s', wcs_add_time( $no_of, $duration, $subscription->get_time( 'end' ) ) );

			$order_number = sprintf( _x( '#%s', 'hash before order number', 'woocommerce-subscriptions' ), $subscription->get_order_number() ); //phpcs:ignore WordPress.WP.I18n.MissingTranslatorsComment
			$order_link   = sprintf( '<a href="%s">%s</a>', esc_url( wcs_get_edit_post_link( $subscription->get_id() ) ), $order_number );

			try {
				$subscription->update_dates( $dates_to_update );
				// translators: placeholder contains a link to the order's edit screen.
				$subscription->add_order_note( sprintf( __( 'Subscription successfully extended by Automator. Order %s', 'woocommerce-subscriptions' ), $order_link ) );
				$count ++;
			} catch ( \Exception $e ) {
				// translators: placeholder contains a link to the order's edit screen.
				$subscription->add_order_note( sprintf( __( 'Failed to extend subscription after customer renewed early. Order %s', 'woocommerce-subscriptions' ), $order_link ) );
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
