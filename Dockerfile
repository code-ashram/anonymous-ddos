FROM node:16.13.1-alpine AS anonymous_ddos

WORKDIR .
COPY . .

RUN npm ci

CMD ["npm", "start"]
