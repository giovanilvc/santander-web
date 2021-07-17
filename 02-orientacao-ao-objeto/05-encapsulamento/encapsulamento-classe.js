//Meio de ter acesso a um atributo do objeto, mas sem ter como modifica-lo 
//para ajudar nisso, temos os "Acessors" -> métodos de acesso
//que serão estudados na próxima aula

class CriaQuadrado{
    constructor(base, altura){
        let cor = 'blue';
        this.base = base;
        this.altura = altura;

        this.getCor = () => {return cor;};
    }
}

const quadrado1 = new CriaQuadrado(10,20);

console.log(quadrado1.getCor());