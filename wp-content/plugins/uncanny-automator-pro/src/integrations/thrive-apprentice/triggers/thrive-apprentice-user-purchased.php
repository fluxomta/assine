<?php // phpcs:ignore WordPress.Files.FileName.InvalidClassFileName
namespace Uncanny_Automator_Pro;

use Uncanny_Automator\Recipe;

/**
 * Class THRIVE_APPRENTICE_USER_PURCHASED
 *
 * @package Uncanny_Automator
 */
class THRIVE_APPRENTICE_USER_PURCHASED {

	use Recipe\Triggers;

	/**
	 * Constant TRIGGER_CODE.
	 *
	 * @var string
	 */
	const TRIGGER_CODE = 'THRIVE_APPRENTICE_USER_PURCHASED';

	/**
	 * Constant TRIGGER_META.
	 *
	 * @var string
	 */
	const TRIGGER_META = 'THRIVE_APPRENTICE_USER_PURCHASED_META';

	public function __construct() {

		$this->set_helper( new Thrive_Apprentice_Pro_Helpers() );

		$this->setup_trigger();

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
		$this->add_action( 'tva_purchase' );

		// The number of arguments that the action hook accepts.
		$this->set_action_args_count( 2 );

		$this->set_sentence(
			sprintf(
				/* Translators: Trigger sentence */
				esc_html__( 'A user makes a purchase', 'uncanny-automator-pro' )
			)
		);

		$this->set_readable_sentence(
			/* Translators: Trigger sentence */
			esc_html__( 'A user makes a purchase', 'uncanny-automator-pro' )
		);

		$this->set_tokens(
			array(
				'product_id'   => array(
					'name' => esc_html__( 'Product ID', 'uncanny-automator-pro' ),
					'type' => 'int',
				),
				'product_name' => array(
					'name' => esc_html__( 'Product name', 'uncanny-automator-pro' ),
					'type' => 'text',
				),
			)
		);

		// Register the trigger.
		$this->register_trigger();

	}

	/**
	 * Validate the trigger.
	 *
	 * @return boolean True.
	 */
	public function validate_trigger( ...$args ) {

		// Allow to fire for any combinations of parameters.
		return true;

	}

	/**
	 * Sets the conditional trigger to false. No need to filter by conditions.
	 *
	 * @return void.
	 */
	public function prepare_to_run( $data ) {

		$this->set_conditional_trigger( false );

	}

	/*
	 * Parses the tokens.
	 *
	 * @return The parsed tokens.
	 */
	public function parse_additional_tokens( $parsed, $args, $trigger ) {

		list( $user, $product ) = $args['trigger_args'];

		$hydrated_tokens = array(
			'product_id'   => $product->get_product_id(),
			'product_name' => $product->get_product_name(),
		);

		return $parsed + $hydrated_tokens;

	}

}
