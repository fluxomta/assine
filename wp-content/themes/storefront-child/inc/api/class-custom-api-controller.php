<?php

class Custom_API_Controller {

    // Método para registrar as rotas
    public function register_routes() {
        add_action('rest_api_init', function () {
            register_rest_route('custom/v1', '/login', array(
                'methods' => 'POST',
                'callback' => array($this, 'custom_login'),
            ));

            register_rest_route('custom/v1', '/user-data', array(
                'methods' => 'GET',
                'callback' => array($this, 'get_user_data'),
                'permission_callback' => function () {
                    return is_user_logged_in();
                }
            ));

            register_rest_route('custom/v1', '/edit-account', array(
                'methods' => 'POST',
                'callback' => array($this, 'custom_edit_account'),
                'permission_callback' => function () {
                    return is_user_logged_in();
                }
            ));

            register_rest_route('custom/v1', '/edit-address', array(
                'methods' => 'POST',
                'callback' => array($this, 'custom_edit_address'),
                'permission_callback' => function () {
                    return is_user_logged_in();
                }
            ));
        });
    }

    // Método para login do usuário
    public function custom_login(WP_REST_Request $request) {
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

        $token = $this->generate_jwt_for_user($user);

        if (is_wp_error($token)) {
            return $token;
        }

        return rest_ensure_response(array(
            'token' => $token,
            'user_data' => $this->get_formatted_user_data($user)
        ));
    }

    // Método para obter dados do usuário
    public function get_user_data(WP_REST_Request $request) {
        $user = wp_get_current_user();

        if (empty($user->ID)) {
            return new WP_Error('no_user', 'Usuário não encontrado', array('status' => 404));
        }

        return rest_ensure_response($this->get_formatted_user_data($user));
    }

    // Método para editar a conta do usuário
    public function custom_edit_account(WP_REST_Request $request) {
        $user_id = get_current_user_id();

        if (!$user_id) {
            return new WP_Error('no_user', 'Usuário não autenticado.', array('status' => 401));
        }

        $parameters = $request->get_json_params();
        $updated_user_id = $this->update_user_profile($user_id, $parameters);

        if (is_wp_error($updated_user_id)) {
            return $updated_user_id;
        }

        $user = get_userdata($user_id);
        $token = $this->generate_jwt_for_user($user);

        return rest_ensure_response(array(
            'message' => 'Dados pessoais atualizados com sucesso.',
            'token' => $token,
            'user_data' => $this->get_formatted_user_data($user)
        ));
    }

    // Método para editar o endereço do usuário
    public function custom_edit_address(WP_REST_Request $request) {
        $user_id = get_current_user_id();

        if (!$user_id) {
            return new WP_Error('no_user', 'Usuário não autenticado.', array('status' => 401));
        }

        $parameters = $request->get_json_params();
        $this->update_user_address($user_id, $parameters);

        $user = get_userdata($user_id);
        $token = $this->generate_jwt_for_user($user);

        return rest_ensure_response(array(
            'message' => 'Endereço atualizado com sucesso.',
            'token' => $token,
            'user_data' => $this->get_formatted_user_data($user)
        ));
    }

    // Método para formatar os dados do usuário
    private function get_formatted_user_data($user) {
        return array(
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
    }

    // Método para atualizar o perfil do usuário
    private function update_user_profile($user_id, $parameters) {
        $userdata = array(
            'ID' => $user_id,
            'first_name' => sanitize_text_field($parameters['first_name']),
            'last_name' => sanitize_text_field($parameters['last_name']),
            'user_email' => sanitize_email($parameters['email']),
        );

        $updated_user_id = wp_update_user($userdata);

        if (!is_wp_error($updated_user_id)) {
            update_user_meta($user_id, 'billing_first_name', sanitize_text_field($parameters['billing_first_name']));
            update_user_meta($user_id, 'billing_last_name', sanitize_text_field($parameters['billing_last_name']));
            update_user_meta($user_id, 'billing_company', sanitize_text_field($parameters['company']));
            update_user_meta($user_id, 'billing_persontype', sanitize_text_field($parameters['billing_persontype']));
            update_user_meta($user_id, 'billing_cpf', sanitize_text_field($parameters['billing_cpf']));
            update_user_meta($user_id, 'billing_cnpj', sanitize_text_field($parameters['billing_cnpj']));
        }

        return $updated_user_id;
    }

    // Método para atualizar o endereço do usuário
    private function update_user_address($user_id, $parameters) {
        update_user_meta($user_id, 'billing_address_1', sanitize_text_field($parameters['billing_address_1']));
        update_user_meta($user_id, 'billing_address_2', sanitize_text_field($parameters['billing_address_2']));
        update_user_meta($user_id, 'billing_city', sanitize_text_field($parameters['billing_city']));
        update_user_meta($user_id, 'billing_state', sanitize_text_field($parameters['billing_state']));
        update_user_meta($user_id, 'billing_postcode', sanitize_text_field($parameters['billing_postcode']));
        update_user_meta($user_id, 'billing_neighborhood', sanitize_text_field($parameters['billing_neighborhood']));
        update_user_meta($user_id, 'billing_number', sanitize_text_field($parameters['billing_number']));
    }

    // Método para gerar o JWT para o usuário
    private function generate_jwt_for_user($user) {
        return generate_jwt_for_user($user);
    }
}

// Instanciando e registrando as rotas
$custom_api_controller = new Custom_API_Controller();
$custom_api_controller->register_routes();
