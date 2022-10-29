On this study case, I build 3 containers (1 nginx, 2 node api's) to build a use case of reverse proxy.
Nginx is working as reverse proxy, and it redirects the http request to the correct application (RED or BLUE).

To run this study case:

docker-compose up -d --build

GET on localhost will default redirect to the RED application running internally at port 3000
GET on localhots/red will redirect to the RED application running internally at port 3000
GET on localhost/blue will redirect to the BLUE application running internally at port 3001

The nginx.conf is the file where we can map these redirections.

