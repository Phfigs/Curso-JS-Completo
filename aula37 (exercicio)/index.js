//Escreva uma função que recebe 2 números e retorne o maior deles
function maiorNumero(numero1,numero2) {
    const numeros = [numero1,numero2];
    return Math.max(...numeros);
}
console.log(maiorNumero(120,40));

function max (x,y) {
    return x > y ? x : y;
}

console.log(max(120,40));

//arrow function
                        //return
const max2 = (x,y) => x > y ? x : y;

console.log(max2(10,5));