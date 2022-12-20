/**
 * Operadores Aritméticos
 * + Adição / Concatenação
 * - / * (subtração, divisão, multiplicação)
 * ** Potencia
 * % Resto de divisão
 * Incremento = ++
 * Decremento = --
 */
const num1 = 10;
const num2 = 3;
const num3 = 10;
console.log(num1**num2)
console.log(num1%num2)
console.log((num1+num2)*num3)
let contador = 1;
console.log(contador++); // o valor foi somado mas não aparece.
console.log(contador) // mostrando o valor, agora atualizado.
contador += 2; //pode ser feito com qualquer operador *= -=
console.log(contador)


/**
 * NaN - Not a number
 * parseInt (inteiro)
 * parseFloat (decimais)
 * Number() para qualquer tipo
 * */ 

const num4 = 10;
const num5 = parseFloat('5.2'); //para números decimais
const num6 = parseInt('5'); //para números inteiros
const num7 = '5'; //o próprio js tenta resolver o problema pra você (SE NÃO FOR ADIÇÃO)
console.log(num4 + num5)
console.log(num4 + num6)
console.log(num4 * num7)
console.log(typeof num2)