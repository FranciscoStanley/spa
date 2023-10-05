
FROM alpine:3.17

ENV NODE_VERSION 18.16.0

WORKDIR /usr/spa-consulta-medicamentos
ADD ./docker-entrypoint-dev.sh /usr/spa-consulta-medicamentos
RUN chmod +x /usr/spa-consulta-medicamentos/docker-entrypoint-dev.sh
RUN chmod -R 777 /usr/spa-consulta-medicamentos

COPY package.json ./
RUN apk add --update nodejs npm

COPY . .

EXPOSE 3000

CMD ["/bin/sh","/usr/spa-consulta-medicamentos/docker-entrypoint-dev.sh"]
