const confirma = confirm('Deseja apagar?')
if(confirma == true) {
    alert('Apagado!') 
} else {
    alert('tudo ok.')
}
const nome = prompt('Qual seu nome?');
alert(`Seja bem vindo, ${nome}!`);
const num1 = parseFloat(prompt('Digite um número:'));
const num2 = parseFloat(prompt('Digite outro número:'));
const soma = num1 + num2;
alert(`A soma dos dois números é igual a ${soma}.`)