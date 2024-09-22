<?php // phpcs:ignore WordPress.Files.FileName.InvalidClassFileName
namespace Uncanny_Automator_Pro;

use Uncanny_Automator\Recipe;

/**
 * Class THRIVE_APPRENTICE_PRODUCT_USER_ACCESS_REMOVE
 *
 * @package Uncanny_Automator
 */
class THRIVE_APPRENTICE_PRODUCT_USER_ACCESS_GRANT {

	use Recipe\Actions;
	use Recipe\Action_Tokens;

	public function __construct() {

		// Set this Action helper to pro helpers and inject the free helper dependency.
		$this->set_helpers( new Thrive_Apprentice_Pro_Helpers() );

		// Finally, set up the Action.
		$this->setup_action();

	}

	/**
	 * Setup Action.
	 *
	 * @return void.
	 */
	protected function setup_action() {

		$this->set_integration( 'THRIVE_APPRENTICE' );

		$this->set_action_code( 'THRIVE_APPRENTICE_PRODUCT_USER_ACCESS_GRANT' );

		$this->set_action_meta( 'THRIVE_APPRENTICE_PRODUCT_USER_ACCESS_GRANT_META' );

		$this->set_is_pro( true );

		$this->set_support_link( Automator()->get_author_support_link( $this->get_action_code(), 'knowledge-base/thrive-apprentice/' ) );

		$this->set_requires_user( true );

		$this->set_sentence(
			sprintf(
				/* translators: Action - WordPress */
				esc_attr__( 'Grant the user access to {{a product:%1$s}}', 'uncanny-automator-pro' ),
				$this->get_action_meta()
			)
		);

		/* translators: Action - WordPress */
		$this->set_readable_sentence( esc_attr__( 'Grant the user access to {{a product}}', 'uncanny-automator-pro' ) );

		$this->set_options_callback( array( $this, 'load_options' ) );

		$this->set_background_processing( true );

		$this->register_action();

	}

	/**
	 * Loads available options for the Trigger.
	 *
	 * @return array The available trigger options.
	 */
	public function load_options() {

		return Automator()->utilities->keep_order_of_options(
			array(
				'options_group' => array(
					$this->get_action_meta() => array(
						array(
							'option_code'              => $this->get_action_meta(),
							'required'                 => true,
							'label'                    => esc_html__( 'Product', 'uncanny-automator-pro' ),
							'input_type'               => 'select',
							'options'                  => $this->get_helpers()->get_products(),
							'supports_custom_value'    => true,
							'custom_value_description' => esc_html__( 'Product ID', 'uncanny-automator-pro' ),
							'relevant_tokens'          => array(),
						),
					),
				),
			)
		);

	}

	/**
	 * Processes the action.
	 *
	 * @param $user_id
	 * @param $action_data
	 * @param $recipe_id
	 * @param $args
	 * @param $parsed
	 *
	 * @return void.
	 */
	protected function process_action( $user_id, $action_data, $recipe_id, $args, $parsed ) {

		$product_id = isset( $parsed[ $this->get_action_meta() ] )
			? absint( sanitize_text_field( $parsed[ $this->get_action_meta() ] ) )
			: 0;

		if ( $this->is_dependencies_loaded() ) {

			/**
			 * This method from Thrive Apprentice always returns (bool) true.
			 * Assume everything works if we can't determine whether it has failed or not.
			 * Otherwise, log the method below if ever they have updated this method to return the actual result.
			 *
			 * @since 4.9
			 */
			\TVA_Customer::enrol_user_to_product(
				$user_id,
				$product_id
			);

			return Automator()->complete->action( $user_id, $action_data, $recipe_id );

		}

		$action_data['complete_with_errors'] = true;

		return Automator()->complete->action( $user_id, $action_data, $recipe_id, esc_html__( 'Thrive Apprentice plugin must be installed and activated for this action to run.', 'uncanny-automator-pro' ) );

	}

	/**
	 * Determines whether all dependencies has been loaded.
	 *
	 * @return bool True if dependencies conditions are satisfied. Returns false, otherwise.
	 */
	private function is_dependencies_loaded() {

		return class_exists( '\TVA_Customer' )
			&& method_exists( '\TVA_Customer', 'remove_user_from_product' );

	}

}
