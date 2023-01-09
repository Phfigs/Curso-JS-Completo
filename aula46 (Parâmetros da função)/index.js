//A funcao que é definida com a palavra function tem uma variavel especial chamada arguments que sustenta todos os argumentos enviados (NÃO FUNCIONA COM ARROW FUNCTION)
function funcao() {
  console.log(arguments[0]);
}
funcao("Valor", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function funcao1(a, b, c) {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(total, a, b, c);
}

funcao1(1, 2, 3, 45, 6, 7);

function funcao2(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}

funcao2(1, 2, 3);

function funcao3(a, b = 2, c = 4) {
  console.log(a + b + c);
}
funcao3(2, undefined, 20);

function funcao4({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}

let obj = { nome: "Luiz", sobrenome: "Ótavio", idade: 20 };
funcao4(obj);

function funcao5([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}

funcao5(["Luiz Ótavio", "Miranda", 30]);

const conta = function (operador, acumulador, ...numeros) {
  console.log(operador, acumulador, numeros);
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "*") acumulador *= numero;
    if (operador === "/") acumulador /= numero;
  }
  console.log(acumulador);
};

conta("+", 2000, 20, 30, 40, 50);
