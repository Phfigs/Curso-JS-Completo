// Declaração de função (Function hoisting - Podemos chamar a função mesmo antes de declarar ela)
falaOi();

function falaOi() {
  console.log("Oi");
}

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function () {
  console.log("Sou um dado.");
};
souUmDado();

function executaFuncao(funcao) {
  console.log("Vou executar sua função abaixo: ");
  funcao();
}
executaFuncao(souUmDado);

//Arrow function

const funcaoArrow = () => {
  console.log("Sou uma arrow function");
};
funcaoArrow();

// setInterval(function () {}, 2000);

// Dentro de um objeto

const obj = {
  falar() {
    console.log("Estou falando...");
  },
};
obj.falar();
