# Usa uma imagem base do Node.js
FROM node:18

# Define o diretório de trabalho no container
WORKDIR /app

# Copia apenas o package.json e package-lock.json para a imagem
COPY package*.json /app/

# Instala as dependências dentro da imagem
RUN npm install

# Exclui a pasta node_modules do diretório local (isso é opcional)
# RUN rm -rf /app/node_modules

# Quando você rodar o container, o `node_modules` dentro da imagem já será usado.
# CMD ["npm", "start"]
