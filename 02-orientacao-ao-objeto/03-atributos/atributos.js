//Passar verificações se os parametros passados
//para o constutor está correto

class Quadrado{
    constructor(base, altura){
        // isNaN retorna verdadeiro se não for um númerp
        //isNaN = is Not a Number
        if(isNaN(base) || isNaN(altura)) throw "informação não numérica" //verificação -> retorna mensagem se não for um numero
        this.base = base;       //CRIA UM ATRIBUTO
        this.altura = altura;   //CRIA UM ATRIBUTO
        this.cor = undefined;   //PARÂMETRO OPCIONAL
    }
}

const quadrado1 = new Quadrado(10, 12);
console.log(quadrado1);
console.log('\n');
quadrado1.cor = 'azul';
console.log(quadrado1);
