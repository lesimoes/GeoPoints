FROM node:14-alpine

RUN mkdir -p /src/front
WORKDIR /src/front

COPY package.json package-lock.json /src/front/

RUN npm ci --silent

COPY . /src/front

CMD ["npm", "run", "start"]