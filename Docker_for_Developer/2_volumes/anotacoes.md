# 🐘 Docker: imagem PHP com Apache e gestão de volumes

## 🏗️ Construir a imagem

```bash
docker build -t phpmessages .
```

Saída esperada:

```
[+] Building 1.1s (9/9) FINISHED
 => [internal] load build definition from Dockerfile
 => => transferring dockerfile: 164B
 => [internal] load metadata for docker.io/library/php:8.3-apache
 => [internal] load .dockerignore
 => => transferring context: 2B
 => [1/4] FROM docker.io/library/php:8.3-apache@sha256:05cbceb308ee...
 => [internal] load build context
 => => transferring context: 281B
 => CACHED [2/4] WORKDIR /var/www/html
 => [3/4] COPY . .
 => [4/4] RUN chown -R www-data:www-data /var/www
 => exporting to image
 => => writing image sha256:3ed4196a07a0e49b632cc940b497384de68377a3dbb529881aa795efd0422456
 => => naming to docker.io/library/phpmessages
```

---

## 📜 Ver logs do container

```bash
docker logs -f 253f7246e5d0
```

Saída comum:

```
Found existing alias for "docker". You should use: "d"
AH00558: apache2: Could not reliably determine the server's fully qualified domain name, using 172.17.0.2.
Set the 'ServerName' directive globally to suppress this message
[Sat May 17 00:03:41.284323 2025] [mpm_prefork:notice] [pid 1:tid 1] AH00163: Apache/2.4.62 (Debian) PHP/8.3.21 configured -- resuming normal operations
[Sat May 17 00:03:41.284467 2025] [core:notice] [pid 1:tid 1] AH00094: Command line: 'apache2 -D FOREGROUND'
```

---

## 📦 Executar com volume anónimo

```bash
docker run -d -p 6500:80 --name phpmessages_container --rm -v php_volume:/var/www/html/massages phpmessages
```

---

## 📚 Gestão de volumes

### Listar volumes

```bash
docker volume ls
```

### Criar novo volume

```bash
docker volume create new_volume
```

---

## 🔒 Executar com volume em modo só leitura (`ro`)

```bash
docker run -d -p 6500:80 --name phpmessages_container --rm -v php_volume:/var/www/html:ro phpmessages
```
