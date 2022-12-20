//function soma(x=1, y=1) { //se não forem enviados valores para x e y ambos assumem valor 1
//   const resultado = x+y;
//   return resultado;
//}

//const resultado = soma(4,5); //não tem nada a ver com o resultado da função, pois o que está dentro da função está protegido, não pode ser alterado nem acessado.
//console.log(resultado);

//OUTRA FORMA DE FAZER UMA FUNÇÃO
/*
const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
*/

//ARROW FUNCTION

const raiz = n => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
