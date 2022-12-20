/*
Operadores Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU -> Basta uma expressão ser verdadeira para retornar true
! -> NOT -> NÃO -> inverte uma expressão
*/

const usuario = 'Luiz'; //form que usuário digitou
const senha = '123456'; //form que usuário digitou

//                       true                true
const vaiLogar = usuario === 'Luiz' && senha === '123456'; //resultado pego em base de dados

console.log(vaiLogar);
console.log(!!true); // duas negações inverte duas vezes
console.log(!true); // uma negação inverte
