# 📄 COMMENTS.md

## 🧱 Decisão da arquitetura utilizada

Foi adotada uma arquitetura baseada em containerização de múltiplos serviços utilizando Docker. Um único docker-compose.yml é responsável por orquestrar três serviços principais:

Frontend: Aplicação Vue.js com Vuetify
Backend: API REST construída com Express e validações com Zod
Banco de Dados: PostgreSQL

Essa abordagem promove o isolamento de responsabilidades, facilita a manutenção e permite escalabilidade e versionamento individual de cada serviço. Além disso, garante ambientes consistentes para desenvolvimento, testes e produção.

## 📦 Lista de bibliotecas de terceiros utilizadas

### Backend:
- **Express**: framework para criação de APIs.
- **Prisma**: ORM moderno e eficiente para integração com banco de dados PostgreSQL.
- **Zod**: validação de dados fortemente tipada com TypeScript.
- **CORS**: habilitação de requisições entre domínios.
- **Nodemon**: reinicialização automática do servidor durante o desenvolvimento.
- **Ts-node**: execução de arquivos TypeScript diretamente via Node.js.
- **Docker**: containerização do frontend em ambiente separado.

### Frontend:
- **Vue 3 (Composition API)**: framework progressivo para construção de interfaces modernas.
- **Vuetify**: biblioteca de componentes UI baseada em Material Design.
- **Vuelidate**: validações reativas de formulários.
- **VueTheMask**: aplicação de máscaras nos campos de CPF e RA.
- **Axios**: cliente HTTP para chamadas à API.

### DevOps:
- **Docker e docker-compose**: containerização e orquestração dos serviços

## 🚀 O que você melhoraria se tivesse mais tempo

- **Implementar Tanstack query** para cache em requisição.
- **Implementar pattern composition** para front-end.
- **Autenticação e autorização**: proteger rotas com middleware e JWT.
- **Implementar paginação e busca com debounce** na listagem de alunos.
- **Componentização ainda maior**: separar componentes de formulário e tabelas para reaproveitamento e testes isolados.
- **Melhoria na experiência de usuário (UX)**: adicionar loaders por item, animações e confirmações visuais mais elegantes.
- **Testes automatizados** com ferramentas como Jest e Supertest (backend) e Cypress ou Vue Test Utils (frontend).

## ✅ Quais requisitos obrigatórios que não foram entregues

**Todos os requisitos obrigatórios foram entregues.**  
O sistema realiza o CRUD completo de alunos, com formulários validados, dados persistidos no banco de dados e interface funcional e intuitiva.
