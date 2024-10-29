# Usa la imagen oficial de Nginx
FROM nginx:alpine

# Copia los archivos de tu aplicación al directorio de Nginx
COPY . /usr/share/nginx/html

# Exponer el puerto en el que Nginx escuchará
EXPOSE 80
