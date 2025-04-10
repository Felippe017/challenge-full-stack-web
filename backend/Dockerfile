# Estágio de build
FROM node:18 AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de configuração
COPY package*.json tsconfig.json ./

# Instala as dependências
RUN npm ci

# Copia o código fonte
COPY src/ ./src/
COPY prisma ./prisma/
RUN npx prisma generate

# Compila o TypeScript para JavaScript
RUN npm run build

# Define as variáveis de ambiente para produção
ENV NODE_ENV=production

# Expõe a porta que a aplicação irá utilizar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/index.js"]