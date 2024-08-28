#!/bin/sh
certbot certonly --webroot --webroot-path=/var/www/html --email admin@axonix.ru --agree-tos --no-eff-email -d www.${DOMAIN} -d ${DOMAIN}
