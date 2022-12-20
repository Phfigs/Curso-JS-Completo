const nome = 'Luiz'; //string  
const nome1 = "Luiz"; //string
const nome2 = `Luiz`; //string
const num1 = 10; //number
const num2 = 10.53; //number
let nomeAluno; // undefined = não aponta pra local nenhum na memória
const sobrenomeAluno = null; // nulo = não aponta pra local nenhum na memória esse é o que se deve escolher que você não quer atribuir valor nenhum pra essa constante.
const aprovado = false; // boolean = true, false (lógico)


//dados por referência
const a = [1,2];
const b = a;
console.log(a,b)
b.push(3) // como o valor de b aponta pro mesmo local que o valor de a na memória, a recebeu os valores de b
console.log(a,b)