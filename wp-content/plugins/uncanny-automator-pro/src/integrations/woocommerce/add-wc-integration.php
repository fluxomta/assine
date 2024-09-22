<?php

namespace Uncanny_Automator_Pro;

/**
 * Class Add_Wc_Integration
 *
 * @package Uncanny_Automator_Pro
 */
class Add_Wc_Integration {

	/**
	 * Integration code
	 *
	 * @var string
	 */
	public static $integration = 'WC';

	/**
	 * Only load this integration and its triggers and actions if the related plugin is active
	 *
	 * @param $status
	 * @param $code
	 *
	 * @return bool
	 */
	public function plugin_active( $status, $code ) {

		if ( self::$integration === $code ) {
			return class_exists( 'WooCommerce' );
		}

		return $status;
	}

	/**
	 * Set the directories that the auto loader will run in
	 *
	 * @param $directory
	 *
	 * @return array
	 */
	public function add_integration_directory_func( $directory ) {

		$directory[] = dirname( __FILE__ ) . '/helpers';
		$directory[] = dirname( __FILE__ ) . '/actions';
		$directory[] = dirname( __FILE__ ) . '/triggers';
		$directory[] = dirname( __FILE__ ) . '/tokens';
		$directory[] = dirname( __FILE__ ) . '/conditions';
		$directory[] = dirname( __FILE__ ) . '/loop-filters';

		return $directory;
	}

	/**
	 * Register the integration by pushing it into the global automator object
	 */
	public function add_integration_func() {

		Automator()->register->integration(
			self::$integration,
			array(
				'name'        => 'Woo',
				'icon_16'     => \Uncanny_Automator\Utilities::get_integration_icon( 'integration-woocommerce-icon-16.png' ),
				'icon_32'     => \Uncanny_Automator\Utilities::get_integration_icon( 'integration-woocommerce-icon-32.png' ),
				'icon_64'     => \Uncanny_Automator\Utilities::get_integration_icon( 'integration-woocommerce-icon-64.png' ),
				'logo'        => \Uncanny_Automator\Utilities::get_integration_icon( 'integration-woocommerce.png' ),
				'logo_retina' => \Uncanny_Automator\Utilities::get_integration_icon( 'integration-woocommerce@2x.png' ),
			)
		);
	}
}
