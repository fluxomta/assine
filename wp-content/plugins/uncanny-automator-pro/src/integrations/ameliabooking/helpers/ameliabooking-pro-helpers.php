<?php // phpcs:ignore WordPress.Files.FileName.InvalidClassFileName

namespace Uncanny_Automator_Pro;

/**
 * Class Ameliabooking_Pro_Helpers
 *
 * @package Uncanny_Automator_Pro
 */
class Ameliabooking_Pro_Helpers {

	public function __construct() {
	}

	/**
	 * Get the WP User ID from the reservation.
	 *
	 * @param array $reservation Reservation data.
	 * @param mixed $container   Container object.
	 *
	 * @return bool|int
	 */
	public static function get_reservation_wp_user_id( $reservation, $container ) {

		$user_id = false;

		// Validate the reservation and container params.
		if ( ! is_array( $reservation ) || ! is_a( $container, 'AmeliaBooking\Infrastructure\Common\Container' ) ) {
			return $user_id;
		}

		// Get the customer id.
		$booking     = ! empty( $reservation['bookings'] ) ? $reservation['bookings'][0] : array();
		$customer_id = ! empty( $booking['customerId'] ) ? $booking['customerId'] : false;
		if ( ! $customer_id ) {
			return $user_id;
		}

		// Get the customer data by customer id.
		$user_repo   = $container->get( 'domain.users.repository' );
		$user        = $user_repo->getById( (int) $customer_id );
		$user_data   = ! empty( $user ) ? $user->toArray() : array();
		$external_id = ! empty( $user_data['externalId'] ) ? $user_data['externalId'] : false;

		// Check if external ID is WP User ID.
		if ( $external_id ) {
			$wp_user = get_user_by( 'ID', $external_id );
			$user_id = ! empty( $wp_user ) ? $wp_user->ID : false;
		}

		return $user_id;
	}

}
