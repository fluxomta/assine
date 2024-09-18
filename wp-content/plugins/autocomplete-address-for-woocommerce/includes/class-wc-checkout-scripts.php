<?php

namespace WC_Autocomplete_Address;

use WC_Autocomplete_Address;

if ( ! defined( 'ABSPATH' ) ) {
  exit; // Exit if accessed directly.
}

class Checkout_Scripts {
  function __construct() {
    add_action( 'wp_enqueue_scripts', array( $this, 'load_scripts' ) );
  }

  public function load_scripts() {
    if ( apply_filters( 'autocomplete_address_for_woocommerce_should_load', is_checkout() ) ) {
      wp_enqueue_script(
        'wc-autocomplete-address',
        WC_Autocomplete_Address::plugin_url() . '/assets/js/autocomplete-address.13ea6708a9ad0da13098.min.js',
        array( 'jquery' ),
        WC_Autocomplete_Address::VERSION,
        true
      );
    }
  }
}

new Checkout_Scripts();
