const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5; //tome cuidado pois nessa ocasição você perde o primeiro valor do seu resultadoTriplicado, é interessante que se possível, você tente ao máximo manter os seus valores iniciais nas suas variáveis e ir evoluindo ela ao longo do código, e não ir modificando ela ao longo do código.
console.log(resultadoTriplicado);