FROM mysql:latest

COPY ./people.sql /docker-entrypoint-initdb.d/

ENV MYSQL_ROOT_PASSWORD=123456

EXPOSE 3306
