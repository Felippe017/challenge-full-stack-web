# Etapa de build
FROM node:18 AS build-stage

# Diretório de trabalho
WORKDIR /app

# Copia os arquivos principais
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Build para produção
RUN npm run build

# Etapa de produção
FROM nginx:stable-alpine as production-stage

# Copia arquivos de build para o Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expõe a porta padrão
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]