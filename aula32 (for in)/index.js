// For in -> lê os índices ou chaves do objeto

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 30
};

//console.log(pessoa.nome);
//console.log(pessoa['sobrenome']);

 for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}


//const frutas = ['Pera','Maça', 'Uva'];

//for (let indice in frutas) {
//    console.log(frutas[indice]);
//}