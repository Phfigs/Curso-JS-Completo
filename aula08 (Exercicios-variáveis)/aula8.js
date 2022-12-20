let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A
let varN;
console.log(varA, varB, varC);
/*
varN = varA
varA = varB;
varB = varC;
varC = varN;
*/
[varA, varB, varC] = [varB, varC, varA]; //mais moderno

console.log(varA, varB, varC);