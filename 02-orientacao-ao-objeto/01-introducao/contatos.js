const agenda = {
    contatos: [
        {nome: 'contato1', telefone: 'tel1', email: 'email1@gmail.com'},
        {nome: 'contato2', telefone: 'tel2', email: 'email2@gmail.com'},
        {nome: 'contato3', telefone: 'tel3', email: 'email3@gmail.com'},
    ],

    adicionar: function(contato){this.contatos.push(contato)}
};

//##acessando os dados
// console.log(agenda.contatos[0].nome)

//##adicionando um contato a agenda
let a = {nome: 'Giovani', telefone: 'telG', email: 'gio@gmail.com'};
agenda.adicionar(a)

console.log(agenda.contatos)