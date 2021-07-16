//Cria uma classe Quadrado
class Quadrado {
    constructor(base, altura) {
        // isNaN retorna verdadeiro se não for um númerp
        //isNaN = is Not a Number
        if (isNaN(base) || isNaN(altura)) throw "informação não numérica" //verificação -> retorna mensagem se não for um numero
        this.base = base;       //CRIA UM ATRIBUTO
        this.altura = altura;   //CRIA UM ATRIBUTO
        this.cor = undefined;   //PARÂMETRO OPCIONAL
    }

    //CRIA UM MÉTODO PARA CLASSE QUADRADO
    calculaArea() {
        return this.base * this.altura;
    }

    //CRIA UM MÉTODO PARA DUPLICAR A BASE
    duplicabase() {
        this.base = 2 * this.base;
    }

    //RETORNA um texto em HTML que representa um quadrado
    imprimir() {
        return `<div style = 'width:${ this.base } px; height: ${ this.altura } px; background-color: ${ this.cor || 'blue' } '></div >`;
    }
}

const quadrado1 = new Quadrado(10, 12);
console.log(quadrado1);
console.log('\n');
console.log(quadrado1.calculaArea());