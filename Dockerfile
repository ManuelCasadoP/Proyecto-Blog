FROM node:16

EXPOSE 8080

WORKDIR /usr/src/app/
COPY . .

WORKDIR /usr/src/app/frontend/blog
RUN npm install
RUN npm run build
RUN rm .gitignore package.json package-lock.json public README.md src node_modules -rf

WORKDIR /usr/src/app/backend
RUN npm install --omit=dev
RUN rm .gitignore package.json package-lock.json Insomnia_2022-05-10.json node_modules .env -rf

WORKDIR /usr/src/app
RUN rm deploy documentation -rf

ENTRYPOINT [ "npm", "start" ]