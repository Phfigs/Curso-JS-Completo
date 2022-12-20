const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
    },

    fala1() {
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrementaIdade(){
        ++this.idade;
    }
}

pessoa1.fala();
pessoa1.fala1();
pessoa1.incrementaIdade();
pessoa1.incrementaIdade();
pessoa1.fala1();

/*
function criaPessoa (nome, sobrenome, idade) { //criando uma função para criar um objeto
    return {nome, sobrenome, idade};
    }

    const pessoa1 = criaPessoa('Luiz','Miranda',25);
    const pessoa2 = criaPessoa('João','Francisco',32); //criando variaveis com o objeto utilizando funções
    const pessoa3 = criaPessoa('Maria','Martins',45);
    const pessoa4 = criaPessoa('Jean','Oliveira',78);
    const pessoa5 = criaPessoa('Lucas','Jatobá',12);

    console.log(pessoa1.nome,pessoa2.idade,pessoa3.sobrenome,pessoa1.idade)
*/

/* const pessoa1 = { //criando um objeto e atribundo valor a ele
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
*/