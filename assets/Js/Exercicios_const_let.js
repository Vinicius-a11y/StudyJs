/*
Vinicius Bueno tem 22 anos, peso 100 kg
tem 1.8 de altura e sei IMC é de */

const nome = 'Vinicius'
const sobrenome = 'Bueno'
const idade = 23;
const peso = 84;
const alturaEmM = 1.80;
let indiceMassaCorporal; //peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2024 - idade;


console.log(`${nome}, ${sobrenome} tem ${idade} anos pes ${peso} Kg`)
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`)
console.log(`${nome} nasceu em ${anoNascimento}. `)