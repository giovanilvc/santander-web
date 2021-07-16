//Clase funciona como um construtor de objetos
class Pessoa{
    //cosntrutor de um objeto que tenha nome e idade como atributors
    constructor(nome, idade){
        //definição da função construtora
        //e atribuição dos parametros de entrado pros atributos
        this.nome = nome;
        this.idade = idade;
    }
}

//Criando um objeto da classe Pessoa
const pessoa1 = new Pessoa('Giovani', 20); //usa new para criar uma nova instância de uma clase 
console.log(pessoa1);

//acessando atributos de um obejeto
console.log(pessoa1.nome);
console.log(pessoa1.idade);
//modificando atributo de um objeto
pessoa1.idade = 21;
console.log('idade alterada: ', pessoa1.idade);

// Criando um outro obejto da classe Pessoa
const pessoa2 = new Pessoa('Coelho', 54);
console.log(pessoa2);