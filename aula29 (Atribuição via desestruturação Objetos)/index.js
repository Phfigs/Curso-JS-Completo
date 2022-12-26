const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

//Atribuição via desestruturação
//const { nome, sobrenome } = pessoa; //com (nome: n = '') você está mudando o nome da variável se você colocar somente nome = '', você tá atribuindo um valor padrão caso não seja encontrada essa variável.
//console.log(nome, sobrenome);

//const { endereco: { rua: r = 12345}, endereco} = pessoa;
//console.log(r, endereco);

const { nome, sobrenome, ...resto} = pessoa;
console.log(resto);