<?php

namespace Uncanny_Automator_Pro;

/**
 * Class WC_SUBSCRIPTIONS_SWITCHED
 *
 * @package Uncanny_Automator_Pro
 */
class WC_SUBSCRIPTIONS_SWITCHED {
	use \Uncanny_Automator\Recipe\Triggers;

	/**
	 * @var string
	 */
	private $trigger_meta_from = 'WOOVARIPRODUCT_FROM';
	/**
	 * @var string
	 */
	private $trigger_meta_to = 'WOOVARIPRODUCT_TO';
	/**
	 * @var
	 */
	protected $helpers;

	/**
	 * SetAutomatorTriggers constructor.
	 */
	public function __construct() {
		include_once ABSPATH . 'wp-admin/includes/plugin.php';
		if ( ! is_plugin_active( 'woocommerce-subscriptions/woocommerce-subscriptions.php' ) ) {
			return;
		}
		$this->set_helpers( new \Uncanny_Automator_Pro\Woocommerce_Pro_Helpers( false ) );

		if ( Automator()->helpers->recipe->is_edit_page() ) {
			add_action( 'wp_loaded', array( $this, 'setup_trigger' ) );

			return;
		}
		$this->setup_trigger();
	}

	/**
	 *
	 */
	public function setup_trigger() {

		$this->set_integration( 'WC' );
		$this->set_trigger_code( 'WCSUBSCRIPTIONSSWITCHED' );
		$this->set_trigger_meta( 'WOOVARIPRODUCT' );
		$this->set_is_login_required( true );
		$this->set_is_pro( true );
		/* Translators: Trigger sentence */
		$this->set_sentence( sprintf( esc_attr__( "A user's subscription switches from {{a specific variation:%2\$s}} to {{a specific variation:%3\$s}}", 'uncanny-automator-pro' ), $this->get_trigger_meta(), $this->trigger_meta_from . ':' . $this->get_trigger_meta(), $this->trigger_meta_to . ':' . $this->get_trigger_meta() ) );
		/* Translators: Trigger sentence */
		$this->set_readable_sentence( esc_attr__( "A user's subscription switches from {{a specific variation}} to {{a specific variation}}", 'uncanny-automator-pro' ) ); // Non-active state sentence to show
		$this->add_action( 'woocommerce_subscription_item_switched' );
		$this->set_action_args_count( 4 );
		$this->set_options_callback( array( $this, 'load_options' ) );
		$this->register_trigger();

	}

	/**
	 * @param $helpers
	 *
	 * @return void
	 */
	public function set_helpers( $helpers ) {
		$this->helpers = $helpers;
	}

	/**
	 * @return mixed
	 */
	public function get_helpers() {
		return $this->helpers;
	}

	/**
	 * @return array
	 */
	public function load_options() {
		$options_array = array(
			'options_group' => array(
				$this->get_trigger_meta() => array(
					$this->get_helpers()->all_wc_variation_subscriptions(
						esc_attr__( 'Product', 'uncanny-automator-pro' ),
						$this->get_trigger_meta(),
						array(
							'token'        => true,
							'is_ajax'      => true,
							'is_any'       => true,
							'target_field' => $this->trigger_meta_from,
							'endpoint'     => 'select_variations_from_WOOSELECTVARIATION_with_any_option',
						)
					),
					Automator()->helpers->recipe->field->select_field_ajax(
						$this->trigger_meta_from,
						esc_attr__( 'Previous variation', 'uncanny-automator-pro' ),
						array(),
						'',
						'',
						'',
						true,
						array(
							'is_any'       => true,
							'target_field' => $this->trigger_meta_to,
							'endpoint'     => 'select_variations_WOOSELECTVARIATION_FROM_with_any_option',
						)
					),
					Automator()->helpers->recipe->field->select_field_ajax( $this->trigger_meta_to, esc_attr__( 'New variation', 'uncanny-automator-pro' ) ),
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
		$is_valid = false;

		list( $order, $subscription, $add_line_item, $remove_line_item ) = array_shift( $args );

		if ( isset( $order ) && isset( $subscription ) && $add_line_item !== $remove_line_item ) {
			$is_valid = true;
		}

		return $is_valid;

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
	 * @param ...$args
	 *
	 * @return array
	 * @throws \Exception
	 */
	public function validate_conditions( ...$args ) {
		/**
		 * @var \WC_Order $order
		 * @var \WC_Subscription $subscription
		 */
		list( $order, $subscription, $add_line_item, $remove_line_item ) = array_shift( $args );
		$product_id                                                      = wc_get_order_item_meta( $add_line_item, '_product_id', true );
		$variation_id_from                                               = wc_get_order_item_meta( $remove_line_item, '_variation_id', true );
		$variation_id_to                                                 = wc_get_order_item_meta( $add_line_item, '_variation_id', true );

		return $this->find_all( $this->trigger_recipes() )
					->where(
						array(
							$this->get_trigger_meta(),
							$this->trigger_meta_from,
							$this->trigger_meta_to,
						)
					)
					->match(
						array(
							$product_id,
							$variation_id_from,
							$variation_id_to,
						)
					)
					->format(
						array(
							'intval',
							'intval',
							'intval',
						)
					)
					->get();
	}
}
