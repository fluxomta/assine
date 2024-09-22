<?php

namespace Uncanny_Automator_Pro\Loop_Filters;

use Uncanny_Automator_Pro\Loops\Filter\Base\Loop_Filter;

/**
 * Class WCS_HAS_USER_AN_ACTIVE_SUBSCRIPTION
 *
 * @package Uncanny_Automator_Pro
 */
class WCS_HAS_USER_AN_ACTIVE_SUBSCRIPTION extends Loop_Filter {

	/**
	 * Setups the integrations
	 *
	 * @depends \WC_Subscriptions - See method is_dependency_active.
	 *
	 * @return void
	 *
	 * @throws \Exception
	 */
	public function setup() {

		$this->set_integration( 'WC' );
		$this->set_meta( 'WCS_HAS_USER_AN_ACTIVE_SUBSCRIPTION' );
		$this->set_sentence( esc_html_x( 'The user {{has/does not have}} an active subscription of {{a product}}', 'Filter sentence', 'uncanny-automator-pro' ) );
		$this->set_sentence_readable(
			sprintf(
			/* translators: Filter sentence */
				esc_html_x( 'The user {{has/does not have:%1$s}} an active subscription of {{a product:%2$s}}', 'Filter sentence', 'uncanny-automator-pro' ),
				'CRITERIA',
				$this->get_meta()
			)
		);
		$this->set_fields( array( $this, 'load_options' ) );
		$this->set_entities( array( $this, 'retrieve_users_with_subscriptions' ) );

	}

	/**
	 * @depends WC_Subscriptions
	 * @return bool
	 */
	public function is_dependency_active() {
		return class_exists( 'WC_Subscriptions' );
	}

	/**
	 * @return mixed[]
	 */
	public function load_options() {
		return array(
			$this->get_meta() => array(
				array(
					'option_code'           => 'CRITERIA',
					'type'                  => 'select',
					'supports_custom_value' => false,
					'label'                 => esc_html_x( 'Criteria', 'WooCommerce Subscription', 'uncanny-automator-pro' ),
					'options'               => array(
						array(
							'text'  => esc_html_x( 'has', 'WooCommerce Subscription', 'uncanny-automator-pro' ),
							'value' => esc_html_x( 'has', 'WooCommerce Subscription', 'uncanny-automator-pro' ),
						),
						array(
							'text'  => esc_html_x( 'does not have', 'WooCommerce Subscription', 'uncanny-automator-pro' ),
							'value' => esc_html_x( 'does-not-have', 'WooCommerce Subscription', 'uncanny-automator-pro' ),
						),
					),
				),
				array(
					'option_code'           => $this->get_meta(),
					'type'                  => 'select',
					'label'                 => esc_html_x( 'Subscription', 'WooCommerce Subscription', 'uncanny-automator-pro' ),
					'options'               => $this->get_subscription_products(),
					'supports_custom_value' => false,
				),
			),
		);

	}

	/**
	 * @return array[]
	 */
	private function get_subscription_products() {
		global $wpdb;
		$subscriptions = $wpdb->get_results( "SELECT posts.ID,posts.post_title FROM $wpdb->posts as posts INNER JOIN $wpdb->term_relationships as tr ON posts.ID=tr.object_id INNER JOIN $wpdb->terms as t ON tr.term_taxonomy_id = t.term_id WHERE t.slug IN ('subscription', 'variable-subscription')", ARRAY_A );

		$options = array(
			array(
				'value' => '-1',
				'text'  => esc_attr_x( 'Any subscription', 'WooCommerce Subscriptions', 'uncanny-automator-pro' ),
			),
		);
		foreach ( $subscriptions as $subscription ) {
			$options[] = array(
				'value' => $subscription['ID'],
				'text'  => esc_attr_x( $subscription['post_title'], 'WooCommerce Subscriptions', 'uncanny-automator-pro' ),
			);

		}

		return $options;
	}

	/**
	 * @param array{WCS_HAS_USER_AN_ACTIVE_SUBSCRIPTION:string,CRITERIA:string} $fields
	 *
	 * @return int[]
	 */
	public function retrieve_users_with_subscriptions( $fields ) {
		$criteria        = $fields['CRITERIA'];
		$subscription_id = $fields['WCS_HAS_USER_AN_ACTIVE_SUBSCRIPTION'];

		if ( empty( $criteria ) || empty( $subscription_id ) ) {
			return array();
		}

		$args = array(
			'subscriptions_per_page' => - 1,
			'product_id'             => 0,
			'subscription_status'    => array( 'active' ),
		);
		if ( intval( '-1' ) !== intval( $subscription_id ) ) {
			$args['product_id'] = $subscription_id;
		}

		$all_active_subscriptions = wcs_get_subscriptions( $args );

		if ( empty( $all_active_subscriptions ) ) {
			return array();
		}

		$user_ids = array();
		foreach ( $all_active_subscriptions as $active_subscription ) {
			$user_ids[] = $active_subscription->get_user_id();
		}
		$user_ids = array_unique( $user_ids );
		$users    = $user_ids;
		if ( 'does-not-have' === $criteria ) {
			/**
			 * @since 5.8.0.3 - Added cache_results and specified the fields return.
			 */
			$all_users    = new \WP_User_Query(
				array(
					'cache_results' => false,
					'fields'        => 'ID',
				)
			);
			$all_user_ids = $all_users->get_results();
			$users        = array_diff( $all_user_ids, $user_ids );
		}

		return ! empty( $users ) ? $users : array();

	}
}
