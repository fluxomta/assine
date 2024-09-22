<?php

namespace Uncanny_Automator_Pro;

use GFAPI;

/**
 * Class GF_CREATEENTRY
 *
 * @package Uncanny_Automator_Pro
 */
class GF_CREATEENTRY {

	use Recipe\Action_Tokens;

	/**
	 * Integration code
	 *
	 * @var string
	 */
	public static $integration = 'GF';

	/**
	 * @var string
	 */
	private $action_code;
	/**
	 * @var string
	 */
	private $action_meta;

	/**
	 * Set up Automator action constructor.
	 */
	public function __construct() {
		$this->action_code = 'GFCREATEENTRY';
		$this->action_meta = 'GFFORMS';
		$this->define_action();
	}

	/**
	 * Define and register the action by pushing it into the Automator object
	 */
	public function define_action() {

		$action = array(
			'author'             => Automator()->get_author_name( $this->action_code ),
			'support_link'       => Automator()->get_author_support_link( $this->action_code, 'integration/gravity-forms/' ),
			'integration'        => self::$integration,
			'code'               => $this->action_code,
			'is_pro'             => true,
			/* translators: Action - MailPoet */
			'sentence'           => sprintf( esc_attr__( 'Create an entry for {{a form:%1$s}}', 'uncanny-automator-pro' ), $this->action_meta ),
			/* translators: Action - MailPoet */
			'select_option_name' => esc_attr__( 'Create an entry for {{a form}}', 'uncanny-automator-pro' ),
			'priority'           => 10,
			'accepted_args'      => 1,
			'requires_user'      => false,
			'execution_function' => array( $this, 'gf_create_entry' ),
			'options_callback'   => array( $this, 'load_options' ),
			'buttons'            => array(
				array(
					'show_in'     => $this->action_meta,
					'text'        => __( 'Get fields', 'uncanny-automator' ),
					'css_classes' => 'uap-btn uap-btn--red',
					'on_click'    => Gravity_Forms_Pro_Helpers::get_fields_js(),
					'modules'     => array( 'modal', 'markdown' ),
				),
			),
		);

		$this->set_action_tokens(
			array(
				'ENTRY_ID'  => array(
					'name' => __( 'Entry ID', 'uncanny-automator-pro' ),
				),
				'ENTRY_URL' => array(
					'name' => __( 'Entry URL', 'uncanny-automator-pro' ),
					'type' => 'url',
				),
			),
			$this->action_code
		);

		Automator()->register->action( $action );
	}

	/**
	 * @return array[]
	 */
	public function load_options() {
		return Automator()->utilities->keep_order_of_options(
			array(
				'options_group' => array(
					$this->action_meta => array(
						Automator()->helpers->recipe->gravity_forms->options->list_gravity_forms(
							null,
							$this->action_meta,
							array(
								'token'        => false,
								'is_ajax'      => false,
								'target_field' => $this->action_code,
							)
						),
						array(
							'option_code'       => 'GF_FIELDS',
							'input_type'        => 'repeater',
							'label'             => __( 'Row', 'uncanny-automator' ),
							/* translators: 1. Button */
							'description'       => '',
							'required'          => true,
							'fields'            => array(
								array(
									'option_code' => 'GF_COLUMN_NAME',
									'label'       => __( 'Column', 'uncanny-automator' ),
									'input_type'  => 'text',
									'required'    => true,
									'read_only'   => true,
									'options'     => array(),
								),
								Automator()->helpers->recipe->field->text_field( 'GF_COLUMN_VALUE', __( 'Value', 'uncanny-automator' ), true, 'text', '', false ),
							),
							'add_row_button'    => __( 'Add pair', 'uncanny-automator' ),
							'remove_row_button' => __( 'Remove pair', 'uncanny-automator' ),
							'hide_actions'      => true,
						),
					),
				),
				'options'       => array(),
			)
		);
	}

	/**
	 * Validation function when the action is hit.
	 *
	 * @param string $user_id user id.
	 * @param array $action_data action data.
	 * @param string $recipe_id recipe id.
	 */
	public function gf_create_entry( $user_id, $action_data, $recipe_id, $args ) {
		$form_id = Automator()->parse->text( $action_data['meta'][ $this->action_meta ], $recipe_id, $user_id, $args );
		$fields  = json_decode( $action_data['meta']['GF_FIELDS'] );

		$gfrom_input_values               = Gravity_Forms_Pro_Helpers::format_input_values( $fields, $recipe_id, $user_id, $args );
		$t_values                         = array();
		$field_id                         = '';
		$gfrom_input_values['form_id']    = absint( $form_id );
		$gfrom_input_values['created_by'] = $user_id;

		$entry_id = GFAPI::add_entry( $gfrom_input_values );
		$entry    = GFAPI::get_entry( $entry_id );

		do_action( 'gform_after_submission', $entry, GFAPI::get_form( $entry['form_id'] ) );

		$this->hydrate_tokens(
			array(
				'ENTRY_ID'  => $entry_id,
				'ENTRY_URL' => Gravity_Forms_Pro_Helpers::get_entry_url( $entry_id, $form_id ),
			)
		);

		Automator()->complete_action( $user_id, $action_data, $recipe_id );
	}

}
