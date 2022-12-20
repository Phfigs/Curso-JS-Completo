/*
&& -> false && true -> false --- Mesmo que tenha 50 outras expressões depois do false o js vai parar de ler no false e vai te retornar o valor do que é false.
ex: console.log('Luiz Otávio' && 0 && 'Maria');
o JS te retorna "0"
Caso as três expressões sejam verdadeiras ele vai retornar a última.
ex: console.log('Luiz Otávio' && true && 'Maria');
o JS te retorna "Maria"
|| -> true && false -> vai retornar o "valor verdadeiro"

Valores avaliados em false
FALSY values
false 
0
'' "" ``
null / undefined
NaN
*/

//Sempre que todas as expressões forem avaliadas em false o JS vai te retornar a ultima expressão.
// ex:
const a = 0;
const b = null;
const c = false;
const d = undefined;
const e = NaN;

console.log(a || b || c || d || e);

//Testando OR
console.log(0 || false || null || 'Pedro' || true);

const corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);

//FAZENDO UMA CONDIÇÃO SEM USAR ESTRUTURA CONDICIONAL NENHUMA
function falaOi(){
    return 'Oi';
}

const vaiExecutar = 'Joãozinho';

console.log(vaiExecutar && falaOi());
