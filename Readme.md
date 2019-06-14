# Node-Docker-RestApi Demo

![picture alt](views/img/docker-node.jpeg)

This is a demo with **Nodejs** - **REST-API** - **Docker**. Kindly check other branches for individual features.

## To run this code locally

* `git clone https://github.com/nicks9188/nodedemo.git`
* `cd nodedemo`
* `npm install`
* `npm start`

## To run with docker

* `docker build -t node-docker-restapi .`
* `docker run -d -p <your_port_number>:3000 node-docker-restapi`
* `docker ps` to verify.
* `docker logs <container_id>` to get logs
* Now go to `http://<ip_address>:<your_port_number>/` to check.

Now we have successfully dockerized our nodejs application. :thumbsup: :metal:
