vetor = [10,20,30,40]

//Percorrendo um vetor por seu tamanho 
for(let i = 0; i<vetor.length; i++){
    console.log(vetor[i]);
}

//Outra forma => Percorre diretamente o vetor
for(let numero of vetor){
    console.log(numero);
}

//Percorre indices
for(let indice in vetor){
    console.log('Posicão['+ indice +'] :  '+ vetor[indice]);
}