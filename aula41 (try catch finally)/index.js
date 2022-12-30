try {
    // É executada quando não há erros
} catch (e) {
    // É executada quando há erros
} finally {
    //Sempre
}

try {
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');

    try {
        console.log(b);
    } catch (e) {
        console.log('Deu erro');
    } finally {
        console.log('Também sou finally.');
    }
} catch (e) {
    console.log('Tratando o erro');
} finally {
    console.log('FINALLY: Eu sempre sou executado');
}

function retornaHora(data = new Date()){
    if (!(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit', //para colocar dois digitos 
        second: '2-digit',
        hour12: false //para tirar o AM/PM, colocar no sistema de 24hrs
    });
}
try{
const data = new Date('01-01-1970 21:23:12')
const hora = retornaHora();
console.log(hora);
} catch (e) {
    //tratar erro
    console.log(e);
} finally {
    console.log('Tenha um bom dia.');
}