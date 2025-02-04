FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/templates/rs-route.conf.template
COPY dist/angular-ssr-talk/browser /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
