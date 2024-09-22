<?php
function storefront_child_enqueue_styles() {
    wp_enqueue_style('storefront-style', get_template_directory_uri() . '/style.css');
    $version = filemtime(get_stylesheet_directory() . '/assets/css/build.css');
    wp_enqueue_style('storefront-child-style', get_stylesheet_directory_uri() . '/assets/css/build.css', array('storefront-style'), $version);
}
add_action('wp_enqueue_scripts', 'storefront_child_enqueue_styles');
