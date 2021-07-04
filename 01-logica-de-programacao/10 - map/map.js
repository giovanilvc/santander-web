const vetor = ['10', '20', '30'];
console.log(vetor);

//Cria a função -> passa de string pra Int
const stringToInt = (x) => parseInt(x);

//Passa a função pro map
const vetor2 = vetor.map(stringToInt);
console.log(vetor2);

//Criando outra função e aplicando o map direto
const vetor3 = vetor2.map((x) => x*x);
console.log(vetor3);
