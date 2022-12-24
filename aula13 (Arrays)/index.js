//indices          0       1        2    
const alunos = ['Luiz', 'Maria', 'João'];

//console.log(typeof alunos); //retorna object pois array é um tipo de objeto.
//console.log(alunos instanceof Array); //pergunta se alunos é uma instacia de Array, se é um Array, retorna true ou false

console.log(alunos.slice(0, -2)); //para aparecer só uma fatia do array, determinada entre ()

//delete alunos[1]; //para remover um elemento sem alterar os indices dos outros porém o elemento fica vazio.
// O elemento deletado recebe >> undefined 

//CURIOSIDADE >> DA PRA VOCÊ SALVAR O ELEMENTO QUE FOI REMOVIDO EM UMA VARIAVEL
//const removido = alunos.pop(); //para remover o ultimo elemento do array
//const removido = alunos.shift(); //para remover o primeiro elemento do array

//alunos.unshift('Fábio'); //para adicionar elementos no começo
//alunos.unshift('Luiza');

//alunos[0] = 'Eduardo'; //alterando o elemento 0 do array

//duas formas de adicionar elementos no fim do array
//alunos[alunos.length] = 'Luiza';
//alunos.push('Joaquim')

//console.log(alunos[2]); //mostrando o elemento na posição 2