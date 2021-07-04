const pessoa = {
    nome: 'Giovani',
    idade: 20
};

console.log(pessoa.nome);
console.log(pessoa.idade);

console.log('\n')

//objeto dois
const quadrado = {
    base: 10,
    altura: 20,
    area: function(){return this.base * this.altura;} //observe que é uma função
};

console.log(quadrado.area());