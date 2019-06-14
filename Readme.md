# Node-Docker-RestApi Demo

Steps:

* Create `app.js`
* `npm init` within root directory. This will create package.json
* `npm install --save express' installing the dependencies.
* If we go to our package.json, we will see that the dependency has been added.
* In ouder to get this running, have to add `start` command to our script in package.json.
* To test our work, got to console and type `npm start`.
* To test it with docker, have to add Dockerfile.
* Build our docker image: `docker build -t node-docker-restapi .`
* Run our container: `docker run -it -p 9000:3000 node-docker-restapi` 9000 is the port on local machine(host port), 3000 is the port we have defined in our app (control port).
* Now go to `http://<ip_address>:9000/` to check.
* To run our container in detached mode: `docker run -d -p 9000:3000 node-docker-restapi`

Now we have successfully dockerized nodejs application.

## To restart node automatically

* Go to package.json and change the start command from `nodapp.js` to 'nodemon app.js'
* `npm install --save nodemon` to install nodemon dependency
* If there is error "npm is not recognized", run `npm install -g nodemon` to install nodemon globally
* From Console: `npm run start`
* Now we have made our changes locally, output will appear on port 3000 only as of now.
* Go to package.json and verify that nodemon has been added under dependency
* Build the image `docker build -t node-docker-restapi:1 .`
* `.` specifies to build the image within currect directory
* Verify: `docker ps`
* Run as a Container:
    * In interactive mode: `docker run -it -p 9000:3000 node-docker-restapi`
    * In detached mode: `docker run -d -p 9000:3000 node-docker-restapi`

## To run this code locally

* git clone `https://github.com/nicks9188/nodedemo.git`
* `npm install`
* `npm start`
