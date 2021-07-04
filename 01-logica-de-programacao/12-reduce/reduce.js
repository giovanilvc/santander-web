//Não retorna um vetor, e sim reduz o vetor a um valor ou objeito

const vetor = [1,2,3,4,5,6];

//Estado é como se fosse o acumulador da função
const soma = vetor.reduce((estado, item) => estado+ item);

console.log(soma);