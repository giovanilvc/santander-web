// ###Forma comum
function print(texto){
    console.log(texto);
}

function soma1(a,b){
    return a+b;
}

let resultado = soma1(1,9);

print(resultado); 

// ###Forma Anônima

const soma2 = function(a,b){return a+b;}
print(soma2(5,7));

// Terceira Forma
const soma3 = (a,b) => a+b;
print(soma3(10,' - HelloWorld'));


//Usando as funções
let b = soma1(1,2);
let c = soma2(1,3);
let d = soma3(1,4);
console.log('\n', b, c, d);
