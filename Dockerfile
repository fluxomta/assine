# Use a imagem oficial do WordPress
FROM wordpress:latest

# Copie apenas a pasta wp-content para o container
COPY wp-content /var/www/html/wp-content
