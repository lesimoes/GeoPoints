FROM node:14-alpine

RUN mkdir -p /src/api
WORKDIR /src/api

COPY package.json package-lock.json /src/api/

RUN npm ci --silent

COPY . /src/api

CMD ["npm", "run", "start"]