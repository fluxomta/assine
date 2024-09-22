<?php

class JWT_Handler {
    
    private $secret;

    public function __construct($secret) {
        $this->secret = $secret;
    }

    private function base64_url_encode($data) {
        return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
    }

    public function jwt_encode($payload) {
        $header = $this->base64_url_encode(json_encode(['typ' => 'JWT', 'alg' => 'HS256']));
        $payload = $this->base64_url_encode(json_encode($payload));
        $signature = $this->base64_url_encode(hash_hmac('sha256', "$header.$payload", $this->secret, true));
        return "$header.$payload.$signature";
    }

    public function generate_jwt_for_user($user) {
        if (!($user instanceof WP_User)) {
            return new WP_Error('invalid_user', 'Usuário inválido.', array('status' => 400));
        }

       
