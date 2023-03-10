//const tresHoras = 60 * 60 * 3 * 1000; //três horas em milesimos de segundo
//const umDia = 60 * 60 * 24 * 1000; //um dia em milesimos de segundo
//const data = new Date(0 + tresHoras + umDia); //01/01/1970 Timestamp unix ou época unix (MARCO 0)
//A data é formada por milesimos de segundo contados desde o marco 0.
// Os meses em JS vão de 0-11
//const data = new Date(2019, 3, 20, 15, 14, 27, 500); //(Ano,mês,dia,hora,minutos,segundos,milessegundos) podem ser omitidas as informações, se omitidas são zeradas
const data = new Date(1671838573420); //neste caso usa o mês real
//console.log('Dia', data.getDate())
//console.log('Mês', data.getMonth() + 1); //Mês começa do 0
//console.log('Ano', data.getFullYear());
//console.log('Hora', data.getHours());
//console.log('Minuto', data.getMinutes());
//console.log('Segundo', data.getSeconds());
//console.log('Milessegundo', data.getMilliseconds());
//console.log('Dia semana', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data.toString()); 
//console.log(Date.now()) //milesimos de segundo da data atual. do marco 0 até hoje

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
} 
function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth()+1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${mes}:${seg}`;
}

//const data = new Date();
//const dataBrasil = formataData(data);
//console.log(dataBrasil)