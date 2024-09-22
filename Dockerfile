FROM wordpress:latest

# Instala git
RUN apt-get update && apt-get install -y git

# Clona o repositório com o token de acesso
ARG GIT_PAT
RUN git clone https://${GIT_PAT}@github.com/fluxomta/assine.git /tmp/assine

# Cria a pasta wp-content, se não existir
RUN mkdir -p /var/www/html/wp-content

# Copia apenas os plugins e temas
RUN cp -r /tmp/assine/wp-content/plugins /var/www/html/wp-content/plugins
RUN cp -r /tmp/assine/wp-content/themes /var/www/html/wp-content/themes

# Remove o repositório clonado para limpar espaço
RUN rm -rf /tmp/assine

# Ajusta permissões
RUN chown -R www-data:www-data /var/www/html/wp-content
