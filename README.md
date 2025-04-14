Desafio técnico Full Stack Web Developer - +A Educação
===================

# Contexto
O objetivo deste projeto é arquitetar e desenvolver uma aplicação Full Stack Web que realize a Matrícula do Aluno na Turma de Programação Web da instituição Edtech.

# Tecnologias usadas

Front-End
> Desenvolvido usando: Vue, Vuetify, Axios, Typescript

Back-End
> Desenvolvido usando: NodeJS, ExpressJS, PostegreSQL, Typescript, Zod, Prisma, Docker

## Executando aplicação
Para rodar a aplicação, basta rodar: 
  > sudo docker-compose up -d



## Histórias do Usuário
- **Sendo** um usuário administrativo da Instituição
- **Quero** gerenciar cadastros de alunos
- **Para** que eu possa realizar a matrícula do aluno

### Critérios de aceite: 

#### Cenário: Cadastrar novo aluno
- **Dado** que estou na tela de Consulta de Alunos
- **Quando** clico em Cadastrar Aluno
- **Então** abre a tela de Cadastro do Aluno
- **E** exibe os campos obrigatórios vazios
####
- **Dado** que inseri dados válidos nos campos
- **Quando** clico em Salvar
- **Então** cria o novo aluno na base
- **E** retorna mensagem de sucesso
####
- **Dado** que inseri dados válidos nos campos
- **Quando** clico em Cancelar
- **Então** retorna para tela Consulta de Alunos
- **E** não persiste a gravação dos dados no banco 

#### Cenário: Listar alunos cadastrados 
- **Dado** que estou no Módulo Acadêmico
- **Quando** clico no menu Alunos
- **Então** abre a tela de Consulta de Alunos 
- **E** exibe opção Cadastrar Aluno ao topo
- **E** lista dados dos alunos cadastrados
- **E** exibe opção Editar por aluno
- **E** exibe opção Excluir por aluno

#### Cenário: Editar cadastro de aluno
- **Dado** que estou na listagem de alunos
- **Quando** clico em Editar aluno
- **Então** abre a tela de Cadastro do Aluno 
- **E** exibe os campos do cadastro preenchidos
- **E** habilita alteração dos campos editáveis
####
- **Dado** que estou na tela de Cadastro do Aluno
- **Quando** clica em Salvar
- **Então** grava os dados editáveis na base
####
- **Dado** que estou na tela de Cadastro do Aluno
- **Quando** clica em Cancelar
- **Então** retorna para a tela de Consulta de Alunos
- **E** não persiste a gravação dos dados

#### Cenário: Excluir cadastro de aluno
- **Dado** que estou na listagem de alunos
- **Quando** clico em Excluir aluno
- **Então** exibe a modal de confirmação de exclusão
####
- **Dado** que estou na modal de confirmação de exclusão 
- **Quando** clico em Confirmar
- **Então** então exclui o registro do aluno
####
- **Dado** que estou na modal de confirmação de exclusão
- **Quando** clico em Cancelar
- **Então** então fecha a modal e não persiste a exclusão
