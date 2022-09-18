FROM node:17-alpine

WORKDIR /app
# or /HOBBYSPOT

COPY . .
# or '' COPY . /app" need to put everything into app folder?

RUN npm install
# run inside the working directory in the WORKDIR ?
# RUN node app.js
CMD ["node", "app.js"]
# spins it up

