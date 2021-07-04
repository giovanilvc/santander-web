//Funciona como filtro em um vetor
//verificando uma condição
//se for verdade o valor se mantem no vetor
//se for falso o valor é descartado do vertor

const vetor = [1,2,3,4,5,6,7,8,9,10];

const pares = vetor.filter(x => x%2 === 0);
//mesmacoisa que vetor.filter(function(x){return x%2 ===0;});

console.log(pares);
