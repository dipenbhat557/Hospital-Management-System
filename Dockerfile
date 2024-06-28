FROM node

WORKDIR /app

RUN apt-get update && apt-get install -y postgresql-client

COPY package*.json ./

RUN npm install

RUN npm install -g prisma

COPY . .

COPY ./docker-entrypoint.sh ./docker-entrypoint.sh
RUN chmod +x ./docker-entrypoint.sh
ENTRYPOINT ["./docker-entrypoint.sh"]

CMD ["npm", "run", "dev"]
