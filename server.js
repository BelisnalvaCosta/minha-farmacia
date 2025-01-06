const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const db = new sqlite3.Database('./banco_de_dados.db', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
        console.log('Conexão bem-sucedida ao banco de dados SQLite.');
    }
});

app.use(bodyParser.json());
app.use(cors());

// Criação da Tabela
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS medicamentos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            prescricao TEXT NOT NULL,
            preco REAL NOT NULL,
            quantidade_entrada INTEGER NOT NULL,
            quantidade_saida INTEGER NOT NULL,
            quantidade_estoque INTEGER NOT NULL,
            status TEXT NOT NULL
        )
    `);

    console.log('Tabela medicamentos garantida no banco de dados.');
});

// Rota de Cadastro
app.post('/medicamento', (req, res) => {
    const { id, nome, prescricao, preco, quantidadeEntrada, quantidadeSaida, status } = req.body;
    db.run(`INSERT INTO medicamentos (id, nome, prescricao, preco, quantidadeEntrada, quantidadeSaida, status)
            VALUES (?, ?, ?, ?, ?, ?, ?)`, [id, nome, prescricao, preco, quantidadeEntrada, quantidadeSaida, status],
        (err) => {
            if (err) return res.status(500).send(err.message);
            res.send('Medicamento cadastrado com sucesso!');
        });
});

// Busca Medicamento
app.get('/medicamento', (req, res) => {
    db.all(`SELECT * FROM medicamentos`, [], (err, rows) => {
        if (err) return res.status(500).send(err.message);
        res.json(rows);
    });
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
