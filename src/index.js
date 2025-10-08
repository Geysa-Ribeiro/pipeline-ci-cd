const express = require('express');
const app = express();

// Função de lógica testável
function multiplicar(a, b) {
  return a * b;
}

// Rota principal
app.get('/', (req, res) => {
  res.send('App rodando com CI/CD! (ERRO 500 CORRIGIDO)');
});

// Exportação padrão para Vercel
module.exports = app;

// Exportação nomeada para testes
module.exports.multiplicar = multiplicar;

