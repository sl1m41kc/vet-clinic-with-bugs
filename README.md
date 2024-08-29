# Разворачивание на сервере
1. В папке `docker` создать `.env.production`
2. Теперь нужно запустить контейнер с `sertbot` и `nginx`. В папке `docker` запустить файл `docker-compose.init.yml`
`docker compose -f docker-compose.init.yml up`
3. После этого нужно удалить созданные временные контейнеры `certbot` и `nginx`.
`docker system prune -a`
1. Теперь можно запустить основной compose. Но так как доступ к данным контейнеров может быть огарничен, нужно использовать команду `sudo`
`sudo docker compose up`
