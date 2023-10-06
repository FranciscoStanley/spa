
FROM alpine:3.17

ENV NODE_VERSION 18.16.0

WORKDIR /usr/spa
ADD ./docker-entrypoint-dev.sh /usr/spa
RUN chmod +x /usr/spa/docker-entrypoint-dev.sh
RUN chmod -R 777 /usr/spa

COPY package.json ./
RUN apk add --update nodejs npm

COPY . .

EXPOSE 3000

CMD ["/bin/sh","/usr/spa/docker-entrypoint-dev.sh"]
