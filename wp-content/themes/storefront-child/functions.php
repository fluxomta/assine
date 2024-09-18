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

    // Verificar se o usuário tem assinaturas ativas e obter a data da próxima expiração
    $subscriptions = wcs_get_users_subscriptions($user->ID);
    $has_active_subscription = false;
    $next_expiration_date = null;

    foreach ($subscriptions as $subscription) {
        if ($subscription->has_status('active')) {
            $has_active_subscription = true;
            $next_expiration_date = $subscription->get_date('next_payment');
            break;
        }
    }

    // Buscar os metadados necessários
    $nivel_assinatura = get_user_meta($user->ID, 'nivel_assinatura', true);
    $speed_flow = get_user_meta($user->ID, 'speed_flow', true);
    $liquidity_tracker = get_user_meta($user->ID, 'liquidity_tracker', true);
    $master_flow = get_user_meta($user->ID, 'master_flow', true);
    $target_vision = get_user_meta($user->ID, 'target_vision', true);

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
                'has_active_subscription' => $has_active_subscription,
                'next_expiration_date' => $next_expiration_date,
                'nivel_assinatura' => $nivel_assinatura, 
                'speed_flow' => $speed_flow, 
                'liquidity_tracker' => $liquidity_tracker, 
                'master_flow' => $master_flow, 
                'target_vision' => $target_vision, 
            ),
        ),
    );

    $jwt = jwt_encode($token, JWT_AUTH_SECRET_KEY);

    return $jwt;
}

// Função para criar o cookie JWT em qualquer login bem-sucedido
function set_jwt_cookie_on_login($user_login, $user) {
    // Gere o token JWT para o usuário que acabou de fazer login
    $token = generate_jwt_for_user($user);

    // Verifique se houve um erro ao gerar o token JWT
    if (is_wp_error($token)) {
        error_log('Erro ao gerar JWT: ' . $token->get_error_message());
        return;
    }

    // Defina o cookie com o JWT para o domínio principal e todos os subdomínios
    setcookie('jwt_token', $token, time() + (7 * DAY_IN_SECONDS), '/', '.fluxomta.com', true, false); // Defina 'httponly' como false
}
add_action('wp_login', 'set_jwt_cookie_on_login', 10, 2);


// Adiciona o script para armazenar o token JWT no localStorage
function add_jwt_localstorage_script() {
    if (is_user_logged_in() && isset($_COOKIE['jwt_token'])) {
        ?>
        <script type="text/javascript">
            document.addEventListener('DOMContentLoaded', function () {
                const jwtToken = "<?php echo esc_js($_COOKIE['jwt_token']); ?>";
                if (jwtToken) {
                    localStorage.setItem('token', jwtToken);
                    console.log('Token JWT armazenado no localStorage');
                }
            });
        </script>
        <?php
    }
}
add_action('wp_footer', 'add_jwt_localstorage_script');

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

    // Retorne a resposta do REST com o token JWT e detalhes do usuário
    return rest_ensure_response(array(
        'token' => $token,
        'user_email' => $user->user_email,
        'user_nicename' => $user->user_nicename,
        'user_display_name' => $user->display_name,
        'redirect_url' => home_url() // Redireciona para a home após login, se necessário
    ));
}

// ==========================================
// Endpoint Customizado para Verificar o Status de Login
// ==========================================
add_action('rest_api_init', function () {
    register_rest_route('custom/v1', '/check-login', array(
        'methods' => 'GET',
        'callback' => 'check_user_login_status',
        'permission_callback' => '__return_true' // Permitir que qualquer um acesse o endpoint
    ));
});

function check_user_login_status(WP_REST_Request $request) {
    // Verifica se o cookie de login está presente
    if (isset($_COOKIE['jwt_token'])) {
        $user = wp_get_current_user();

        // Verifica se o usuário é autenticado
        if ($user && $user->ID) {
            // Gerar o token JWT para o usuário autenticado
            $token = generate_jwt_for_user($user);

            if (is_wp_error($token)) {
                return new WP_Error('jwt_generation_error', 'Erro ao gerar token JWT.', array('status' => 500));
            }

            return rest_ensure_response(array(
                'logged_in' => true,
                'user_id' => $user->ID,
                'user_email' => $user->user_email,
                'message' => 'Usuário autenticado com sucesso.',
                'cookies' => $_COOKIE
            ));
        } else {
            // Cookie presente, mas o WordPress não autenticou o usuário
            return rest_ensure_response(array(
                'logged_in' => false,
                'message' => 'Cookie de login presente, mas o WordPress não autenticou o usuário.',
                'cookies' => $_COOKIE
            ));
        }
    } else {
        // Cookie de login não presente
        return rest_ensure_response(array(
            'logged_in' => false,
            'message' => 'Cookie de login não detectado.',
            'cookies' => $_COOKIE
        ));
    }
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

    // Verificar se o usuário tem assinaturas ativas e obter a data da próxima expiração
    $subscriptions = wcs_get_users_subscriptions($user->ID);
    $has_active_subscription = false;
    $next_expiration_date = null;

    foreach ($subscriptions as $subscription) {
        if ($subscription->has_status('active')) {
            $has_active_subscription = true;
            $next_expiration_date = $subscription->get_date('next_payment');
            break;
        }
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
            'has_active_subscription' => $has_active_subscription,
            'next_expiration_date' => $next_expiration_date,
            'nivel_assinatura' => get_user_meta($user->ID, 'nivel_assinatura', true),
            'speed_flow' => get_user_meta($user->ID, 'speed_flow', true),
            'liquidity_tracker' => get_user_meta($user->ID, 'liquidity_tracker', true),
            'master_flow' => get_user_meta($user->ID, 'master_flow', true),
            'target_vision' => get_user_meta($user->ID, 'target_vision', true),
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

// ==========================================
// Função para salvar os campos de CPF, CNPJ, Tipo de Pessoa, Número, Complemento e Bairro via API REST
// ==========================================
function save_custom_billing_fields_via_api($customer, $data) {
    $user_id = $customer->get_id();

    // Adicionar logs para depuração
    error_log('Saving custom billing fields for user ID: ' . $user_id);
    error_log('Received billing data: ' . print_r($data['billing'], true));

    // Verificar se o campo 'billing' existe e é um array
    if (isset($data['billing']) && is_array($data['billing'])) {

        // Salvar CPF se estiver presente nos dados enviados
        if (!empty($data['billing']['billing_cpf'])) {
            update_user_meta($user_id, 'billing_cpf', sanitize_text_field($data['billing']['billing_cpf']));
        }

        // Salvar CNPJ se estiver presente nos dados enviados
        if (!empty($data['billing']['billing_cnpj'])) {
            update_user_meta($user_id, 'billing_cnpj', sanitize_text_field($data['billing']['billing_cnpj']));
        }

        // Salvar Tipo de Pessoa se estiver presente nos dados enviados
        if (!empty($data['billing']['billing_persontype'])) {
            update_user_meta($user_id, 'billing_persontype', sanitize_text_field($data['billing']['billing_persontype']));
        }
        
        // Salvar Número, Complemento e Bairro
        if( isset( $data['billing']['billing_number'] ) ) {
            update_user_meta( $user_id, 'billing_number', sanitize_text_field( $data['billing']['billing_number'] ) );
        }

        if( isset( $data['billing']['billing_address_2'] ) ) {
            update_user_meta( $user_id, 'billing_address_2', sanitize_text_field( $data['billing']['billing_address_2'] ) );
        }

        if( isset( $data['billing']['billing_neighborhood'] ) ) {
            update_user_meta( $user_id, 'billing_neighborhood', sanitize_text_field( $data['billing']['billing_neighborhood'] ) );
        }
    }
}
add_action('woocommerce_rest_customer_update', 'save_custom_billing_fields_via_api', 10, 2);

