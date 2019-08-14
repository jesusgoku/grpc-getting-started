FROM node:dubnium-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 9111

CMD ["yarn", "run", "start"]
