FROM node:latest

LABEL author="Mattia Sinisi"

WORKDIR /usr/src/chat

COPY package*.json ./

RUN npm install
RUN npm run build

RUN npm ci --only=production

COPY . .

CMD [ "npm", "start" ]
