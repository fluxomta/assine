<?php

// Registro do Endpoint Customizado para Login
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

// Registro da Rota para Retorno de dados da Conta de Usuário
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

// Registro da Rota para Editar Conta de Usuário
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

// Registro da Rota para Editar Endereço de Usuário
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
