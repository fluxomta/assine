<?php
namespace Uncanny_Automator_Pro\Loops\Loop;

/**
 * Interface Entity_Iterable
 *
 * Establishing a contract for all entities. Each entities must have a get method that returns an array of integers.
 *
 * @since 5.3
 *
 * @package Uncanny_Automator_Pro\Loops\Loop
 */
interface Entity_Iterable {

	/**
	 * Must return an array of integer.
	 *
	 * @todo Declare return type declaration when dropping the support for 5.6
	 *
	 * @return int[]
	 */
	public function get();

}
