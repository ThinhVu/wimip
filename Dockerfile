FROM node:14-alpine as builder
COPY . .
RUN ls
ENV NODE_ENV=production
ENTRYPOINT ["/bin/sh", "-c" , "yarn && node ./src/index.js"]
