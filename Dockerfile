FROM node:14-alpine as builder
COPY . .
RUN yarn
ENV NODE_ENV=production
ENTRYPOINT ["node", "./src/index.js"]
