//return
// retorna um valor
// termina a função

function soma(a, b) {
  return a + b;
}
console.log(soma(1, 2));

function soma2(a, b) {
  console.log(a + b);
}
soma2(2, 3);

//document.addEventListener("click", function () {
//document.body.style.backgroundColor = "red";
//});

function criaPessoa(nome, sobrenome) {
  return { nome, sobrenome };
}

const p1 = criaPessoa("Luiz", "Otávio");
const p2 = {
  nome: "Jõao",
  sobrenome: "Oliveira",
};

console.log(typeof p1);
console.log(typeof p2);

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + " " + resto;
  }
  return falaResto;
}

const fala = falaFrase("Olá");
const resto = fala("mundo!");

console.log(resto);

function criaMultiplicador(multiplicador) {
  // o multiplicador está nesse escopo
  return function multiplicacao(n) {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
const tripllica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(tripllica(2));
console.log(quadriplica(2));
