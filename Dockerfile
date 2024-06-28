FROM node:20-alpine

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
COPY prisma ./prisma

RUN  npm ci

COPY . .

CMD ["npm", "run", "dev:docker"]