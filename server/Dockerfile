FROM node:16
WORKDIR /app

COPY ./src /app
COPY ./package.json  /

RUN npm install
EXPOSE 8080

ENTRYPOINT [ "npm" ]
CMD [ "start" ]