<?php

namespace Uncanny_Automator_Pro;

/**
 * Class Blocks
 *
 * Pro blocks
 *
 * @package Uncanny_Automator_Pro
 */
class Blocks {

	/**
	 * Entity endpoint
	 *
	 * @var string
	 */
	const ENTITY_ENDPOINT = 'uap/blocks/v1';

	/**
	 * Blocks constructor.
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'register_blocks' ) );
		add_action( 'rest_api_init', array( $this, 'add_block_rest_routes' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'add_block_supports' ) );
	}

	/**
	 * Register blocks
	 */
	public function register_blocks() {

		$blocks = array(
			'magic-button',
			'magic-link',
		);

		foreach ( $blocks as $block ) {
			$path = __DIR__ . '/dist/' . $block;
			// Check if the block.json file exists in the block directory.
			if ( ! file_exists( $path . '/block.json' ) ) {
				continue;
			}

			register_block_type( $path );
		}

	}

	/**
	 * Add block entity API
	 *
	 * @return void
	 */
	public function add_block_rest_routes() {

		register_rest_route(
			self::ENTITY_ENDPOINT,
			'/magic-triggers',
			array(
				'methods'             => 'GET',
				'callback'            => array( $this, 'get_magic_triggers' ),
				'validate_callback'   => array( $this, 'validate_call' ),
				'permission_callback' => array( $this, 'user_has_permissions' ),
			)
		);
	}

	/**
	 * Validate REST call
	 *
	 * @param $request
	 *
	 * @return bool
	 */
	public function validate_call( $request ) {
		return wp_verify_nonce( $request->get_header( 'X-WP-Nonce' ), 'wp_rest' );
	}

	/**
	 * Check if user has permissions to manage blocks
	 *
	 * @return bool
	 */
	public function user_has_permissions() {
		return current_user_can( 'edit_posts' ) || current_user_can( 'edit_pages' );
	}

	/**
	 * Get magic triggers
	 *
	 * @param \WP_REST_Request $request
	 *
	 * @return \WP_REST_Response
	 */
	public function get_magic_triggers( \WP_REST_Request $request ) {

		// Validate the type parameter.
		$type  = $request->get_param( 'type' );
		$types = array(
			'button' => array( 'WPMAGICBUTTON', 'ANONWPMAGICBUTTON' ),
			'link'   => array( 'WPMAGICLINK', 'ANONWPMAGICLINK' ),
		);

		if ( ! $type || ! isset( $types[ $type ] ) ) {
			return new \WP_REST_Response( array( 'error' => 'Invalid type parameter.' ), 400 );
		}

		global $wpdb;
		$triggers = $wpdb->get_results(
			"SELECT DISTINCT p.ID as `id`,
				p.post_parent as recipeID,
				pp.post_title as title,
				p.post_status as triggerStatus,
				pp.post_status as recipeStatus
				FROM {$wpdb->postmeta} as pm
				INNER JOIN {$wpdb->posts} as p ON pm.post_id = p.ID
				INNER JOIN {$wpdb->posts} as pp ON p.post_parent = pp.ID
				WHERE pm.meta_key IN ( '" . join( "', '", $types[ $type ] ) . "' )", // phpcs:ignore
			ARRAY_A
		); // phpcs:ignore

		// If no triggers are found, return an empty array.
		if ( empty( $triggers ) ) {
			return new \WP_REST_Response( array(), 200 );
		}

		// Adjust the title of the triggers.
		foreach ( $triggers as $key => $trigger ) {
			// If the title is empty, we'll use the Recipe ID.
			if ( empty( $trigger['title'] ) ) {
				$triggers[ $key ]['title'] = sprintf(
				// Translators: %1$s is the Recipe ID.
					__( '(no title %1$s)', 'uncanny-automator-pro' ),
					$trigger['recipeID']
				);
			}

			// Add lable for selects.
			$triggers[ $key ]['option'] = sprintf(
			// Translators: %1$s is the Trigger ID, %2$s is the title.
				__( '(ID: %1$s) %2$s', 'uncanny-automator-pro' ),
				$triggers[ $key ]['id'],
				$triggers[ $key ]['title']
			);
		}

		return new \WP_REST_Response( $triggers, 200 );
	}

	/**
	 * Add block support - translations and category icon.
	 *
	 * @return void
	 */
	public function add_block_supports() {

		// Path to the asset file
		$asset_file = plugin_dir_path( __FILE__ ) . 'dist/block-support.asset.php';
		if ( ! file_exists( $asset_file ) ) {
			return;
		}

		$asset = require $asset_file;

		// Enqueue the block-support.js file
		wp_enqueue_script(
			'uap-block-support',
			plugins_url( 'dist/block-support.js', __FILE__ ),
			$asset['dependencies'],
			$asset['version'],
			true
		);

		// Add translations.
		$data = array(
			'magic-button'   => array(
				'label'           => _x( 'Click here', 'Magic Button label', 'uncanny-automator-pro' ),
				'success_message' => _x( 'Done', 'Magic Button Success Message', 'uncanny-automator-pro' ),
				'submit_message'  => _x( 'Processing...', 'Magic Button Submit message', 'uncanny-automator-pro' ),
				'panel_label'     => _x( 'Button settings', 'Magic Button panel label', 'uncanny-automator-pro' ),
				'input_label'     => _x( 'Button label', 'Magic Button input label', 'uncanny-automator-pro' ),
				'editor_help'     => _x( 'Display a magic button.', 'Magic Button editor help', 'uncanny-automator-pro' ),
				'select_label'    => _x( 'Select a Magic Button', 'Magic Button select label', 'uncanny-automator-pro' ),
				'not_found'       => _x( 'No Magic Buttons found', 'Magic Button Trigger Select', 'uncanny-automator-pro' ),
			),
			'magic-link'     => array(
				'label'           => _x( 'Click here', 'Magic Link label', 'uncanny-automator-pro' ),
				'success_message' => _x( 'Done', 'Magic Link Success Message', 'uncanny-automator-pro' ),
				'submit_message'  => _x( 'Processing...', 'Magic Link Submit message', 'uncanny-automator-pro' ),
				'panel_label'     => _x( 'Link settings', 'Magic Link panel label', 'uncanny-automator-pro' ),
				'input_label'     => _x( 'Link text', 'Magic Link input label', 'uncanny-automator-pro' ),
				'editor_help'     => _x( 'Display a magic link.', 'Magic Link editor help', 'uncanny-automator-pro' ),
				'select_label'    => _x( 'Select a Magic Link', 'Magic Link select label', 'uncanny-automator-pro' ),
				'not_found'       => _x( 'No Magic Links found', 'Magic Link Trigger Select', 'uncanny-automator-pro' ),
			),
			'magic-triggers' => array(
				'recipe_label'                  => _x( 'Recipe', 'Magic Trigger Recipe label', 'uncanny-automator-pro' ),
				'trigger_label'                 => _x( 'Trigger', 'Magic Trigger label', 'uncanny-automator-pro' ),
				'loading'                       => _x( 'Loading...', 'Magic Trigger Block Info', 'uncanny-automator-pro' ),
				// Selected trigger & recipe info.
				'tooltip_trigger_live'          => _x( 'This trigger is live', 'Magic Trigger Block Info', 'uncanny-automator-pro' ),
				'tooltip_trigger_draft'         => _x( 'This trigger is not live', 'Magic Trigger Block Info', 'uncanny-automator-pro' ),
				'tooltip_recipe_live'           => _x( 'This recipe is live', 'Magic Trigger Block Info', 'uncanny-automator-pro' ),
				'tooltip_recipe_draft'          => _x( 'This recipe is not live', 'Magic Trigger Block Info', 'uncanny-automator-pro' ),
				'trigger_info'                  => _x( 'Trigger ID:', 'Magic Trigger Block Info', 'uncanny-automator-pro' ),
				// Sidebar.
				'sidebar_trigger_label'         => _x( 'Trigger Settings', 'Magic Trigger Sidebar', 'uncanny-automator-pro' ),
				'sidebar_ajax_label'            => _x( 'Enable AJAX submission', 'Magic Trigger Sidebar', 'uncanny-automator-pro' ),
				'sidebar_ajax_help'             => _x( 'When enabled the page will not reload.', 'Magic Trigger Sidebar', 'uncanny-automator-pro' ),
				'sidebar_submit_message_label'  => _x( 'Submit Message', 'Magic Trigger Sidebar', 'uncanny-automator-pro' ),
				'sidebar_submit_message_help'   => _x( 'Message to show on button click and before recipe completion.', 'Magic Trigger Sidebar', 'uncanny-automator-pro' ),
				'sidebar_success_message_label' => _x( 'Success Message', 'Magic Trigger Sidebar', 'uncanny-automator-pro' ),
				'sidebar_success_message_help'  => _x( 'Message to show when an Ajax Magic Button recipe is completed.', 'Magic Trigger Sidebar', 'uncanny-automator-pro' ),
			),
		);

		wp_localize_script( 'uap-block-support', 'automatorProBlocks', $data );
	}

}
