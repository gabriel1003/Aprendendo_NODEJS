
var calcular = require('./operacao');
var readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function obterValoresOperacao(callback) {
  rl.question('Digite o primeiro valor: ', (valor1) => {
    rl.question('Digite o segundo valor: ', (valor2) => {
      rl.question('Digite a operação (+, -, *, /): ', (operacao) => {
        callback(parseFloat(valor1), parseFloat(valor2), operacao);
        rl.close();
      });
    });
  });
}

obterValoresOperacao((valor1, valor2, operacao) => {
  try {
    const resultado = calcular(valor1, valor2, operacao);
    console.log('Resultado:', resultado);
  } catch (error) {
    console.error('Erro:', error.message);
  }
});
