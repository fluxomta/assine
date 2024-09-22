<?php
/**
 * Returns incoming webhooks route's prefix.
 *
 * @return string
 */
function automator_pro_get_webhook_route_prefix() {
	return apply_filters( 'automator_pro_get_webhook_route_prefix', 'uap' );
}

/**
 * Only identify and add tokens IF it's edit recipe page
 * @return bool
 */
function automator_pro_do_identify_tokens() {
	if (
		isset( $_REQUEST['action'] ) && //phpcs:ignore WordPress.Security.NonceVerification.Recommended
		(
			'heartbeat' === (string) sanitize_text_field( wp_unslash( $_REQUEST['action'] ) ) || //phpcs:ignore WordPress.Security.NonceVerification.Recommended
			'wp-remove-post-lock' === (string) sanitize_text_field( wp_unslash( $_REQUEST['action'] ) )  //phpcs:ignore WordPress.Security.NonceVerification.Recommended
		)
	) { //phpcs:ignore WordPress.Security.NonceVerification.Recommended
		// if it's heartbeat, post lock actions bail
		return false;
	}

	if ( ! Automator()->helpers->recipe->is_edit_page() && ! Automator()->helpers->recipe->is_rest() ) {
		// If not automator edit page or rest call, bail
		return false;
	}

	return true;
}

/**
 * Retrieves the filter registry class.
 *
 * Filter registry class is used to load all filters for UI consumption.
 *
 * @return \Uncanny_Automator_Pro\Loops\Filter\Registry
 */
function automator_pro_loop_filters() {

	return \Uncanny_Automator_Pro\Loops\Filter\Registry::get_instance();

}

/**
 * automator_free_older_than
 *
 * Returns true if Automator Free is older than the $version
 *
 * @param mixed $version
 *
 * @return void
 */
function automator_free_older_than( $version ) {

	if ( defined( 'AUTOMATOR_PLUGIN_VERSION' ) ) {
		return version_compare( AUTOMATOR_PLUGIN_VERSION, $version, '<' );
	}

	return false;
}
