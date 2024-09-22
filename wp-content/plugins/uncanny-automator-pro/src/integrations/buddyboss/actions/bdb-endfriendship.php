<?php

namespace Uncanny_Automator_Pro;

/**
 * Class BDB_ENDFRIENDSHIP
 *
 * @package Uncanny_Automator_Pro
 */
class BDB_ENDFRIENDSHIP {

	/**
	 * Integration code
	 *
	 * @var string
	 */
	public static $integration = 'BDB';

	private $action_code;
	private $action_meta;

	/**
	 * SetAutomatorTriggers constructor.
	 */
	public function __construct() {
		$this->action_code = 'BDBREMOVEACONNECTION';
		$this->action_meta = 'BDBENDFRIENDSHIP';
		$this->define_action();
	}

	/**
	 * Define and register the action by pushing it into the Automator object.
	 */
	public function define_action() {

		$action = array(
			'author'             => Automator()->get_author_name(),
			'support_link'       => Automator()->get_author_support_link( $this->action_code, 'integration/buddyboss/' ),
			'is_pro'             => true,
			'integration'        => self::$integration,
			'code'               => $this->action_code,
			/* translators: Action - BuddyBoss */
			'sentence'           => sprintf( __( 'End friendship with {{a user:%1$s}}', 'uncanny-automator-pro' ), $this->action_meta ),
			/* translators: Action - BuddyBoss */
			'select_option_name' => __( 'End friendship with {{a user}}', 'uncanny-automator-pro' ),
			'priority'           => 10,
			'accepted_args'      => 1,
			'execution_function' => array( $this, 'bdb_end_friendship' ),
			'options_callback'   => array( $this, 'load_options' ),
		);

		Automator()->register->action( $action );
	}

	/**
	 * @return array[]
	 */
	public function load_options() {
		return Automator()->utilities->keep_order_of_options(
			array(
				'options' => array(
					Automator()->helpers->recipe->buddyboss->options->all_buddyboss_users( null, $this->action_meta ),
				),
			)
		);
	}

	/**
	 * Remove from BDB Remove Friend
	 *
	 * @param string $user_id
	 * @param array $action_data
	 * @param string $recipe_id
	 *
	 * @since 1.1
	 * @return void
	 *
	 */
	public function bdb_end_friendship( $user_id, $action_data, $recipe_id, $args ) {

		$remove_friend = $action_data['meta'][ $this->action_meta ];
		friends_remove_friend( $user_id, $remove_friend );
		Automator()->complete_action( $user_id, $action_data, $recipe_id );
	}

}
