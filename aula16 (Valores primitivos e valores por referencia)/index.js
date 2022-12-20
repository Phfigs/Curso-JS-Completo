/*

Primitivos(imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Passados por referência

*/

/*
let nome = 'Luiz';
nome = 'Otávio';
nome[0] = 'R'; //isso não funciona pois string é imutável
console.log(nome);

let a = 'A';
let b = a; // Cópia
console.log(a,b);

a = 'Outra coisa';
console.log(a,b);
*/

/*
let a = [1,2,3];
//let b = a; //a e b apontam pro mesmo valor na memória, não é uma cópia
let b = [...a] //para copiar o valor de a pra b
let c = b;
console.log(a,b);

a.push(4);
console.log(a,b);

b.pop();
console.log(a,b);

a.push('Luiz');
console.log(a, c)
*/

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

const b = a;
//para fazer a copia é a mesma forma dos arrays 
//const b = {...a}
a.nome = 'João';
console.log(b);
