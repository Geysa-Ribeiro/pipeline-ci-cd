
function multiplicar(a, b) {
  return a * b;
}
const app = require('express')();
app.get('/', (req, res) => res.send('App rodando com CI/CD!'));

module.exports = { multiplicar, app };