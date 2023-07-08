FROM node:18-slim

WORKDIR /nodejs/app

COPY package.json ./
RUN npm install
COPY . .

ENV SERVER_PORT=8080

EXPOSE 8080

CMD ["node", "src/main.js"]
