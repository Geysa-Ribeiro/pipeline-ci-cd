
const { multiplicar } = require('../src/index');

test('deve multiplicar 2 * 2 e retornar 4', () => {
  expect(multiplicar(2, 2)).toBe(4);
});

test('deve multiplicar 5 * 2 e retornar 10', () => {
  expect(multiplicar(5, 2)).toBe(10);
});