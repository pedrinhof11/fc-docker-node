FROM node:lts-alpine as builder
COPY package*.json ./
RUN npm install 


FROM node:lts-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY --from=builder node_modules node_modules
COPY . .
EXPOSE 3000
CMD ["node","app/index.js"]