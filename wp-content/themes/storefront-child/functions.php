<?php

add_action('after_setup_theme', function() {
    if (getenv('JWT_AUTH_SECRET_KEY') && !defined('JWT_AUTH_SECRET_KEY')) {
        define('JWT_AUTH_SECRET_KEY', getenv('JWT_AUTH_SECRET_KEY'));
    }
});


// Inclui arquivos de funções
require_once get_stylesheet_directory() . '/inc/cors.php';
require_once get_stylesheet_directory() . '/inc/enqueue-scripts.php';
require_once get_stylesheet_directory() . '/inc/jwt-handler.php';
require_once get_stylesheet_directory() . '/inc/api/index.php';
require_once get_stylesheet_directory() . '/inc/woo/index.php';


