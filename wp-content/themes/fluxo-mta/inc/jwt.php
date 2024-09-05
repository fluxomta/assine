<?php

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
// Autenticação JWT
// ==========================================
function custom_jwt_authenticate($user, $username, $password) {
    if ($username && $password) {
        $user = wp_authenticate($username, $password);
        if (is_wp_error($user)) {
            return $user;
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

    return null;
}