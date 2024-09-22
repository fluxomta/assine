<?php

namespace Uncanny_Automator_Pro;

/**
 * Class Magic_Button
 *
 * @package Uncanny_Automator_Pro
 */
class Magic_Button {

	/**
	 * Constructor.
	 */

	public function __construct() {
		// Magic Button Shortcode
		add_shortcode( 'automator_button', array( __CLASS__, 'automator_button' ) );

		// Magic Link Shortcode
		add_shortcode( 'automator_link', array( __CLASS__, 'automator_link' ) );

		// Handle Magic button submission
		add_action( 'init', array( __CLASS__, 'automator_magic_button_action' ) );

		//Handle Magic link click
		add_action( 'init', array( __CLASS__, 'automator_magic_link_action' ) );

		// Handle Magic Link ajax submission
		add_action( 'wp_ajax_automator_magic_link_action', array( __CLASS__, 'automator_link_ajax_action' ) );
		add_action( 'wp_ajax_nopriv_automator_magic_link_action', array( __CLASS__, 'automator_link_ajax_action' ) );
	}

	/**
	 * Return the HTML template that is displayed by the shortcode
	 *
	 * @param array $atts The attributes passed in the the shortcode
	 *
	 * @return string  The HTML template loaded
	 * @since 2.0
	 */
	public static function automator_button( $atts ) {
		static $added_script = false;
		$atts                = shortcode_atts(
			array(
				'id'              => 0,
				'is_ajax'         => 'no',
				'label'           => _x( 'Click here', 'Magic Button label', 'uncanny-automator-pro' ),
				'success_message' => _x( 'Done', 'Magic Button Success Message', 'uncanny-automator-pro' ),
				'submit_message'  => _x( 'Processing...', 'Magic Button Submit message', 'uncanny-automator-pro' ),
				'css_class'       => '',
			),
			$atts,
			'automator_button'
		);

		if ( empty( $atts['id'] ) || 0 === (int) $atts['id'] ) {
			return '';
		}

		global $post;
		if ( ! empty( $post ) && isset( $post->ID ) && isset( $post->post_title ) ) {
			$button_vars = '<input type="hidden" name="automator_button_post_id" value="' . absint( $post->ID ) . '" />';
			$button_vars .= '<input type="hidden" name="automator_button_post_title" value="' . esc_html( $post->post_title ) . '" />';
		} else {
			$button_vars = '';
		}

		// Generate / validate the css class name.
		$css_class = self::get_css_class_name( $atts, 'automator_button' );

		// Form output
		$form_html = '<form method="post" class="automator_button_form" id="automator_button_form_' . esc_attr( $atts['id'] ) . '"';
		if ( 'yes' === $atts['is_ajax'] ) {
			$form_html .= ' data-automator-ajax="true" data-success-message="' . esc_attr( $atts['success_message'] ) . '" data-submit-message="' . esc_attr( $atts['submit_message'] ) . '"';
		}
		// If AJAX is required and the script hasn't been added yet, add it
		if ( 'yes' === $atts['is_ajax'] && ! $added_script ) {
			add_action( 'wp_footer', array( __CLASS__, 'add_magic_button_script' ) );
			$added_script = true;
		}
		$form_html .= '>';
		$form_html .= '<input type="hidden" name="action" value="automator_button_action"/>';
		$form_html .= '<input type="hidden" name="automator_trigger_id" value="' . esc_attr( $atts['id'] ) . '"/>';
		$form_html .= $button_vars;
		$form_html .= wp_nonce_field( AUTOMATOR_PRO_ITEM_NAME, 'automator_nonce', true, false );
		$form_html .= '<button type="submit" class="' . esc_attr( $css_class ) . '">' . esc_html( $atts['label'] ) . '</button>';
		$form_html .= '</form>';

		if ( 'yes' === $atts['is_ajax'] && ! $added_script ) {
			$added_script = true; // Ensure script is added only once
		}

		return $form_html;
	}

	/**
	 *
	 */
	public static function automator_magic_button_action() {
		// Check for the nonce for security
		if ( automator_filter_has_var( 'automator_nonce', INPUT_POST ) && wp_verify_nonce( automator_filter_input( 'automator_nonce', INPUT_POST ), AUTOMATOR_PRO_ITEM_NAME ) ) {

			$user_id              = get_current_user_id();
			$automator_trigger_id = absint( automator_filter_input( 'automator_trigger_id', INPUT_POST ) );

			// Perform the action hook
			do_action( 'automator_magic_button_action', $automator_trigger_id, $user_id );

			// If the request is an AJAX request, send a JSON response
			if ( defined( 'DOING_AJAX' ) && DOING_AJAX ) {
				wp_send_json_success(
					array(
						'message'    => 'Triggered successfully',
						'trigger_id' => $automator_trigger_id,
					)
				);
			}
		}
	}


	/**
	 * Return the HTML template that is displayed by the shortcode
	 *
	 * @param array $atts The attributes passed in the the shortcode
	 *
	 * @return string  The HTML template loaded
	 * @since 2.6
	 */
	public static function automator_link( $atts ) {
		static $script_added = false;
		$atts                = shortcode_atts(
			array(
				'id'              => 0,
				'is_ajax'         => 'no',
				'text'            => _x( 'Click here', 'Magic Link label', 'uncanny-automator-pro' ),
				'success_message' => _x( 'Done', 'Magic Link Success Message', 'uncanny-automator-pro' ),
				'submit_message'  => _x( 'Processing...', 'Magic Link Submit message', 'uncanny-automator-pro' ),
				'css_class'       => '',
			),
			$atts,
			'automator_link'
		);

		if ( empty( $atts['id'] ) || 0 === $atts['id'] ) {
			return '';
		}

		$nonce      = wp_create_nonce( AUTOMATOR_PRO_ITEM_NAME );
		$query_args = array(
			'automator_trigger_id' => $atts['id'],
			'automator_nonce'      => $nonce,
		);
		global $post;
		if ( ! empty( $post ) && isset( $post->ID ) && isset( $post->post_title ) ) {
			$query_args['automator_button_post_id'] = $post->ID;
		}

		$link = $atts['is_ajax'] === 'yes' ? '#' : add_query_arg( $query_args, get_permalink() );

		// Generate / validate the css class name.
		$css_class = self::get_css_class_name( $atts, 'automator_link' );

		$link_html = '<a href="' . esc_url( $link ) . '" class="' . esc_attr( $css_class ) . '" data-nonce="' . $nonce . '" data-automator-id="' . esc_attr( $atts['id'] ) . '" data-is-ajax="' . esc_attr( $atts['is_ajax'] ) . '" data-success-message="' . esc_attr( $atts['success_message'] ) . '" data-submit-message="' . esc_attr( $atts['submit_message'] ) . '">' . esc_html( $atts['text'] ) . '</a>';

		// If AJAX is enabled for any link, enqueue the script
		if ( 'yes' === $atts['is_ajax'] && ! $script_added ) {
			add_action( 'wp_footer', array( __CLASS__, 'add_magic_link_script' ) );
			$script_added = true; // Ensure script is added only once
		}

		return $link_html;
	}

	/**
	 *
	 */
	public static function automator_magic_link_action() {

		if ( automator_filter_has_var( 'automator_nonce' ) && wp_verify_nonce( automator_filter_input( 'automator_nonce' ), AUTOMATOR_PRO_ITEM_NAME ) ) {

			$user_id = get_current_user_id();

			$automator_trigger_id = absint( automator_filter_input( 'automator_trigger_id' ) );

			self::execute_automator_link_action( $automator_trigger_id, $user_id );

			$refresh = remove_query_arg(
				array(
					'automator_trigger_id',
					'automator_nonce',
					'automator_button_post_id',
				)
			);

			wp_safe_redirect( $refresh );
			exit();
		}
	}

	/**
	 * @return void
	 */
	public static function automator_link_ajax_action() {
		if ( automator_filter_has_var( 'automator_nonce', INPUT_POST ) && wp_verify_nonce( automator_filter_input( 'automator_nonce', INPUT_POST ), AUTOMATOR_PRO_ITEM_NAME ) ) {
			$user_id              = get_current_user_id();
			$automator_trigger_id = absint( automator_filter_input( 'automator_trigger_id', INPUT_POST ) );

			self::execute_automator_link_action( $automator_trigger_id, $user_id );

			wp_send_json_success(
				array(
					'message'    => 'Triggered successfully',
					'trigger_id' => $automator_trigger_id,
				)
			);
		}
	}

	/**
	 * @param $trigger_id
	 * @param $user_id
	 *
	 * @return void
	 */
	public static function execute_automator_link_action( $trigger_id, $user_id ) {
		do_action( 'automator_magic_button_action', $trigger_id, $user_id );
	}

	/**
	 * @return void
	 */
	public static function add_magic_button_script() {
		?>
		<script>
			document.addEventListener('DOMContentLoaded', function () {
				document.querySelectorAll('form[data-automator-ajax="true"]').forEach(function (form) {
					form.addEventListener('submit', function (event) {
						event.preventDefault();
						var formData = new FormData(form);
						var submitButton = form.querySelector('button[type="submit"]');
						var originalButtonText = submitButton.textContent;
						submitButton.disabled = true; // Disable the button
						submitButton.textContent = form.dataset.submitMessage; // Change button text or add loading animation

						formData.append('action', 'automator_button_action');
						fetch('<?php echo admin_url( 'admin-ajax.php' ); ?>', {
							method: 'POST',
							credentials: 'same-origin',
							body: formData,
						})
							.then(response => response.json())
							.then(data => {
								console.log(data); // Handle success
								submitButton.textContent = form.dataset.successMessage || originalButtonText; // Show success message
								setTimeout(function () { // Revert to original state after 2 seconds
									submitButton.disabled = false;
									submitButton.textContent = originalButtonText;
								}, 2000);
							})
							.catch(error => {
								console.error('Error:', error);
								submitButton.disabled = false; // Re-enable the button on error
								submitButton.textContent = originalButtonText;
							});
					});
				});
			});
		</script>
		<?php
	}

	/**
	 * @return void
	 */
	public static function add_magic_link_script() {
		?>
		<script>
			document.addEventListener('DOMContentLoaded', function () {
				document.querySelectorAll('.automator_link[data-is-ajax="yes"]').forEach(function (link) {
					link.addEventListener('click', function (event) {
						event.preventDefault();
						var nonce = link.dataset.nonce;
						var linkElement = event.target;
						var originalText = linkElement.textContent;
						linkElement.textContent = linkElement.getAttribute('data-submit-message');

						var data = {
							action: 'automator_magic_link_action',
							automator_trigger_id: linkElement.getAttribute('data-automator-id'),
							automator_nonce: nonce,
						};

						fetch('<?php echo admin_url( 'admin-ajax.php' ); ?>', {
							method: 'POST',
							credentials: 'same-origin',
							headers: {'Content-Type': 'application/x-www-form-urlencoded'},
							body: Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&'),
						})
							.then(response => response.json())
							.then(data => {
								console.log(data);
								linkElement.textContent = linkElement.getAttribute('data-success-message');
								setTimeout(() => linkElement.textContent = originalText, 2000); // Revert text after 2 seconds
							})
							.catch(error => {
								console.error('Error:', error);
								linkElement.textContent = originalText;
							});
					});
				});
			});
		</script>
		<?php
	}

	/**
	 * @param $atts - The shortcode attributes
	 * @param $default - The default class name to be applied
	 *
	 * @return string
	 */
	public static function get_css_class_name( $atts, $default ) {
		$css_class = '';
		if ( isset( $atts['css_class'] ) && ! empty( $atts['css_class'] ) ) {
			$css_class = sanitize_html_class( $atts['css_class'] );
		}

		// Append the default class name
		$css_class .= ! empty( $css_class ) ? ' ' : '';
		$css_class .= $default;

		return $css_class;
	}
}
