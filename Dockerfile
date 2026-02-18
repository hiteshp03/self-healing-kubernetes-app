FROM node:18
WORKDIR /self-healing-app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "self-healing.js"]

