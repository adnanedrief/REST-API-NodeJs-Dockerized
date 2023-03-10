FROM node:16-alpine

WORKDIR /app

COPY package*.json .

RUN npm install && npm install -g nodemon

COPY . .

CMD ["nodemon", "index.js"]
