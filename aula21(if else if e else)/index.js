//if pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// Eu posso ter vários else ifs na checagem
// Só posso ter um else na checagem
// Podemos usar condições sem else if, utilizando apenas if e else

const hora = 50;

if(hora <= 12) {
    console.log('Bom dia!');
} else if(hora <= 18){
    console.log('Boa tarde!');
} else if(hora > 18 && hora <= 23) {
    console.log('Boa noite');
} else {
    console.log('Hora incorreta.');
}

const tenhoGrana = NaN;

if(tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
}

const numero = 10;

if(numero < 11){
    console.log('O número é menor que 10.');
}

if(numero >= 0 && numero <=5){
    console.log('O número está entre 0 e 5.');
} else if(numero >= 6 && numero <=8){
    console.log('O número está entre 6 e 8.');
} else if(numero >= 9 && numero <=11){
    console.log('O número está entre 9 e 11.');
} else {
    console.log('O número não está entre 0 e 11.');
}
console.log('...Aqui vai o resto do código.');
