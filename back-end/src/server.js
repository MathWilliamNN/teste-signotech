const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 5000;

// Configuração de conexão com o MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // ex: 'root'
    password: 'admin',
    database: 'poll_app' // nome do banco de dados que você criou
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
    } else {
        console.log('Conectado ao MySQL!');
    }
});

// Iniciando o servidor Express
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
