Aqui está TUDO em **um único bloco**. Só copiar e colar no `anotacoes.md`:

````markdown
# 🐳 Como construir e executar uma imagem Docker Node.js

## Construir a imagem

```bash
docker build .
```

Saída esperada:

```
[+] Building 4.2s (10/10) FINISHED
 => [internal] load build definition from Dockerfile
 => [internal] load metadata for docker.io/library/node:latest
 => [internal] load .dockerignore
 => [1/5] FROM docker.io/library/node:latest
 => [internal] load build context
 => [2/5] WORKDIR /app
 => [3/5] COPY package*.json .
 => [4/5] RUN npm install
 => [5/5] COPY . .
 => exporting to image
 => => writing image sha256:5583d4f8b8dd...
```

## Executar a imagem

```bash
docker run -d -p 3000:3000 --name meu_node 5583d4f8b8dd
```

## Verificar logs

```bash
docker logs -f meu_node
```

Saída esperada:

```
Executando na porta: 3000
```

## Recriar a imagem com nome e outra porta

```bash
docker build -t my_node .
```

Saída esperada:

```
[+] Building 2.5s (11/11) FINISHED
 => [internal] load build definition from Dockerfile
 => [internal] load metadata for docker.io/library/node:latest
 => [auth] library/node:pull token
 => [1/5] FROM docker.io/library/node:latest@sha256:...
 => [internal] load build context
 => CACHED [2/5] WORKDIR /app
 => CACHED [3/5] COPY package*.json .
 => CACHED [4/5] RUN npm install
 => [5/5] COPY . .
 => exporting to image
 => => writing image sha256:9b06a5b8a113...
 => => naming to docker.io/library/my_node
```

## Verificar imagens disponíveis

```bash
docker images
```

Saída:

```
REPOSITORY   TAG       IMAGE ID       CREATED          SIZE
my_node      latest    9b06a5b8a113   6 seconds ago    1.13GB
```

## Copiar ficheiro de dentro do container

```bash
docker cp container1:/app/app.js ./copia
```

## Construir imagem com nome personalizado

```bash
docker build -t private/datascience .
```
````
