# FROM specifies the docker image we are using
FROM node:8

# WORKDIR specifies the directory our
# application's code will live within
WORKDIR /app

# We copy our package.json file to our
# app directory
COPY package.json /app

# We then run npm install to install
# dependencies for our application
RUN npm install

# We then copy the rest of our application
# to the app direcoty
COPY . /app

# We start our application by calling
# npm start.
CMD [ "npm", "start" ]
