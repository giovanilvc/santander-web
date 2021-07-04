//Cria um vetor vazio
vector1 = [];
vector2 = [10,20,30,40,50];
matriz  = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

//Adicionando elementos ao vetor-> vetor.push(i)
for(let i=0; i<10; i++){
    vector1.push(i);
}

console.log(vector1);

//Descobrindo o tamanho de um vetor -> vetor.length
sizeVector2 = vector2.length;

console.log('\n' + sizeVector2)

//Acessando elementos de um vetor 
console.log('\n' + vector2[2])

//Acessando elementos de uma matriz
console.log('\n' + matriz[0][2])