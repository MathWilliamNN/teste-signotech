const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'poll_app'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
    } else {
        console.log('Conectado ao MySQL!');
    }
});

app.use(cors());

// ===================== TABELA polls ===================== //

// Rota GET para obter todas as enquetes
app.get('/polls', (req, res) => {
    const sql = 'SELECT * FROM polls';
    connection.query(sql, (error, results) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.json(results);
    });
});

// Rota POST para criar uma nova enquete
app.post('/polls', (req, res) => {
    const { title, starting_date, finishing_date } = req.body;
    const sql = 'INSERT INTO polls (title, starting_date, finishing_date) VALUES (?, ?, ?)';
    
    connection.query(sql, [ title, starting_date, finishing_date], (error, results) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(201).json({ id: results.insertId, title, starting_date, finishing_date });
    });
});

// ===================== TABELA questions ===================== //

// Rota GET para obter todas as perguntas
app.get('/questions', (req, res) => {
    const sql = 'SELECT * FROM questions';
    connection.query(sql, (error, results) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.json(results);
    });
});

// Rota POST para criar uma nova pergunta
app.post('/questions', (req, res) => {
    const { poll_id, question, type } = req.body;
    const sql = 'INSERT INTO questions (poll_id, question, type) VALUES (?, ?, ?)';
    
    connection.query(sql, [poll_id, question, type], (error, results) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(201).json({ id: results.insertId, poll_id, question, type });
    });
});

// ===================== TABELA options ===================== //

// Rota GET para obter todas as opções
app.get('/options', (req, res) => {
    const sql = 'SELECT * FROM options';
    connection.query(sql, (error, results) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.json(results);
    });
});

// Rota POST para criar uma nova opção
app.post('/options', (req, res) => {
    const { question_id, option_text } = req.body;
    const sql = 'INSERT INTO options (question_id, option_text) VALUES (?, ?)';
    
    connection.query(sql, [question_id, option_text], (error, results) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(201).json({ id: results.insertId, question_id, option_text });
    });
});

// ===================== TABELA responses ===================== //

// Rota GET para obter todas as respostas
app.get('/responses', (req, res) => {
    const sql = 'SELECT * FROM responses';
    connection.query(sql, (error, results) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.json(results);
    });
});

// Rota POST para criar uma nova resposta
app.post('/responses', (req, res) => {
    const { poll_id, question_id, answer } = req.body;
    const sql = 'INSERT INTO responses (poll_id, question_id, answer) VALUES (?, ?, ?)';
    
    connection.query(sql, [poll_id, question_id, answer], (error, results) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.status(201).json({ id: results.insertId, poll_id, question_id, answer });
    });
});

// Iniciando o servidor Express
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
