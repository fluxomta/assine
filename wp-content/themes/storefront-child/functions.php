<?php

// Oculta a Admin Bar para todos os usuários no frontend
add_filter('show_admin_bar', '__return_false');

// ==========================================
// Configuração de CORS
// ==========================================
function add_cors_http_header() {
    $allowed_origins = [
        'https://indicadores.fluxomta.com',
        'http://localhost:3000',
        'https://develop-indicadores.server.fluxomta.com',
        'https://dashboard.server.fluxomta.com',
        'https://dashboard.fluxomta.com',
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
function storefront_child_enqueue_styles() {
    wp_enqueue_style('storefront-style', get_template_directory_uri() . '/style.css');
    $version = filemtime(get_stylesheet_directory() . '/assets/css/build.css');
    wp_enqueue_style('storefront-child-style', get_stylesheet_directory_uri() . '/assets/css/build.css', array('storefront-style'), $version);
}
add_action('wp_enqueue_scripts', 'storefront_child_enqueue_styles');

// ==========================================
// Funções para manipulação de JWT
// ==========================================
function base64_url_encode($data) {
    return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
}

function jwt_encode($payload, $secret) {
    $header = base64_url_encode(json_encode(['typ' => 'JWT', 'alg' => 'HS256']));
    $payload = base64_url_encode(json_encode($payload));
    $signature = base64_url_encode(hash_hmac('sha256', "$header.$payload", $secret, true));
    return "$header.$payload.$signature";
}

// ==========================================
// Gerar JWT para Usuário
// ==========================================
function generate_jwt_for_user($user) {
    // Verificar se o usuário é um objeto válido
    if (!($user instanceof WP_User)) {
        return new WP_Error('invalid_user', 'Usuário inválido.', array('status' => 400));
    }

    // Buscar os metadados necessários
    $nivel_assinatura = get_user_meta($user->ID, 'nivel_assinatura', true);
    $sku_01 = get_user_meta($user->ID, 'sku_01', true);
    $sku_02 = get_user_meta($user->ID, 'sku_02', true);
    $sku_03 = get_user_meta($user->ID, 'sku_03', true);
    $sku_04 = get_user_meta($user->ID, 'sku_04', true);
    $sku_05 = get_user_meta($user->ID, 'sku_05', true);
    $sku_06 = get_user_meta($user->ID, 'sku_06', true);
    $sku_07 = get_user_meta($user->ID, 'sku_07', true);

    // Gerar o token JWT com informações adicionais
    $token = array(
        'iss' => get_bloginfo('url'), // Emissor do token
        'iat' => time(), // Emitido em
        'nbf' => time(), // Não antes de
        'exp' => time() + (7 * DAY_IN_SECONDS), // Expira em 7 dias
        'data' => array(
            'user' => array(
                'id' => $user->ID,
                'username' => $user->user_login,
                'email' => $user->user_email,
                'nivel_assinatura' => $nivel_assinatura,
                'sku_01' => $sku_01,
                'sku_02' => $sku_02,
                'sku_03' => $sku_03,
                'sku_04' => $sku_04,
                'sku_05' => $sku_05,
                'sku_06' => $sku_06,
                'sku_07' => $sku_07,
            ),
        ),
    );

    $jwt = jwt_encode($token, JWT_AUTH_SECRET_KEY);

    return $jwt;
}

// ==========================================
// Endpoint Customizado para Login
// ==========================================
add_action('rest_api_init', function () {
    register_rest_route('custom/v1', '/login', array(
        'methods' => 'POST',
        'callback' => 'custom_login',
    ));
});

function custom_login(WP_REST_Request $request) {
    $parameters = $request->get_json_params();
    $username = sanitize_text_field($parameters['username']);
    $password = sanitize_text_field($parameters['password']);

    if (empty($username) || empty($password)) {
        return new WP_Error('empty_fields', 'Username and password are required.', array('status' => 400));
    }

    $user = wp_authenticate($username, $password);

    if (is_wp_error($user)) {
        return new WP_Error('invalid_credentials', 'Invalid username or password.', array('status' => 403));
    }

    // Gere o token JWT
    $token = generate_jwt_for_user($user);

    if (is_wp_error($token)) {
        return $token;
    }

    // Obter as informações do usuário
    $user_data = array(
        'id' => $user->ID,
        'username' => $user->user_login,
        'email' => $user->user_email,
        'first_name' => get_user_meta($user->ID, 'billing_first_name', true),
        'last_name' => get_user_meta($user->ID, 'billing_last_name', true),
        'billing_cpf' => get_user_meta($user->ID, 'billing_cpf', true),
        'billing_cnpj' => get_user_meta($user->ID, 'billing_cnpj', true),
        'billing_persontype' => get_user_meta($user->ID, 'billing_persontype', true),
        'avatar_url' => get_avatar_url($user->ID),
        'role' => $user->roles[0],
        'indicadores' => array(
            'nivel_assinatura' => get_user_meta($user->ID, 'nivel_assinatura', true),
            'sku_01' => get_user_meta($user->ID, 'sku_01', true),
            'sku_02' => get_user_meta($user->ID, 'sku_02', true),
            'sku_03' => get_user_meta($user->ID, 'sku_03', true),
            'sku_04' => get_user_meta($user->ID, 'sku_04', true),
            'sku_05' => get_user_meta($user->ID, 'sku_05', true),
            'sku_06' => get_user_meta($user->ID, 'sku_06', true),
            'sku_07' => get_user_meta($user->ID, 'sku_07', true),
        ),
    );

    // Retorne a resposta do REST com o token JWT e detalhes do usuário
    return rest_ensure_response(array(
        'token' => $token,
        'user_email' => $user->user_email,
        'user_nicename' => $user->user_nicename,
        'user_display_name' => $user->display_name,
        'redirect_url' => home_url(),
        'user_data' => $user_data // Enviando as informações do usuário separadas
    ));
}


// ==========================================
// Registro da Rota para Retorno de dados da Conta de Usuário
// ==========================================
add_action('rest_api_init', function () {
    register_rest_route('custom/v1', '/user-data', array(
        'methods' => 'GET',
        'callback' => 'get_user_data',
        'permission_callback' => function () {
            return is_user_logged_in();
        }
    ));
});

function get_user_data(WP_REST_Request $request) {
    // Obter o usuário atualmente logado
    $user = wp_get_current_user();

    if (empty($user->ID)) {
        return new WP_Error('no_user', 'Usuário não encontrado', array('status' => 404));
    }

    $user_data = array(
        'avatar_url' => get_avatar_url($user->ID),
        'billing' => array(
            'first_name' => get_user_meta($user->ID, 'billing_first_name', true),
            'last_name' => get_user_meta($user->ID, 'billing_last_name', true),
            'company' => get_user_meta($user->ID, 'billing_company', true),
            'address_1' => get_user_meta($user->ID, 'billing_address_1', true),
            'address_2' => get_user_meta($user->ID, 'billing_address_2', true),
            'city' => get_user_meta($user->ID, 'billing_city', true),
            'state' => get_user_meta($user->ID, 'billing_state', true),
            'postcode' => get_user_meta($user->ID, 'billing_postcode', true),
            'country' => get_user_meta($user->ID, 'billing_country', true),
            'email' => $user->user_email,
            'phone' => get_user_meta($user->ID, 'billing_phone', true),
            'neighborhood' => get_user_meta($user->ID, 'billing_neighborhood', true), 
            'number' => get_user_meta($user->ID, 'billing_number', true), 
        ),
        'billing_cnpj' => get_user_meta($user->ID, 'billing_cnpj', true),
        'billing_cpf' => get_user_meta($user->ID, 'billing_cpf', true),
        'billing_persontype' => get_user_meta($user->ID, 'billing_persontype', true),
        'email' => $user->user_email,
        'first_name' => get_user_meta($user->ID, 'billing_first_name', true),
        'id' => $user->ID,
        'indicadores' => array(
            'nivel_assinatura' => get_user_meta($user->ID, 'nivel_assinatura', true),
            'sku_01' => get_user_meta($user->ID, 'sku_01', true),
            'sku_02' => get_user_meta($user->ID, 'sku_02', true),
            'sku_03' => get_user_meta($user->ID, 'sku_03', true),
            'sku_04' => get_user_meta($user->ID, 'sku_04', true),
            'sku_05' => get_user_meta($user->ID, 'sku_05', true),
            'sku_06' => get_user_meta($user->ID, 'sku_06', true),
            'sku_07' => get_user_meta($user->ID, 'sku_07', true),
        ),
        'last_name' => get_user_meta($user->ID, 'billing_last_name', true),
        'role' => $user->roles[0],
        'username' => $user->user_login,
    );

    return $user_data;
}

// ==========================================
// Registro da Rota para Editar Conta de Usuário
// ==========================================
add_action('rest_api_init', function () {
    register_rest_route('custom/v1', '/edit-account', array(
        'methods' => 'POST',
        'callback' => 'custom_edit_account',
        'permission_callback' => function () {
            return is_user_logged_in();
        }
    ));
});

function custom_edit_account(WP_REST_Request $request) {
    $user_id = get_current_user_id();

    if (!$user_id) {
        return new WP_Error('no_user', 'Usuário não autenticado.', array('status' => 401));
    }

    $parameters = $request->get_json_params();

    // Atualizar dados de perfil do usuário
    $first_name = sanitize_text_field($parameters['first_name']);
    $last_name = sanitize_text_field($parameters['last_name']);
    $email = sanitize_email($parameters['email']);

    // Atualizar dados de billing
    $billing_first_name = sanitize_text_field($parameters['billing_first_name']);
    $billing_last_name = sanitize_text_field($parameters['billing_last_name']);
    $billing_company = sanitize_text_field($parameters['company']);
    $billing_persontype = sanitize_text_field($parameters['billing_persontype']);
    $billing_cpf = sanitize_text_field($parameters['billing_cpf']);
    $billing_cnpj = sanitize_text_field($parameters['billing_cnpj']);

    // Atualizar dados do usuário
    $userdata = array(
        'ID' => $user_id,
        'first_name' => $first_name,
        'last_name' => $last_name,
        'user_email' => $email,
    );

    $updated_user_id = wp_update_user($userdata);

    if (is_wp_error($updated_user_id)) {
        return new WP_Error('update_failed', 'Falha ao atualizar os dados do usuário.', array('status' => 500));
    }

    // Atualizar metadados de billing
    update_user_meta($user_id, 'billing_first_name', $billing_first_name ? $billing_first_name : $first_name);
    update_user_meta($user_id, 'billing_last_name', $billing_last_name ? $billing_last_name : $last_name);
    update_user_meta($user_id, 'billing_company', $billing_company);
    update_user_meta($user_id, 'billing_persontype', $billing_persontype);
    update_user_meta($user_id, 'billing_cpf', $billing_cpf);
    update_user_meta($user_id, 'billing_cnpj', $billing_cnpj);

    // Regenerar o token JWT com as novas informações
    $user = get_userdata($user_id);
    $token = generate_jwt_for_user($user);

    return rest_ensure_response(array(
        'message' => 'Dados pessoais atualizados com sucesso.',
        'token' => $token,
    ));
}

// ==========================================
// Registro da Rota para Editar Endereço de Usuário
// ==========================================
add_action('rest_api_init', function () {
    register_rest_route('custom/v1', '/edit-address', array(
        'methods' => 'POST',
        'callback' => 'custom_edit_address',
        'permission_callback' => function () {
            return is_user_logged_in();
        }
    ));
});

function custom_edit_address(WP_REST_Request $request) {
    $user_id = get_current_user_id();

    if (!$user_id) {
        return new WP_Error('no_user', 'Usuário não autenticado.', array('status' => 401));
    }

    $parameters = $request->get_json_params();

    // Atualizar metadados de endereço
    $billing_address_1 = sanitize_text_field($parameters['billing_address_1']);
    $billing_address_2 = sanitize_text_field($parameters['billing_address_2']);
    $billing_city = sanitize_text_field($parameters['billing_city']);
    $billing_state = sanitize_text_field($parameters['billing_state']);
    $billing_postcode = sanitize_text_field($parameters['billing_postcode']);
    $billing_neighborhood = sanitize_text_field($parameters['billing_neighborhood']);
    $billing_number = sanitize_text_field($parameters['billing_number']);

    // Atualizar metadados de endereço
    update_user_meta($user_id, 'billing_address_1', $billing_address_1);
    update_user_meta($user_id, 'billing_address_2', $billing_address_2);
    update_user_meta($user_id, 'billing_city', $billing_city);
    update_user_meta($user_id, 'billing_state', $billing_state);
    update_user_meta($user_id, 'billing_postcode', $billing_postcode);
    update_user_meta($user_id, 'billing_neighborhood', $billing_neighborhood);
    update_user_meta($user_id, 'billing_number', $billing_number);

    // Regenerar o token JWT com as novas informações
    $user = get_userdata($user_id);
    $token = generate_jwt_for_user($user);

    return rest_ensure_response(array(
        'message' => 'Endereço atualizado com sucesso.',
        'token' => $token,
    ));
}

add_action( 'wp_default_scripts', function($scripts){ if(!is_user_logged_in()) { $scripts->remove('password-strength-meter'); } return $scripts; } );


function calcular_preco_proporcional($product_id, $data_inscricao) {
    // Obter o preço original do produto
    $product = wc_get_product($product_id);
    $preco_original = $product->get_regular_price();

    // Obter o número de dias no mês atual
    $dias_no_mes = date('t', strtotime($data_inscricao));

    // Calcular o preço diário
    $preco_diario = $preco_original / $dias_no_mes;

    // Calcular o dia da inscrição
    $dia_da_inscricao = date('j', strtotime($data_inscricao));

    // Calcular o preço proporcional
    $dias_restantes = $dias_no_mes - $dia_da_inscricao + 1;
    $preco_final = $preco_diario * $dias_restantes;

    return $preco_final;
}

function atualizar_preco_no_carrinho($cart) {
    if (is_admin() && !defined('DOING_AJAX')) return;

    // Iterar pelos itens no carrinho
    foreach ($cart->get_cart() as $cart_item) {
        $product_id = $cart_item['product_id'];

        // Suponha que a data de inscrição seja a data atual (você pode ajustar conforme necessário)
        $data_inscricao = date('Y-m-d');

        // Calcular o preço proporcional
        $preco_final = calcular_preco_proporcional($product_id, $data_inscricao);

        // Aplicar o preço calculado ao produto no carrinho
        $cart_item['data']->set_price($preco_final);
    }
}

add_action('woocommerce_before_calculate_totals', 'atualizar_preco_no_carrinho', 10, 1);


function adicionar_mensagem_validade_checkout($checkout) {
    // Verificar se há itens no carrinho
    if (WC()->cart->is_empty()) {
        return;
    }

    // Iterar pelos itens no carrinho
    foreach (WC()->cart->get_cart() as $cart_item) {
        $product = wc_get_product($cart_item['product_id']);
        $preco_original = $product->get_regular_price();

        // Calcular o número de dias no mês e o dia atual
        $dias_no_mes = date('t');
        $dia_atual = date('j');
        
        // Calcular dias restantes e preço proporcional
        $dias_restantes = $dias_no_mes - $dia_atual + 1;
        $preco_diario = $preco_original / $dias_no_mes;
        $preco_proporcional = $preco_diario * $dias_restantes;

        // Gerar a mensagem de validade
        $mensagem_validade = sprintf(
            "Este produto é válido até o último dia deste mês. O valor original é R$ %s e você está pagando um valor proporcional de R$ %s referente a %s dias de uso.",
            number_format($preco_original, 2, ',', '.'),
            number_format($preco_proporcional, 2, ',', '.'),
            $dias_restantes
        );

        // Adicionar a mensagem abaixo do resumo do pedido
        echo '<tr class="cart-validade"><th colspan="2">' . $mensagem_validade . '</th></tr>';
    }
}
add_action('woocommerce_review_order_after_order_total', 'adicionar_mensagem_validade_checkout');
