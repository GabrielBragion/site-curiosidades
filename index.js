// index.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const curiosityRoutes = require('./routes/curiosities');

// Carregar as variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();

// Middleware para analisar o corpo das requisições em JSON
app.use(express.json());

// index.js (adicione esta linha para servir arquivos estáticos)
app.use(express.static('public'));


// Conectar ao MongoDB Atlas usando a URL do .env
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conectado ao MongoDB Atlas'))
    .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// index.js (adicione essas linhas)


// Usar as rotas no aplicativo Express
app.use('/curiosities', curiosityRoutes);


// Porta onde o servidor irá rodar
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
