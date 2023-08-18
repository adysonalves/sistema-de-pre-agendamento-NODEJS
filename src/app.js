require('dotenv').config();
const express = require('express');
const app = express();

// Configurações do App:
require('./configs/configApp')(app,express);

// Importa os Models
require('./models/ListModels')();

// Importa as Rotas
require('./routes/RouterList')(app);

// Tratamento do erro 404
app.use((req,res,next) =>{
    res.status(404).json({'message':'Recurso não encontrado!'})
})

module.exports = app;