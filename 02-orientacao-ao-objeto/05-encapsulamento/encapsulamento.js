function Quadrado(base, altura){
    this.base = base;
    this.altura = altura;
    let cor = 'blue';
}

const quadrado1 = new Quadrado(3,4);
console.log(quadrado1);
console.log(quadrado1.cor);

quadrado1.cor = 'red';
console.log(quadrado1);
