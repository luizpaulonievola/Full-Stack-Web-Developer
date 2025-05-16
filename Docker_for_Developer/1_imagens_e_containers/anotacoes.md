# **Como construir a imagem **
$ docker build .

❯ docker build .
[+] Building 4.2s (10/10) FINISHED                                                                                                                                                                                docker:default
 => [internal] load build definition from Dockerfile                                                                                                                                                                        0.0s
 => => transferring dockerfile: 321B                                                                                                                                                                                        0.0s
 => [internal] load metadata for docker.io/library/node:latest                                                                                                                                                              0.0s
 => [internal] load .dockerignore                                                                                                                                                                                           0.0s
 => => transferring context: 2B                                                                                                                                                                                             0.0s
 => [1/5] FROM docker.io/library/node:latest                                                                                                                                                                                0.2s
 => [internal] load build context                                                                                                                                                                                           0.2s
 => => transferring context: 2.34MB                                                                                                                                                                                         0.1s
 => [2/5] WORKDIR /app                                                                                                                                                                                                      0.1s
 => [3/5] COPY package*.json .                                                                                                                                                                                              0.0s
 => [4/5] RUN npm install                                                                                                                                                                                                   3.4s
 => [5/5] COPY . .                                                                                                                                                                                                          0.2s
 => exporting to image                                                                                                                                                                                                      0.2s
 => => exporting layers                                                                                                                                                                                                     0.2s
 => => writing image sha256:5583d4f8b8dd719307061d8d9b41573fbed8f1a1091749d1a3954d3bf4ec5c64

**Executar a imagem**
$ docker run -d -p 3000:3000 --name meu_node 5583d4f8b8dd

**Verificar logs**

$docker logs -f meu_node
Executando na porta: 3000

**Recriando na porta 6565**

❯ docker build -t my_node .
[+] Building 2.5s (11/11) FINISHED                                                                                                                                                                                docker:default
 => [internal] load build definition from Dockerfile                                                                                                                                                                        0.0s
 => => transferring dockerfile: 321B                                                                                                                                                                                        0.0s
 => [internal] load metadata for docker.io/library/node:latest                                                                                                                                                              2.1s
 => [auth] library/node:pull token for registry-1.docker.io                                                                                                                                                                 0.0s
 => [internal] load .dockerignore                                                                                                                                                                                           0.0s
 => => transferring context: 2B                                                                                                                                                                                             0.0s
 => [1/5] FROM docker.io/library/node:latest@sha256:149a0b6925212aa032160fe556ea5c10963ccfbe51f4af154ce50e39783bde00                                                                                                        0.0s
 => => resolve docker.io/library/node:latest@sha256:149a0b6925212aa032160fe556ea5c10963ccfbe51f4af154ce50e39783bde00                                                                                                        0.0s
 => [internal] load build context                                                                                                                                                                                           0.0s
 => => transferring context: 44.32kB                                                                                                                                                                                        0.0s
 => CACHED [2/5] WORKDIR /app                                                                                                                                                                                               0.0s
 => CACHED [3/5] COPY package*.json .                                                                                                                                                                                       0.0s
 => CACHED [4/5] RUN npm install                                                                                                                                                                                            0.0s
 => [5/5] COPY . .                                                                                                                                                                                                          0.2s
 => exporting to image                                                                                                                                                                                                      0.1s
 => => exporting layers                                                                                                                                                                                                     0.1s
 => => writing image sha256:9b06a5b8a113a44a62bece6e0bfbc1067fd922283906f72efb9288fd47c30789                                                                                                                                0.0s
 => => naming to docker.io/library/my_node                                                                                                                                                                                  0.0s
❯ docker images
REPOSITORY                              TAG       IMAGE ID       CREATED         SIZE
my_node                                 latest    9b06a5b8a113   6 seconds ago   1.13GB

$ docker cp container1:app/app.js ./copia

docker build -t private/datascience .
