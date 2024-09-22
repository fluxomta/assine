<?php
namespace Uncanny_Automator_Pro;

use Uncanny_Automator\Recipe;

class Add_Thrive_Apprentice_Integration {

	use Recipe\Integrations;

	public function __construct() {

		$this->setup();

	}

	/**
	 * Sets up Thrive Apprentice integration.
	 *
	 * @return void
	 */
	protected function setup() {

		$this->set_integration( 'THRIVE_APPRENTICE' );

		$this->set_name( 'Thrive Apprentice' );

	}

	/**
	 * Determines whether the integration should be loaded or not.
	 *
	 * Checks whether an existing depencency condition is satisfied.
	 *
	 * @return bool Returns true if \TVA_Manager class is active. Returns false, othwerwise.
	 */
	public function plugin_active() {

		// Check if Automator is atleast 4.9.
		$is_dependency_ready = defined( 'AUTOMATOR_PLUGIN_VERSION' )
			&& version_compare( AUTOMATOR_PLUGIN_VERSION, '4.9', '>=' );

		return class_exists( '\TVA_Manager' ) && $is_dependency_ready;

	}

}
