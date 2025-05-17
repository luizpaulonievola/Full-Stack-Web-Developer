docker build -t phpmessages .
[+] Building 1.1s (9/9) FINISHED                                                                      docker:default
 => [internal] load build definition from Dockerfile                                                            0.0s
 => => transferring dockerfile: 164B                                                                            0.0s
 => [internal] load metadata for docker.io/library/php:8.3-apache                                               0.6s
 => [internal] load .dockerignore                                                                               0.0s
 => => transferring context: 2B                                                                                 0.0s
 => [1/4] FROM docker.io/library/php:8.3-apache@sha256:05cbceb308ee8efab8f148278254659f0dc5a3c0842bfe404fb4318  0.0s
 => [internal] load build context                                                                               0.0s
 => => transferring context: 281B                                                                               0.0s
 => CACHED [2/4] WORKDIR /var/www/html                                                                          0.0s
 => [3/4] COPY . .                                                                                              0.0s
 => [4/4] RUN chown -R www-data:www-data /var/www                                                               0.2s
 => exporting to image                                                                                          0.1s
 => => exporting layers                                                                                         0.1s
 => => writing image sha256:3ed4196a07a0e49b632cc940b497384de68377a3dbb529881aa795efd0422456                    0.0s
 => => naming to docker.io/library/phpmessages                    

 docker logs -f 253f7246e5d0
Found existing alias for "docker". You should use: "d"
AH00558: apache2: Could not reliably determine the server's fully qualified domain name, using 172.17.0.2. Set the 'ServerName' directive globally to suppress this message
AH00558: apache2: Could not reliably determine the server's fully qualified domain name, using 172.17.0.2. Set the 'ServerName' directive globally to suppress this message
[Sat May 17 00:03:41.284323 2025] [mpm_prefork:notice] [pid 1:tid 1] AH00163: Apache/2.4.62 (Debian) PHP/8.3.21 configured -- resuming normal operations
[Sat May 17 00:03:41.284467 2025] [core:notice] [pid 1:tid 1] AH00094: Command line: 'apache2 -D FOREGROUND'

**Volume anonimo**
$ docker run -d -p 6500/80 --name phpmessages_container --rm -v php_volume:/var/www/html/massages --rm phpmessages

Listar volumes:
docker volume ls

Criar Volumes:
docker volume create new_volume