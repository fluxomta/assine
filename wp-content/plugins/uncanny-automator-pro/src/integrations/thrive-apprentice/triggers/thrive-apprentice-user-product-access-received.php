<?php // phpcs:ignore WordPress.Files.FileName.InvalidClassFileName
namespace Uncanny_Automator_Pro;

use Uncanny_Automator\Recipe;

/**
 * Class THRIVE_APPRENTICE_USER_PRODUCT_ACCESS_RECEIVED
 *
 * @package Uncanny_Automator
 */
class THRIVE_APPRENTICE_USER_PRODUCT_ACCESS_RECEIVED {

	use Recipe\Triggers;

	/**
	 * Constant TRIGGER_CODE.
	 *
	 * @var string
	 */
	const TRIGGER_CODE = 'THRIVE_APPRENTICE_USER_PRODUCT_ACCESS_RECEIVED';

	/**
	 * Constant TRIGGER_META.
	 *
	 * @var string
	 */
	const TRIGGER_META = 'THRIVE_APPRENTICE_USER_PRODUCT_ACCESS_RECEIVED_META';

	public function __construct() {

		$this->set_helper( new Thrive_Apprentice_Pro_Helpers() );

		# DISABLED # $this->setup_trigger();

	}

	/**
	 * Define and register the trigger by pushing it into the Automator object.
	 *
	 * @return void.
	 */
	public function setup_trigger() {

		$this->set_integration( 'THRIVE_APPRENTICE' );

		$this->set_trigger_code( self::TRIGGER_CODE );

		$this->set_trigger_meta( self::TRIGGER_META );

		$this->set_is_pro( true );

		$this->set_is_login_required( true );

		// The action hook to attach this trigger into.
		$this->add_action( 'tva_user_receives_product_access' );

		// The number of arguments that the action hook accepts.
		$this->set_action_args_count( 2 );

		$this->set_sentence(
			sprintf(
				/* Translators: Trigger sentence */
				esc_html__( 'A user receives access to {{a product:%1$s}}', 'uncanny-automator-pro' ),
				$this->get_trigger_meta()
			)
		);

		$this->set_options_callback( array( $this, 'load_options' ) );

		$this->set_readable_sentence(
			/* Translators: Trigger sentence */
			esc_html__( 'A user receives access to {{a product}}', 'uncanny-automator-pro' )
		);

		// Register the trigger.
		$this->register_trigger();

	}

	/**
	 * Loads all options.
	 *
	 * @return array The list of options.
	 */
	public function load_options() {

		return Automator()->utilities->keep_order_of_options(
			array(
				'options_group' => array(
					$this->get_trigger_meta() => array(
						array(
							'option_code'     => $this->get_trigger_meta(),
							'required'        => true,
							'label'           => esc_html__( 'Product', 'uncanny-automator-pro' ),
							'input_type'      => 'select',
							'options'         => $this->get_helper()->get_products(),
							'relevant_tokens' => array(),
						),
					),
				),
			)
		);

	}

	/**
	 * Validate the trigger.
	 *
	 * @return boolean True.
	 */
	public function validate_trigger( ...$args ) {

		return true;

	}

	/**
	 * Prepare to run.
	 *
	 * Sets the conditional trigger to true.
	 *
	 * @return void.
	 */
	public function prepare_to_run( $data ) {

		$this->set_conditional_trigger( false );

	}

	/**
	 * Continue trigger process even for logged-in user.
	 *
	 * @return boolean True.
	 */
	public function do_continue_anon_trigger( ...$args ) {

		return true;

	}

}
