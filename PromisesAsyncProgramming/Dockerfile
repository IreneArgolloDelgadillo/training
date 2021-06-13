FROM alpine 

LABEL maintainer="ireneirene892@gmail.com"

RUN apk add --update nodejs nodejs-npm

COPY . /src

WORKDIR /src

RUN npm install

RUN npm run dev

EXPOSE 8080

ENTRYPOINT ["node", "./index.js"]


