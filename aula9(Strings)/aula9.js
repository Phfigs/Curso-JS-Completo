// toda string tem um indice
//               01234567
let umaString = "Um texto";

console.log(umaString[4]);
console.log(umaString.charAt(3));
console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString.indexOf('texto', 2)); //vai buscar a palvra texto depois da posição 2
console.log(umaString.lastIndexOf('m', 3)); //vai buscar a letra m de trás pra frente
console.log(umaString.match(/[a-z]/g)); //retornar as letras minúsculas, usado para expressões regulares, é bom fazer um curso para saber mais sobre.
console.log(umaString.search(/[a-z]/)); //retorna a primeira letra minúscula que achar.
console.log(umaString.replace('Um', 'Outra')); //substitui uma palavra pela outra
umaString = "O rato roeu a roupa do rei de roma.";
console.log(umaString.replace(/r/g, '#')); //substitui todos os r por #, a letra g é pra fazer repetir em todos os r
console.log(umaString.length); //tamanho da string
console.log(umaString.slice(2,6)); //para mostrar somente o que está do indice 2 até o indice 5
console.log(umaString.length - 5); //para saber de qual indice vai começar
console.log(umaString.slice(-5,-1)); //para exibir as letras do -5 ao -1 "roma"
console.log(umaString.slice(30, -1)); //a mesma coisa de cima.
console.log(umaString.split(' ', 4)); //dividir uma string pelo espaço até a palavra 4.
console.log(umaString.toLowerCase()); //para colocar todas as letras em minúsculas
console.log(umaString.toUpperCase()); //para colocar todas as letras em maiúsculas

let string1 = 'Um "texto"';
let string2 = "'texto'"; 
let string3 = "Um \"texto\""; //para o texto sair entre aspas duplas
let string4 = "Um \\texto"; //para colocar a barra invertida é só colocar dessa maneira
