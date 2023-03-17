FROM node:16

RUN mkdir -p /home/mf/FastTrevel/finished/node_modules && chown -R node:node /home/mf/FastTrevel/finished

WORKDIR /home/mf/FastTrevel/finished

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "node", "index.js" ]
