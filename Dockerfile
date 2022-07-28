FROM node:16
WORKDIR /Movies-Library
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm","start"]
EXPOSE 3001