<?php

namespace Uncanny_Automator_Pro;

/**
 * Class LF_DOES_NOT_HAVE_MEMBERSHIP
 *
 * @package Uncanny_Automator_Pro
 */
class LF_DOES_NOT_HAVE_MEMBERSHIP extends Action_Condition {

	/**
	 * Define_condition
	 *
	 * @return void
	 */
	public function define_condition() {

		$this->integration = 'LF';
		/*translators: Token */
		$this->name = __( 'The user does not have {{a membership}}', 'uncanny-automator-pro' );
		$this->code = 'LF_DOES_NOT_HAVE_MEMBERSHIP';
		// translators: A token matches a value
		$this->dynamic_name  = sprintf( esc_html__( 'The user does not have {{a membership:%1$s}}', 'uncanny-automator-pro' ), 'LF_MEMBERSHIP' );
		$this->is_pro        = true;
		$this->requires_user = true;
	}

	/**
	 * Fields
	 *
	 * @return array
	 */
	public function fields() {

		$membership_field_args = array(
			'option_code'              => 'LF_MEMBERSHIP',
			'label'                    => esc_html__( 'Membership', 'uncanny-automator-pro' ),
			'required'                 => true,
			'options'                  => $this->lf_membership_options(),
			'supports_custom_value'    => false,
			'supports_multiple_values' => true,
		);

		$any_or_all_args = array(
			'option_code'           => 'LF_ANYORALL',
			'label'                 => esc_attr__( 'Match', 'uncanny-automator-pro' ),
			'required'              => true,
			'supports_custom_value' => false,
			'options'               => array(
				array(
					'value' => 'all',
					'text'  => esc_attr__( 'All', 'uncanny-automator-pro' ),
				),
				array(
					'value' => 'any',
					'text'  => esc_attr__( 'Any', 'uncanny-automator-pro' ),
				),
			),
		);

		return array(
			// Course field
			$this->field->select_field_args( $membership_field_args ),
			// Any or all
			$this->field->select_field_args( $any_or_all_args ),
		);
	}

	/**
	 * @return array[]
	 */
	public function lf_membership_options() {

		$args = array(
			'post_type'      => 'llms_membership',
			'posts_per_page' => 999, //phpcs:ignore WordPress.WP.PostsPerPage.posts_per_page_posts_per_page
			'orderby'        => 'title',
			'order'          => 'ASC',
			'post_status'    => 'publish',
		);

		$options     = array();
		$memberships = Automator()->helpers->recipe->options->wp_query( $args, true, esc_attr__( 'Any membership', 'uncanny-automator' ) );
		foreach ( $memberships as $membership_id => $membership_title ) {
			$options[] = array(
				'value' => $membership_id,
				'text'  => $membership_title,
			);
		}

		return $options;
	}

	/**
	 * Evaluate_condition
	 *
	 * @return void
	 * @throws \Exception
	 */
	public function evaluate_condition() {

		$value   = $this->get_option( 'LF_MEMBERSHIP' );
		$student = llms_get_student( $this->user_id );

		// User does not have any membership.
		if ( ! $student ) {
			return;
		}

		// Get all memberships of the user.
		$memberships = $student->get_enrollments( 'membership' );

		// Check if any membership -1 is selected.
		if ( in_array( '-1', $value ) ) {
			if ( (int) $memberships['found'] > 0 ) {
				$this->condition_failed( __( 'User has memberships', 'uncanny-automator-pro' ) );
			}
			return;
		}

		// Specific memberships are selected.
		$relation       = $this->get_option( 'LF_ANYORALL' );
		$has_membership = llms_is_user_enrolled( $this->user_id, $value, $relation );

		// Check if we are validating all memberships.
		if ( ! empty( $has_membership ) && 'all' === $relation ) {
			$message = sprintf(
				/* translators: %1$s: Membership name(s) */
				__( 'User has all of the memberships : %1$s', 'uncanny-automator-pro' ),
				$this->get_option( 'LF_MEMBERSHIP_readable' )
			);

			$this->condition_failed( $message );
		}

		// Check if we are validating any memberships.
		if ( ! empty( $has_membership ) && 'any' === $relation ) {
			// Check if the user has all of the memberships.
			$membership_check = array_diff( $value, $memberships['results'] );

			if ( empty( $membership_check ) ) {
				$message = sprintf(
					/* translators: %1$s: Membership name(s) */
					__( 'User has all of the memberships : %1$s', 'uncanny-automator-pro' ),
					$this->get_option( 'LF_MEMBERSHIP_readable' )
				);
				$this->condition_failed( $message );
			}
		}
	}
}
