// (condição) ? : 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUsuario = 1100;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);

