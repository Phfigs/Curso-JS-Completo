const h1 = document.querySelector('.container h1');
const data = new Date('2020-06-06 06:06:00');

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            return diaSemanaTexto = 'Domingo';
        case 1:
            return diaSemanaTexto = 'Segunda-feira';
        case 2:
            return diaSemanaTexto = 'Terça-feira';
        case 3:
            return diaSemanaTexto = 'Quarta-feira';
        case 4:
            return diaSemanaTexto = 'Quinta-feira';
        case 5:
            return diaSemanaTexto = 'Sexta-feira';
        case 6:
            return diaSemanaTexto = 'Sábado';
        default:
            return diaSemanaTexto = 'Só temos 7 dias na semana, dia inválido.';
    }
}
    function getMes(numeroMes) {
        let mesTexto;
        switch (numeroMes) {
            case 0:
               return mesTexto = 'Janeiro';
            case 1:
               return mesTexto = 'Fevereiro';
            case 2:
                return mesTexto = 'Março';
            case 3:
                return mesTexto = 'Abril';
            case 4:
                return mesTexto = 'Maio';
            case 5:
                return mesTexto = 'Junho';
            case 6:
                return mesTexto = 'Julho';
            case 7:
                return mesTexto = 'Agosto';
            case 8:
                return mesTexto = 'Setembro';
            case 9:
                return mesTexto = 'Outubro';
            case 10:
                return mesTexto = 'Novembro';
            case 11:
                return mesTexto = 'Dezembro';
        }
    }

    function zeroAEsquerda (num) {
        return num >= 10 ? num : `0${num}`;
    } 

    function criaData(data) {
        const diaSemana = data.getDay();
        const numeroMes = data.getMonth();

        const nomeDia = getDiaSemanaTexto(diaSemana);
        const nomeMes = getMes(numeroMes);

        return (
            `${nomeDia}, ${data.getDate()} de ${nomeMes}`+
            ` de ${data.getFullYear()} ` +
            `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
        );
    }

    h1.innerHTML = criaData(data);