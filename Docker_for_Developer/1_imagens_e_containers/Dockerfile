#Imagem base
FROM node

#Diretorio
WORKDIR /app

#Copiar para o diretorio
COPY package*.json .

#Instalar modulo
RUN npm install

# Copiar arquivos para o conteiner
COPY . .

#Expor porta 3000
EXPOSE  3000

# Sintaxe em array para executar no conteiner o node
CMD ["node", "app.js"]