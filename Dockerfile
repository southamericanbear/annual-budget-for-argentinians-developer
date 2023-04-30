FROM node:latest
WORKDIR /annual-budget-for-argentinians-developer/app
COPY package*.json ./
RUN yarn
COPY . .
RUN yarn build
EXPOSE 1990
CMD ["node", "dist/server.js"]