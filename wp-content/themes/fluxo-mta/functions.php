<?php

// ==========================================
// Configuração de CORS
// ==========================================
function add_cors_http_header() {
    $allowed_origins = [
        'https://indicadores.fluxomta.com',
        'http://localhost:3000',
        'https://develop-indicadores.server.fluxomta.com',
        'https://conta.server.fluxomta.com',
        'https://conta.fluxomta.com',
        'https://assine.fluxomta.com'
    ];

    if (isset($_SERVER['HTTP_ORIGIN'])) {
        $origin = $_SERVER['HTTP_ORIGIN'];
        if (in_array($origin, $allowed_origins)) {
            header("Access-Control-Allow-Origin: $origin");
            header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
            header("Access-Control-Allow-Credentials: true");
            header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
        }
    }

    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
            header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
        }
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
            header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
        }
        exit(0);
    }
}
add_action('init', 'add_cors_http_header');

// ==========================================
// Enfileiramento de estilos do tema
// ==========================================
function fluxo_assinaturas_enqueue_styles() {
    // Enfileira o estilo do tema pai
    wp_enqueue_style('fluxo-assinaturas', get_template_directory_uri() . '/style.css');

    // Enfileira o Tailwind CSS gerado
    wp_enqueue_style('tailwindcss', get_stylesheet_directory_uri() . '/src/assets/css/tailwind.css', array(), '1.0');

    // Enfileira o JavaScript para o multi-step checkout
    wp_enqueue_script('checkout-multi-step', get_stylesheet_directory_uri() . '/src/assets/js/main.js', array('jquery'), null, true);

    // Adicionar condicional para carregar o script apenas na página de checkout
    if (is_page_template('template-checkout.php')) {
        wp_enqueue_script('checkout-multi-step');
    }
}
add_action('wp_enqueue_scripts', 'fluxo_assinaturas_enqueue_styles');

include_once('inc/jwt.php');
include_once('inc/endpoints.php');
include_once('inc/woo.php');


function disable_select2_woocommerce() {
    // Desregistrar os estilos do Select2
    wp_dequeue_style('select2');
    wp_deregister_style('select2');

    // Desregistrar os scripts do Select2
    wp_dequeue_script('selectWoo');
    wp_deregister_script('selectWoo');
}
add_action('wp_enqueue_scripts', 'disable_select2_woocommerce', 100);
