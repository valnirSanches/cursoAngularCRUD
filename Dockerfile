FROM node:11-alpine

WORKDIR /node-app

ENV USER_DB ""
ENV PASSWORD_DB ""

COPY package.json .

RUN npm install 
RUN npm install nodemon -g 


COPY . . 

EXPOSE 9000

CMD [ "sh", "verifica.sh" ]