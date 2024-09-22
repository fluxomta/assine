<?php

namespace Uncanny_Automator_Pro;

/**
 * Class BDB_UNSUBSCRIBE_USER_FROM_FORUM
 *
 * @package Uncanny_Automator_Pro
 */
class BDB_UNSUBSCRIBE_USER_FROM_FORUM extends \Uncanny_Automator\Recipe\Action {

	/**
	 * @return mixed|void
	 */
	protected function setup_action() {
		$this->set_integration( 'BDB' );
		$this->set_action_code( 'BDB_UNSUBSCRIBE_FORUM' );
		$this->set_action_meta( 'BDB_FORUMS' );
		$this->set_is_pro( true );
		$this->set_requires_user( true );
		$this->set_sentence( sprintf( esc_attr_x( 'Unsubscribe the user from {{a forum:%1$s}}', 'BuddyBoss', 'uncanny-automator-pro' ), $this->get_action_meta(), 'EXPIRATION_DATE:' . $this->get_action_meta() ) );
		$this->set_readable_sentence( esc_attr_x( 'Unsubscribe the user from {{a forum}}', 'BuddyBoss', 'uncanny-automator-pro' ) );
	}

	/**
	 * Define the Action's options
	 *
	 * @return void
	 */
	public function options() {
		$bdb_options = Automator()->helpers->recipe->buddyboss->options->pro->list_buddyboss_forums( esc_attr__( 'Forum', 'uncanny-automator-pro' ), $this->get_action_meta(), array( 'uo_include_any' => false ), false );
		$bdb_forums  = array();
		foreach ( $bdb_options['options'] as $key => $option ) {
			$bdb_forums[] = array(
				'text'  => $option,
				'value' => $key,
			);
		}

		return array(
			Automator()->helpers->recipe->field->select(
				array(
					'option_code'     => $this->get_action_meta(),
					'label'           => _x( 'Forum', 'BuddyBoss', 'uncanny-automator-pro' ),
					'relevant_tokens' => array(),
					'options'         => $bdb_forums,
				)
			),
		);

	}

	/**
	 * @return array[]
	 */
	public function define_tokens() {
		return array(
			'FORUM_ID'    => array(
				'name' => __( 'Forum ID', 'uncanny-automator-pro' ),
				'type' => 'int',
			),
			'FORUM_TITLE' => array(
				'name' => __( 'Forum title', 'uncanny-automator-pro' ),
				'type' => 'text',
			),
		);
	}

	/**
	 * @param int   $user_id
	 * @param array $action_data
	 * @param int   $recipe_id
	 * @param array $args
	 * @param       $parsed
	 */
	protected function process_action( $user_id, $action_data, $recipe_id, $args, $parsed ) {
		$bdb_forum = sanitize_text_field( $parsed[ $this->get_action_meta() ] );

		if ( false === bbp_is_forum( $bdb_forum ) ) {
			$this->add_log_error( esc_attr_x( 'Please enter a valid forum ID.', 'BuddyBoss', 'uncanny-automator-pro' ) );

			return false;
		}

		$is_subscribed_to_forum = bbp_is_user_subscribed( $user_id, $bdb_forum );
		if ( false === $is_subscribed_to_forum ) {
			$this->add_log_error( esc_attr_x( 'The user is not subscribed to the specified forum.', 'BuddyBoss', 'uncanny-automator-pro' ) );

			return null;
		}

		$success = bbp_remove_user_subscription( $user_id, $bdb_forum );
		// Do additional subscriptions actions
		do_action( 'bbp_subscriptions_handler', $success, $user_id, $bdb_forum, 'bbp_unsubscribe' );
		if ( false === $success ) {
			$this->add_log_error( esc_attr_x( 'There was a problem unsubscribing from the specified forum!', 'BuddyBoss', 'uncanny-automator-pro' ) );

			return false;
		}

		$this->hydrate_tokens(
			array(
				'FORUM_ID'    => $bdb_forum,
				'FORUM_TITLE' => bbp_get_forum_title( $bdb_forum ),
			)
		);

		return true;
	}
}
