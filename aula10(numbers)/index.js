let num1 = 0.7;   //number
let num2 = 0.1; //number

//num1 += num2; // 0.8
//num1 += num2; // 0.9
//num1 += num2; // 1.0
//na verdade o resultado é 0.9999999999...

//num1 = parseFloat(num1.toFixed(2)); //para transformar o número em 1.0 utiliza essa função
//Dá pra usar Number no lugar de parseFloat

//outra forma de se transoformar 0.99999 em 1.0
num1 = ((num1*100) + (num2*100)) /100; //0.8
num1 = ((num1*100) + (num2*100)) /100; //0.9
num1 = ((num1*100) + (num2*100)) /100; //1.0

console.log(num1);
console.log(Number.isInteger(num1));

//console.log(num1.toString() + num2); //se qualquer um dos números for uma string, vai haver concatenação, no código anterior, não altera o tipo da variável, só altera na hora da concatenação, o num1, não deixa de ser number
//num1 = num1.toString(); //para alterar o tipo de num1 para string
//console.log(num1.toString(2)); //mostra a versão binária do número
//console.log(num1.toFixed(2)); //para mostrar quantas casas você preferir depois da virgula, nesse caso 2.
//console.log(Number.isInteger(num1)); //retorna true ou false, se o número é inteiro ou não.
//let temp = num1 * '5'; //é possível fazer contas com string (EXCETO CONTAS DE ADIÇÃO), porém não é uma boa pratica de programação
//console.log(Number.isNaN(temp)); //vai te retornar verdadeiro sempre que a conta for invalida