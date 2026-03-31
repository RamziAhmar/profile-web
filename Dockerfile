FROM nginx:alpine
# Menyalin semua file di direktori saat ini ke folder nginx
COPY . /usr/share/nginx/html
EXPOSE 80
