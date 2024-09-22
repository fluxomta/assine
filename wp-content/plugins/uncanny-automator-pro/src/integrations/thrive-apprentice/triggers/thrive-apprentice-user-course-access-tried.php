<?php // phpcs:ignore WordPress.Files.FileName.InvalidClassFileName
namespace Uncanny_Automator_Pro;

use Uncanny_Automator\Recipe;

/**
 * Class THRIVE_APPRENTICE_USER_COURSE_ACCESS_TRIED
 *
 * @package Uncanny_Automator
 */
class THRIVE_APPRENTICE_USER_COURSE_ACCESS_TRIED {

	use Recipe\Triggers;

	/**
	 * Constant TRIGGER_CODE.
	 *
	 * @var string
	 */
	const TRIGGER_CODE = 'THRIVE_APPRENTICE_USER_COURSE_ACCESS_TRIED';

	/**
	 * Constant TRIGGER_META.
	 *
	 * @var string
	 */
	const TRIGGER_META = 'THRIVE_APPRENTICE_USER_COURSE_ACCESS_TRIED_META';

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
		$this->add_action( 'thrive_apprentice_restricted_course' );

		// The number of arguments that the action hook accepts.
		$this->set_action_args_count( 2 );

		$this->set_sentence(
			sprintf(
				/* Translators: Trigger sentence */
				esc_html__( 'A user attempts to access {{a restricted course:%1$s}}', 'uncanny-automator-pro' ),
				$this->get_trigger_meta()
			)
		);

		$this->set_readable_sentence(
			/* Translators: Trigger sentence */
			esc_html__( 'A user attempts to access {{a restricted course}}', 'uncanny-automator-pro' )
		);

		$this->set_options_callback( array( $this, 'load_options' ) );

		// Register the trigger.
		$this->register_trigger();

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
					$this->get_trigger_meta() => array(
						array(
							'option_code'           => $this->get_trigger_meta(),
							'required'              => true,
							'label'                 => esc_html__( 'Course', 'uncanny-automator-pro' ),
							'input_type'            => 'select',
							'options'               => $this->get_helper()->get_dropdown_options_courses( true ),
							'supports_custom_value' => true,
							'relevant_tokens'       => $this->get_helper()->get_relevant_tokens_courses(),
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

		// Returns true.
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

		$this->set_conditional_trigger( true );

	}

	/**
	 * Validates the conditions.
	 *
	 * @param array $args The trigger args.
	 *
	 * @return array The matching recipe and trigger IDs.
	 */
	public function validate_conditions( ...$args ) {

		list( $course, $user ) = $args[0];

		$matching_recipes_triggers = $this->find_all( $this->trigger_recipes() )
			->where( array( $this->get_trigger_meta() ) )
			->match( array( absint( $course->term_id ) ) )
			->format( array( 'absint' ) )
			->get();

		return $matching_recipes_triggers;

	}

	/**
	 * Parses the tokens.
	 *
	 * @return The parsed tokens.
	 */
	public function parse_additional_tokens( $parsed, $args, $trigger ) {

		$course = array_shift( $args['trigger_args'] );

		$tva_author = get_term_meta( $course->term_id, 'tva_author', true );

		$user_data = get_userdata( $tva_author['ID'] );

		$hydrated_tokens = array(
			'COURSE_ID'      => $course->term_id,
			'COURSE_TITLE'   => $course->name,
			'COURSE_URL'     => get_term_link( $course->term_id ),
			'COURSE_AUTHOR'  => is_object( $user_data ) && ! empty( $user_data ) ? $user_data->user_email : '',
			'COURSE_SUMMARY' => get_term_meta( $course->term_id, 'tva_excerpt', true ),
		);

		return $parsed + $hydrated_tokens;

	}

}
