// src/index.js - CORRIGIDO para permitir Testes E Deploy no Vercel

const express = require('express');
const app = express();

// 1. A função de lógica que você quer testar
function multiplicar(a, b) {
  return a * b;
}

// 2. Define a rota principal para o deploy
app.get('/', (req, res) => {
    res.send('App rodando com CI/CD! (ERRO 500 CORRIGIDO)');
});

// 3. EXPORTAÇÃO MÚLTIPLA: 
// Exportamos a função de lógica em uma chave, e o app Express como export default.

// O Vercel CLI/ambiente Serverless procurará a exportação principal para rodar
// e o Jest, ao importar, conseguirá pegar a função "multiplicar".
module.exports = {
  // Exporta a função para ser usada nos testes (Jest)
  multiplicar: multiplicar, 
  // Exporta o app Express para ser usado pelo Vercel como Serverless Function
  app: app, 
};
