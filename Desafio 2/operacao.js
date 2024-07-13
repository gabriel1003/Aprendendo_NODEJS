
var operacaoMultiplicacao = require('./multiplicacao');
var operacaoSubtracao = require('./subtracao');
var operacaoDivisao = require('./divisao');
var operacaoSoma = require('./soma');


function calcular(a, b, operacao) {
    switch (operacao) {
        case '+':
            return operacaoSoma(a, b);
            case '-':
                return operacaoSubtracao(a, b);
                case '/':
                    return operacaoDivisao(a, b);
                    case '*':
                        return operacaoMultiplicacao(a, b);
                    default:
                        throw new Error('Operação inválida. Use "+", "-", "*" ou "/".');
    }
};
module.exports = calcular;
