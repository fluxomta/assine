# Use a imagem oficial do WordPress como base
FROM wordpress:latest

# Instala git para clonar o repositório
RUN apt-get update && apt-get install -y git

# Define um argumento de build para o token de acesso do GitHub
ARG GIT_PAT

# Clona o repositório no diretório temporário
RUN git clone https://${GIT_PAT}@github.com/fluxomta/assine.git /tmp/assine

# Remove a pasta wp-content padrão
RUN rm -rf /var/www/html/wp-content

# Copia a wp-content do repositório para o diretório do WordPress
RUN cp -r /tmp/assine/wp-content /var/www/html/wp-content

# Ajusta as permissões
RUN chown -R www-data:www-data /var/www/html/wp-content

# Limpa o diretório temporário
RUN rm -rf /tmp/assine
