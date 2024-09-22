<?php

namespace Uncanny_Automator_Pro;

use TINCANNYSNC\Database;

/**
 * Class UOTC_CONDITION_USER_RECORDED_VERB_FOR_MODULE
 *
 * @package Uncanny_Automator
 */
class UOTC_CONDITION_USER_RECORDED_VERB_FOR_MODULE extends Action_Condition {

	/**
	 * Defines the condition.
	 *
	 * @return void
	 */
	public function define_condition() {
		$this->integration = 'UOTC';

		/*translators: Token */
		$this->name = __( 'A user has recorded {{a verb}} for {{a module}}', 'uncanny-automator-pro' );
		$this->code = 'USER_RECORDED_VERB_FOR_MODULE';
		// translators: %1$s is the criteria and %2$s is the group
		$this->dynamic_name  = sprintf( esc_html__( 'The user has recorded a {{verb:%1$s}} for a {{module:%2$s}}', 'uncanny-automator-pro' ), 'TCVERB', 'TCMODULE' );
		$this->is_pro        = true;
		$this->requires_user = true;
	}

	/**
	 * Defines the fields.
	 *
	 * @return array
	 */
	public function fields() {
		$options   = array();
		$modules   = Database::get_contents();
		$options[] = array(
			'text'  => esc_attr__( 'Any module', 'uncanny-automator-pro' ),
			'value' => '-1',
		);

		foreach ( $modules as $module ) {
			$options[] = array(
				'text'  => '(ID: ' . $module->ID . ') ' . $module->content,
				'value' => $module->ID,
			);
		}

		return array(
			$this->field->select(
				array(
					'option_code'            => 'TCVERB',
					'label'                  => esc_html__( 'Verb', 'uncanny-automator-pro' ),
					'required'               => true,
					'show_label_in_sentence' => false,
					'supports_custom_value'  => false,
					'options_show_id'        => false,
					'options'                => array(
						array(
							'text'  => esc_html_x( 'Any', 'Tin canny Reporting', 'uncanny-automator-pro' ),
							'value' => '-1',
						),
						array(
							'text'  => esc_html_x( 'Completed', 'Tin canny Reporting', 'uncanny-automator-pro' ),
							'value' => 'completed',
						),
						array(
							'text'  => esc_html_x( 'Passed', 'Tin canny Reporting', 'uncanny-automator-pro' ),
							'value' => 'passed',
						),
						array(
							'text'  => esc_html_x( 'Failed', 'Tin canny Reporting', 'uncanny-automator-pro' ),
							'value' => 'failed',
						),
						array(
							'text'  => esc_html_x( 'Answered', 'Tin canny Reporting', 'uncanny-automator-pro' ),
							'value' => 'answered',
						),
						array(
							'text'  => esc_html_x( 'Attempted', 'Tin canny Reporting', 'uncanny-automator-pro' ),
							'value' => 'attempted',
						),
						array(
							'text'  => esc_html_x( 'Experienced', 'Tin canny Reporting', 'uncanny-automator-pro' ),
							'value' => 'experienced',
						),
					),
				)
			),
			$this->field->select(
				array(
					'option_code'            => 'TCMODULE',
					'label'                  => esc_html__( 'Module', 'uncanny-automator-pro' ),
					'show_label_in_sentence' => false,
					'required'               => true,
					'options'                => $options,
					'supports_custom_value'  => true,
					'options_show_id'        => false,
				)
			),
		);

	}

	/**
	 * Evaluates the condition.
	 *
	 * Has to use the $this->condition_failed( $message ); method if the condition is not met.
	 *
	 * @return void
	 */
	public function evaluate_condition() {
		$module_id = intval( $this->get_parsed_option( 'TCMODULE' ) );
		$verb      = trim( $this->get_parsed_option( 'TCVERB' ) );
		$user_id   = absint( $this->user_id );

		global $wpdb;

		// Query all modules with the verb.
		if ( '-1' === (string) $module_id ) {

			if ( '-1' === (string) $verb ) {
				$id = (int) $wpdb->get_var(
					$wpdb->prepare(
						"SELECT id FROM {$wpdb->prefix}uotincan_reporting  WHERE user_id = %d AND verb != ''",
						$user_id
					)
				);

				if ( 0 === $id ) {
					$message = esc_html__( 'The user has no verb for any module.', 'uncanny-automator-pro' );
					$this->condition_failed( $message );
				}

				return;
			}

			// Query all modules with the verb.
			$id = (int) $wpdb->get_var(
				$wpdb->prepare(
					"SELECT id FROM {$wpdb->prefix}uotincan_reporting  WHERE user_id = %d AND verb = %s",
					$user_id,
					$verb
				)
			);

			if ( 0 === $id ) {
				$message = sprintf( esc_html__( 'The user has no verb %1$s for any module.', 'uncanny-automator-pro' ), $this->get_option( 'TCVERB_readable' ) );
				$this->condition_failed( $message );
			}

			return;
		}

		$module_data = Database::get_item( $module_id );

		if ( empty( $module_data ) ) {
			$message = sprintf( esc_html__( "The module %1\$s doesn't exist.", 'uncanny-automator-pro' ), $this->get_option( 'TCMODULE_readable' ) );
			$this->condition_failed( $message );
			return;
		}

		$module_filename = $module_data['url'];

		$sql = $wpdb->prepare(
			"SELECT id FROM {$wpdb->prefix}uotincan_reporting  WHERE user_id = %d AND module = %s AND verb = %s",
			$user_id,
			$module_filename,
			$verb
		);

		// Any verb
		if ( '-1' === (string) $verb ) {
			$sql = $wpdb->prepare(
				"SELECT id FROM {$wpdb->prefix}uotincan_reporting  WHERE user_id = %d AND module = %s AND verb != ''",
				$user_id,
				$module_filename
			);
		}

		$id = (int) $wpdb->get_var( $sql );  // phpcs:ignore

		if ( 0 === $id ) {
			$message = sprintf( esc_html__( 'The module %1$s has no verb %2$s for the user.', 'uncanny-automator-pro' ), $this->get_option( 'TCMODULE_readable' ), $this->get_option( 'TCVERB_readable' ) );
			$this->condition_failed( $message );
		}
	}
}
