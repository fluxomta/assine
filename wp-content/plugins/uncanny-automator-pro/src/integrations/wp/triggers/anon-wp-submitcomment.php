<?php

namespace Uncanny_Automator_Pro;

/**
 * Class ANON_WP_SUBMITCOMMENT
 *
 * @package Uncanny_Automator_Pro
 */
class ANON_WP_SUBMITCOMMENT {

	/**
	 * Integration code
	 *
	 * @var string
	 */
	public static $integration = 'WP';

	/**
	 * @var string
	 */
	private $trigger_code;
	/**
	 * @var string
	 */
	private $trigger_meta;

	/**
	 * Set up Automator trigger constructor.
	 */
	public function __construct() {
		$this->trigger_code = 'WPCOMMENTSUBMITTED';
		$this->trigger_meta = 'SUBMITCOMMENTONPOST';
		if ( Automator()->helpers->recipe->is_edit_page() ) {
			add_action(
				'wp_loaded',
				function () {
					$this->define_trigger();
				},
				99
			);

			return;
		}
		$this->define_trigger();
	}

	/**
	 * Define and register the trigger by pushing it into the Automator object
	 */
	public function define_trigger() {
		$trigger = array(
			'author'              => Automator()->get_author_name( $this->trigger_code ),
			'support_link'        => Automator()->get_author_support_link( $this->trigger_code, 'integration/wordpress-core/' ),
			'integration'         => self::$integration,
			'code'                => $this->trigger_code,
			'is_pro'              => true,
			/* translators: Logged-in trigger - WordPress */
			'sentence'            => sprintf( esc_attr__( "A guest comment is submitted on a user's {{post:%1\$s}}", 'uncanny-automator-pro' ), $this->trigger_meta ),
			/* translators: Logged-in trigger - WordPress */
			'select_option_name'  => esc_attr__( "A guest comment is submitted on a user's {{post}}", 'uncanny-automator-pro' ),
			'action'              => 'comment_post',
			'priority'            => 90,
			'accepted_args'       => 3,
			'type'                => 'anonymous',
			'validation_function' => array( $this, 'anon_submit_comment' ),
			'options_callback'    => array( $this, 'load_options' ),
		);

		Automator()->register->trigger( $trigger );
	}

	/**
	 * load_options
	 *
	 * @return void
	 */
	public function load_options() {

		$options = Automator()->utilities->keep_order_of_options(
			array(
				'options_group' => array(
					$this->trigger_meta => array(
						Automator()->helpers->recipe->wp->options->pro->all_wp_post_types(
							__( 'Post type', 'uncanny-automator-pro' ),
							'WPPOSTTYPES',
							array(
								'token'        => false,
								'is_ajax'      => true,
								'comments'     => true,
								'target_field' => $this->trigger_meta,
								'endpoint'     => 'select_all_post_from_SELECTEDPOSTTYPE',
							)
						),
						Automator()->helpers->recipe->field->select_field(
							$this->trigger_meta,
							__( 'Post', 'uncanny-automator-pro' ),
							array(),
							null,
							false,
							false,
							$relevant_tokens = array(
								'POSTEXCERPT'            => __( 'Post excerpt', 'uncanny-automator-pro' ),
								'POSTCONTENT'            => __( 'Post content (raw)', 'uncanny-automator-pro' ),
								'POSTCONTENT_BEAUTIFIED' => __( 'Post content (formatted)', 'uncanny-automator-pro' ),
								'WPPOSTTYPES_TYPE'       => __( 'Post type', 'uncanny-automator-pro' ),
								'POSTAUTHORFN'           => __( 'Post author first name', 'uncanny-automator-pro' ),
								'POSTAUTHORLN'           => __( 'Post author last name', 'uncanny-automator-pro' ),
								'POSTAUTHORDN'           => __( 'Post author display name', 'uncanny-automator-pro' ),
								'POSTAUTHOREMAIL'        => __( 'Post author email', 'uncanny-automator-pro' ),
								'POSTAUTHORURL'          => __( 'Post author URL', 'uncanny-automator-pro' ),
								'COMMENTID'              => __( 'Comment ID', 'uncanny-automator-pro' ),
								'COMMENTAUTHOR'          => __( 'Commenter name', 'uncanny-automator-pro' ),
								'COMMENTAUTHOREMAIL'     => __( 'Commenter email', 'uncanny-automator-pro' ),
								'COMMENTAUTHORWEB'       => __( 'Commenter website', 'uncanny-automator-pro' ),
								'COMMENTCONTENT'         => __( 'Comment content', 'uncanny-automator-pro' ),
								'POSTCOMMENTURL'         => __( 'Comment URL', 'uncanny-automator-pro' ),
								'POSTCOMMENTDATE'        => __( 'Comment submitted date', 'uncanny-automator-pro' ),
								'POSTCOMMENTSTATUS'      => __( 'Comment status', 'uncanny-automator-pro' ),
							)
						),
					),
				),
			)
		);

		return $options;
	}

	/**
	 * Validation function when the trigger action is hit
	 *
	 * @param $comment_id
	 * @param $comment_approved
	 * @param $commentdata
	 */
	public function anon_submit_comment( $comment_id, $comment_approved, $commentdata ) {
		if ( 0 !== $commentdata['user_id'] ) {
			return;
		}
		$recipes            = Automator()->get->recipes_from_trigger_code( $this->trigger_code );
		$required_post      = Automator()->get->meta_from_recipes( $recipes, $this->trigger_meta );
		$matched_recipe_ids = array();

		//Add where option is set to Any post / specific post
		foreach ( $recipes as $recipe_id => $recipe ) {
			foreach ( $recipe['triggers'] as $trigger ) {
				$trigger_id = $trigger['ID'];
				if ( intval( '-1' ) === intval( $required_post[ $recipe_id ][ $trigger_id ] ) ||
					 $required_post[ $recipe_id ][ $trigger_id ] == $commentdata['comment_post_ID'] ) {
					$matched_recipe_ids[] = array(
						'recipe_id'  => $recipe_id,
						'trigger_id' => $trigger_id,
					);
				}
			}
		}

		//	If recipe matches
		if ( ! empty( $matched_recipe_ids ) ) {
			$user_id = get_current_user_id();
			foreach ( $matched_recipe_ids as $matched_recipe_id ) {
				$pass_args = array(
					'code'             => $this->trigger_code,
					'meta'             => $this->trigger_meta,
					'user_id'          => $user_id,
					'recipe_to_match'  => $matched_recipe_id['recipe_id'],
					'trigger_to_match' => $matched_recipe_id['trigger_id'],
					'post_id'          => $commentdata['comment_post_ID'],
				);

				$args = Automator()->maybe_add_trigger_entry( $pass_args, false );

				if ( $args ) {
					foreach ( $args as $result ) {
						if ( true === $result['result'] ) {
							$trigger_meta = array(
								'user_id'        => $user_id,
								'trigger_id'     => $result['args']['trigger_id'],
								'trigger_log_id' => $result['args']['trigger_log_id'],
								'run_number'     => $result['args']['run_number'],
							);

							// Comment ID
							Automator()->db->token->save( 'comment_id', maybe_serialize( $comment_id ), $trigger_meta );

							Automator()->maybe_trigger_complete( $result['args'] );
						}
					}
				}
			}
		}
	}
}
