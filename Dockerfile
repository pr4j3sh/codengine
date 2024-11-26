FROM pr4j3sh/codenegine-core:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=5000
ENV HOSTNAME=0.0.0.0
ENV ORIGINS=http://${HOSTNAME}:${PORT}

EXPOSE 5000

CMD ["npm", "start"]