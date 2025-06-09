Claro! Aqui está o seu texto formatado com Markdown para melhor organização e legibilidade, dividido em seções lógicas para **Docker Swarm** e **Kubernetes**.

***

## Docker Swarm

### 1. Inicializando o Swarm no Nó Manager
Primeiro, o nó `node3` é definido como o manager do cluster.

```bash
# No nó que será o manager (node3)
[node3] (local) root@192.168.0.61 ~
$ docker swarm init --advertise-addr 192.168.0.61

# Saída do comando
Swarm initialized: current node (dc7x2ut6w80hwa7uz5o2pm6fz) is now a manager.
To add a worker to this swarm, run the following command:
$ docker swarm join --token SWMTKN-1-3c7x9hfwerfi7xz5mcqwmmqvj2ox6m3y6ku2wcuz8tadz87bve-6vcyvrjd093qxccamwzf38u1c 192.168.0.61:2377
```

### 2. Adicionando os Nós Workers
Os nós `node2` e `node1` são adicionados ao cluster usando o token gerado pelo manager.

```bash
# No primeiro worker (node2)
[node2] (local) root@192.168.0.62 ~
$ docker swarm join --token SWMTKN-1-3c7x9hfwerfi7xz5mcqwmmqvj2ox6m3y6ku2wcuz8tadz87bve-6vcyvrjd093qxccamwzf38u1c 192.168.0.61:2377
This node joined a swarm as a worker.

# No segundo worker (node1)
[node1] (local) root@192.168.0.63 ~
$ docker swarm join --token SWMTKN-1-3c7x9hfwerfi7xz5mcqwmmqvj2ox6m3y6ku2wcuz8tadz87bve-6vcyvrjd093qxccamwzf38u1c 192.168.0.61:2377
This node joined a swarm as a worker.
```

### 3. Verificando o Estado do Cluster
O comando `docker node ls` no manager mostra todos os nós e seus status.

```bash
# No manager (node3)
[node3] (local) root@192.168.0.61 ~
$ docker node ls

# Saída do comando
ID                            HOSTNAME   STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION
ro73qwvckm5zc1d49yesrh5p6     node1      Ready     Active                          27.3.1
42u8wnrbdlzp0q3cx8beurp6e     node2      Ready     Active                          27.3.1
dc7x2ut6w80hwa7uz5o2pm6fz *   node3      Ready     Active         Leader           27.3.1
```

### 4. Criando e Gerenciando um Serviço
Um serviço `nginx` é criado, verificado, removido e recriado no cluster.

```bash
# Criando o serviço no manager
$ docker service create --name nginx_swarm -p 80:80 nginx

# Listando os serviços para verificar
[node3] (local) root@192.168.0.61 ~
$ docker service ls
ID             NAME         MODE         REPLICAS   IMAGE          PORTS
5k19sked3kgx   nginx_swarm   replicated   1/1        ningx:latest   *:80->80/tcp

# Removendo o serviço
$ docker service rm nginx_swarm

# Criando o serviço novamente e verificando a convergência
[node3] (local) root@192.168.0.61 ~
$ docker service create --name nginx_swarm -p 80:80 nginx
pgmzmbnsj6tup8cifab7m9mgp
overall progress: 1 out of 1 tasks
1/1: running   [==================================================>]
verify: Service pgmzmbnsj6tup8cifab7m9mgp converged

# Verificando a lista de serviços novamente
[node3] (local) root@192.168.0.61 ~
$ docker service ls
ID             NAME          MODE         REPLICAS   IMAGE          PORTS
pgmzmbnsj6tu   nginx_swarm   replicated   1/1        nginx:latest   *:80->80/tcp
```

---

## Kubernetes com Minikube

### 1. Instalação do Minikube
Download e instalação do binário do Minikube para arquitetura ARM64.

```bash
# Baixando o Minikube
curl -LO https://github.com/kubernetes/minikube/releases/latest/download/minikube-linux-arm64

# Instalando no sistema
sudo install minikube-linux-arm64 /usr/local/bin/minikube && rm minikube-linux-arm64

# Saída do comando curl
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  122M  100  122M    0     0  14.4M      0  0:00:08  0:00:08 --:--:-- 19.0M
```

### 2. Iniciando e Verificando o Cluster
Inicialização do cluster Minikube usando o driver Docker.

```bash
# Iniciando o Minikube
$ minikube start --driver=docker
😄  minikube v1.36.0 on Ubuntu 24.04 (arm64)
✨  Using the docker driver based on user configuration
📌  Using Docker driver with root privileges
👍  Starting "minikube" primary control-plane node in "minikube" cluster
🚜  Pulling base image v0.0.47 ...
💾  Downloading Kubernetes v1.33.1 preload ...
    > preloaded-images-k8s-v18-v1...:  327.15 MiB / 327.15 MiB  100.00% 36.49 M
    > gcr.io/k8s-minikube/kicbase...:  463.69 MiB / 463.69 MiB  100.00% 10.85 M
🔥  Creating docker container (CPUs=2, Memory=5900MB) ...

🧯  Docker is nearly out of disk space, which may cause deployments to fail! (97% of capacity).
...
🐳  Preparing Kubernetes v1.33.1 on Docker 28.1.1 ...
🌟  Enabled addons: default-storageclass, storage-provisioner
...
🏄  Done! kubectl is now configured to use "minikube" cluster and "default" namespace by default

# Verificando o status do cluster
$ minikube status
minikube
type: Control Plane
host: Running
kubelet: Running
apiserver: Running
kubeconfig: Configured
```

### 3. Acessando o Cluster
Comandos para gerenciar, parar e acessar o dashboard do Minikube.

```bash
# Inicia o k9s (ferramenta de terminal para Kubernetes)
k9s

# Para o cluster Minikube
❯ minikube stop
✋  Stopping node "minikube"  ...
🛑  1 node stopped.

# Abre o dashboard do Kubernetes no navegador
$ minikube dashboard

# Ou obtém a URL do dashboard sem abrir o navegador
$ minikube dashboard --url
http://127.0.0.1:45683/api/v1/namespaces/kubernetes-dashboard/services/http:kubernetes-dashboard:/proxy/
```

### 4. Deploy de uma Aplicação
Criando um `Deployment` para a aplicação Flask.

```bash
# Comando 'docker run' (provavelmente com 'dcr' como um alias para `docker run`)
dcr -d -p 5000:5000 --name flask-kub --rm luizpaulonievola/flask-kub-proj

# Verificando os detalhes do Deployment (provavelmente com 'kdd' como alias para 'kubectl describe deployment')
❯ kdd
Name:                   flask-deployment
Namespace:              default
CreationTimestamp:      Sat, 07 Jun 2025 19:19:32 +0000
Labels:                 app=flask-deployment
Replicas:               1 desired | 1 updated | 1 total | 1 available | 0 unavailable
...
Pod Template:
  Containers:
   flask-kub-proj:
    Image:         luizpaulonievola/flask-kub-proj
...
Conditions:
  Type           Status  Reason
  ----           ------  ------
  Available      True    MinimumReplicasAvailable
  Progressing    True    NewReplicaSetAvailable
```

### 5. Expondo a Aplicação com um Serviço
Pods são efêmeros. Para expor o `Deployment` de forma estável, um `Service` do tipo `LoadBalancer` é criado.

```bash
# Expondo o deployment ('ked' deve ser um alias para 'kubectl expose deployment')
$ ked flask-deployment --type=LoadBalancer --port=5000

# Obtendo a URL de acesso ao serviço
❯ minikube service flask-deployment --url
http://192.168.49.2:30432
```

### 6. Escalando a Aplicação (Scaling)

#### Aumentando o número de réplicas para 5
```bash
$ kubectl scale deployment/flask-deployment --replicas=5

# Verificando os pods (kgp = kubectl get pods)
$ kgp
NAME                               READY   STATUS    RESTARTS   AGE
flask-deployment-8f7dffff4-6qhkf   1/1     Running   0          9m34s
flask-deployment-8f7dffff4-bznsm   1/1     Running   0          9m34s
...
```

#### Diminuindo o número de réplicas para 3
```bash
$ kubectl scale deployment/flask-deployment --replicas=3
deployment.apps/flask-deployment scaled

# Verificando os pods novamente
❯ kgp
NAME                               READY   STATUS    RESTARTS   AGE
flask-deployment-8f7dffff4-6qhkf   1/1     Running   0          10h
flask-deployment-8f7dffff4-bznsm   1/1     Running   0          10h
flask-deployment-8f7dffff4-fb6hq   1/1     Running   0          10h
```

### 7. Atualizando a Imagem (Rolling Update)
Atualizando a imagem do contêiner para a versão 2, o que dispara uma atualização sem downtime.

```bash
❯ kubectl set image deployment/flask-deployment flask-kub-proj=luizpaulonievola/flask-kub-proj:2
deployment.apps/flask-deployment image updated
```

### 8. Desfazendo a Atualização (Rollback)
Revertendo a alteração para a versão anterior do `Deployment`.

```bash
# Verificando o status da última atualização
$ kubectl rollout status deployment/flask-deployment
deployment "flask-deployment" successfully rolled out

# Executando o rollback
$ kubectl rollout undo deployment/flask-deployment
deployment.apps/flask-deployment rolled back

# Verificando os pods, que são recriados com a imagem anterior
❯ kgp
NAME                               READY   STATUS    RESTARTS   AGE
flask-deployment-8f7dffff4-7xj5c   1/1     Running   0          11s
flask-deployment-8f7dffff4-tvxlv   1/1     Running   0          8s
flask-deployment-8f7dffff4-vfzwq   1/1     Running   0          5s
```

### 9. Limpando o Ambiente
Deletando o `Deployment` para remover todos os recursos associados.

```bash
$ kubectl delete deployment flask-deployment
deployment.apps "flask-deployment" deleted

# Verificando que o deployment foi removido ('kgd' = kubectl get deployments)
$ kgd
No resources found in default namespace.
```