<?php

namespace Uncanny_Automator_Pro;

/**
 * Class LF_NOT_ENROLLED_IN_COURSE
 *
 * @package Uncanny_Automator_Pro
 */
class LF_NOT_ENROLLED_IN_COURSE extends Action_Condition {

	/**
	 * Define_condition
	 *
	 * @return void
	 */
	public function define_condition() {

		$this->integration = 'LF';
		/*translators: Token */
		$this->name = __( 'The user is not enrolled in {{a course}}', 'uncanny-automator-pro' );
		$this->code = 'LF_NOT_ENROLLED_IN_COURSE';
		// translators: A token matches a value
		$this->dynamic_name  = sprintf( esc_html__( 'The user is not enrolled in {{a course:%1$s}}', 'uncanny-automator-pro' ), 'LF_COURSE' );
		$this->is_pro        = true;
		$this->requires_user = true;
	}

	/**
	 * Fields
	 *
	 * @return array
	 */
	public function fields() {

		$courses_field_args = array(
			'option_code'              => 'LF_COURSE',
			'label'                    => esc_html__( 'Course', 'uncanny-automator-pro' ),
			'required'                 => true,
			'options'                  => $this->lf_course_options(),
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
			$this->field->select_field_args( $courses_field_args ),
			// Any or all
			$this->field->select_field_args( $any_or_all_args ),
		);
	}

	/**
	 * @return array[]
	 */
	public function lf_course_options() {

		$args = array(
			'post_type'      => 'course',
			'posts_per_page' => 999, //phpcs:ignore WordPress.WP.PostsPerPage.posts_per_page_posts_per_page
			'orderby'        => 'title',
			'order'          => 'ASC',
			'post_status'    => 'publish',
		);

		$options = array();
		$courses = Automator()->helpers->recipe->options->wp_query( $args, true, esc_attr__( 'Any course', 'uncanny-automator' ) );
		foreach ( $courses as $course_id => $course_title ) {
			$options[] = array(
				'value' => $course_id,
				'text'  => $course_title,
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

		$value   = $this->get_option( 'LF_COURSE' );
		$student = llms_get_student( $this->user_id );

		// User does not have any courses.
		if ( ! $student ) {
			return;
		}

		// Get the courses for the user.
		$courses = $student->get_enrollments( 'course' );

		// Check if any course -1 is selected.
		if ( in_array( '-1', $value ) ) {
			if ( (int) $courses['found'] > 0 ) {
				$this->condition_failed( __( 'User is enrolled in a course', 'uncanny-automator-pro' ) );
			}
			return;
		}

		// Specific courses are selected.
		$relation    = $this->get_option( 'LF_ANYORALL' );
		$is_enrolled = llms_is_user_enrolled( $this->user_id, $value, $relation );

		// Check if we are validating all courses.
		if ( ! empty( $is_enrolled ) && 'all' === $relation ) {
			$message = sprintf(
				/* translators: %1$s: Membership name(s) */
				__( 'User has all of the courses : %1$s', 'uncanny-automator-pro' ),
				$this->get_option( 'LF_COURSE_readable' )
			);

			$this->condition_failed( $message );
		}

		// Check if we are validating any courses.
		if ( ! empty( $is_enrolled ) && 'any' === $relation ) {
			$course_check = array_diff( $value, $courses['results'] );
			if ( empty( $course_check ) ) {
				$message = sprintf(
					/* translators: %1$s: Course name(s) */
					__( 'User has all of the courses : %1$s', 'uncanny-automator-pro' ),
					$this->get_option( 'LF_COURSE_readable' )
				);

				$this->condition_failed( $message );
			}
		}
	}
}
