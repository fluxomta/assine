<?php
// Define a classe responsável por gerenciar as configurações CORS
class CORS_Manager {
    private $allowed_origins;

    public function __construct($allowed_origins = array()) {
        $this->allowed_origins = $allowed_origins;
    }

    // Adiciona os cabeçalhos CORS conforme necessário
    public function add_cors_http_header() {
        if (isset($_SERVER['HTTP_ORIGIN'])) {
            $origin = $_SERVER['HTTP_ORIGIN'];
            if (in_array($origin, $this->allowed_origins) || $origin === 'null') {
                header("Access-Control-Allow-Origin: $origin");
                header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
                header("Access-Control-Allow-Credentials: true");
                header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
            }
        }

        if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
            $this->handle_preflight();
        }
    }

    // Trata a solicitação preflight para métodos e cabeçalhos permitidos
    private function handle_preflight() {
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
        header("Access-Control-Allow-Origin: *"); // Permitir qualquer origem na preflight
        exit(0);
    }
}

// Instancia a classe CORS_Manager e passa os domínios permitidos
$cors_manager = new CORS_Manager(array(
    'https://indicadores.fluxomta.com',
    'http://localhost:3000',
    'https://develop-indicadores.server.fluxomta.com',
    'https://dashboard.server.fluxomta.com',
    'https://dashboard.fluxomta.com',
    'https://assine.fluxomta.com',
    'https://assine-developer-wordpress.server.fluxomta.com',
));

// Registra a ação de inicialização para adicionar os cabeçalhos CORS
add_action('init', array($cors_manager, 'add_cors_http_header'));
