FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
LABEL author="Murphy" 

# Copy custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

COPY luzhoulaojiao/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]