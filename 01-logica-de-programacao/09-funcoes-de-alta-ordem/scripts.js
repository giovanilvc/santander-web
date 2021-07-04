//Recebendo funções como parametro
const somar     = (a,b) => a+b;
const subtrair  = (a,b) => a-b;

const aplicarOperacao = (a,b, funcao) => funcao(a,b);

let resultado1 = aplicarOperacao(5,5, somar);
let resultado2 = aplicarOperacao(5,5, subtrair);
console.log(resultado1, resultado2, '\n');

//funções de alta ordem
const somarX = (x) => (y) => x + y;

const somar1 = somarX(1);

console.log(somar1(5))