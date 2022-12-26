function mostrandoData() {
    const sec = document.querySelector('.container');
    const data = new Date('06-06-2001 21:57:00');
    const numeroDiaSemana = data.getDay();
    const diaSemana = getdiaSemana(numeroDiaSemana);
    const numeroMes = data.getMonth();
    const diaMes = data.getDate();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const mes = getMes(numeroMes);
        sec.innerHTML = `${diaSemana}, ${diaMes} de ${mes} de ${ano} ${hora}:${min}`;

    
    function getdiaSemana(numeroDiaSemana) {
        let diaSemanaTexto;
        switch (numeroDiaSemana) {
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
                return diaSemanaTexto = 'Sexta';
            case 6:
                return diaSemanaTexto = 'Sábado';
            default:
                return diaSemanaTexto = 'Só temos 7 dias na semana, dia inválido.';
        }
    }
}
mostrandoData();
