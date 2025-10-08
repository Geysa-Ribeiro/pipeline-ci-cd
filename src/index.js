// src/index.js - Versão ajustada para Vercel Serverless

function multiplicar(a, b) {
  return a * b;
}

const express = require('express');
const app = express(); // Inicia o Express

// Define a rota principal
app.get('/', (req, res) => {
    res.send('App rodando com CI/CD! (ERRO 500 CORRIGIDO)');
});

// *EXPORTE APENAS O APP* para que o Vercel possa usá-lo como Serverless Function
module.exports = app;