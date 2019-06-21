# Node-Docker-RestApi Demo

![picture alt](views/img/docker-node.jpeg)

This is a demo with **Nodejs** - **REST-API** - **Docker**. Kindly check other branches for individual features.

[![Build Status](http://13.233.15.16:8080/job/Demo/job/Docker/badge/icon)](http://13.233.15.16:8080/job/Demo/job/Docker/)

## To run this code locally

* `git clone https://github.com/nicks9188/nodedemo.git`
* `cd nodedemo`
* `npm install`
* `npm start`

## To run with docker

* `docker build -t node-docker-restapi .` e.g., `docker build -t nicks9188/node-docker-restapi:v1 .`
* `docker run -d -p <your_port_number>:3000 node-docker-restapi` e.g. `docker run --name node-docker-restapi -p 9000:3000 -d nicks9188/node-docker-restapi:v1`
* `docker ps` to verify.
* `docker logs <container_id>` to get logs
* Now go to `http://<ip_address>:<your_port_number>/` to check.
* To stop: `docker stop <container_id or container_name>`. E.g. `docker stop node-docker-restapi`

Now we have successfully dockerized our nodejs application. :thumbsup: :metal:

## Pushing our image to docker hub

An account is necessary in dockerhub if want to push own image. Once we push our image, we can use it again and again.

* `docker login`
* `docker push <image_name>:<tag>` e.g., `docker push nicks9188/node-docker-restapi:v1`
* Now go `https://hub.docker.com/<your_account>` to check.
* To use this pushed image: `docker pull <dockerhub_username>/<image_name>:<tag>` e.g. `docker pull nicks9188/node-docker-restapi:v1`
* To use this image again: `docker run --name <give_it_a_name> -p <your_port_no>:3000 -d nicks9188/node-docker-restapi:v1`

**Tips**:

* Don't forget to open respective port in your host machine.
* To clear everything use `docker system prune -a`
* Remember to stop container before removing everything.

## Conclusion

We created a _RESTApi_ app with _Node.js_. Created a new _Docker_ image for this app. Pushed this image to _Docker Hub_ for future use and We used our newely created image as a container.

From there, we are able to destroy our image and container and recreate them using our Docker Hub repository.

[View this image on Hub.Docker.Com](https://hub.docker.com/r/nicks9188/node-docker-restapi) | If you liked this, give it a :star:
