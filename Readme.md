# Node-Docker-RestApi Demo

![picture alt](views/img/docker-node.jpeg)

This is a demo with **Nodejs** - **REST-API** - **Docker**. Kindly check other branches for individual features.

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

[View this image on Hub.Docker.Com](https://hub.docker.com/r/nicks9188/node-docker-restapi)
