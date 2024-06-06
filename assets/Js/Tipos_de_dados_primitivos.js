// String, Number, undefined, null, boolean, symbol
const nome = "Vinicius"; // String
const nome1 = "Vinicius"; // String
const nome2 = `Vinicius`; // String
const num1 = 10; // Number
const num2 = 10.52; // Number
let nomeAluno; // undefined -> não aponta pra local nenhuma na memoria
let sobrenomeAluno = null; // Nulo -> não aponta pra local nenhuma na memoria
const aprovado = false; // Boolean = true, false (Logico)

console.log(typeof aprovado, aprovado);

let a = 2;
let b = a;

console.log(a, b); // 2 2

a = 3;
console.log(a, b); // 3 2
