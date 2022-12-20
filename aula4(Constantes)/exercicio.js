const nome = 'Pedro Henrique'
const sobrenome = 'Figueiredo Pinto'
const idade = 21
const peso = 79
const alturaEmM = 1.85
let imc = (peso/(alturaEmM*alturaEmM))       // peso/(altura*altura)
let anoNascimento = (2022 - idade)
console.log(nome,sobrenome,'tem',idade,'anos, pesa',peso,'kg, tem',alturaEmM,'de altura e seu IMC é de',imc.toFixed(2))
console.log(nome,'nasceu em',anoNascimento)