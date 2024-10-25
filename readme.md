# Sistema de Enquetes

Este projeto é um aplicativo de enquetes que permite a criação, visualização e votação em perguntas. Os usuários podem responder a perguntas em diferentes formatos e visualizar os resultados. É um projeto que faz parte de uma etapa de um processo seletivo.

## Funcionalidades

- **Criação de Enquetes:** Os administradores podem criar novas enquetes com perguntas e opções de resposta.
- **Participação em Enquetes:** Os usuários podem votar em perguntas disponíveis.
- **Visualização de Resultados:** Os resultados de cada enquete são exibidos em tempo real, permitindo que os usuários vejam quantas pessoas votaram em cada opção.

## Tecnologias Utilizadas

- **Frontend:** React.js, styled-components
- **Backend:** Node.js, Express.js
- **Banco de Dados:** MySQL

## Estrutura do Projeto

### Frontend

O frontend é responsável pela interface do usuário, onde os usuários podem interagir com as enquetes. Ele é construído com React e utiliza componentes para organizar o layout e a lógica do aplicativo.

### Backend

O backend é construído com Node.js e Express.js, fornecendo uma API RESTful para gerenciar enquetes, perguntas e respostas. Ele se conecta a um banco de dados MySQL para armazenar dados.

## Como Executar o Projeto

### Pré-requisitos

- Node.js
- MySQL

### Configuração do Banco de Dados

1. Crie um banco de dados no MySQL e importe o arquivo SQL fornecido para criar as tabelas necessárias.
2. Atualize as configurações de conexão no arquivo do servidor.

### Executando o Backend

1. Navegue até a pasta do backend.
2. Instale as dependências:
   ```bash
   npm install
3. Inicie o servidor:
   ```bash
   node server.js

### Executando o Frontend

1. Navegue até a pasta do frontend.
2. Instale as dependências:
   ```bash
   npm install
3. Inicie o aplicativo:
   ```bash
   npm run dev

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Planos futuros

Alguns bugs ainda não foram corrigidos, como a exibição em tempo real dos votos e a data de início e finalização, porém, atualizar a página é uma solução temporária e permite o uso adequado do aplicativo


