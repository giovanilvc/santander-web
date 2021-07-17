class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

class Cidadao extends Pessoa{
    //atributos nome e idade são obrigatorios pois fazem parte da classe Pai
    constructor(nome, idade, rg, cpf){
        //super() passa os atributos pra classe superior
        super(nome, idade);
        //agora basta declarar os atributos adicionais da classe atual
        this.rg = rg;
        this.cpf = cpf;
    }
}

const cidadao = new Cidadao('Giovani', 20, '0000', '1111')
console.log(cidadao);