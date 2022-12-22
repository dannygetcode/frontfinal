FROM  node:16

WORKDIR /usr/src/app

COPY package*.json /app

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start"]