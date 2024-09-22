<?php
require_once get_stylesheet_directory() . '/classes/class-jwt.php';

function generate_jwt_for_user($user) {
    $jwt_handler = new JWT_Handler(JWT_AUTH_SECRET_KEY);
    return $jwt_handler->generate_jwt_for_user($user);
}
