FROM node:latest

WORKDIR /app
ADD . .
RUN npm install
RUN npm ci

EXPOSE 3000

CMD [ "npm", "run", "start" ]