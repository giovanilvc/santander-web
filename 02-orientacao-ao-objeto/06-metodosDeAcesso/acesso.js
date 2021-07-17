class CriaQuadrado{
    constructor(base, altura){
        this._cor = 'blue';
        this.base = base;
        this.altura = altura;
    }
    //métodos    
    get cor() {return this._cor;};
    set cor(color) { this._cor = color;};
    
}

const quadrado1 = new CriaQuadrado(10,20);

console.log(quadrado1.cor); //Acessa a cor

quadrado1.cor = 'red';

console.log(quadrado1.cor); //Acessa a cor

console.log(quadrado1); //Acessa a cor
