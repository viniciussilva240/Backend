import readl from 'readline-sync';

let salario = readl.questionFloat('imforme seu salário: ');
let dog = readl.question('informe a categoria de bonificação:').toUpperCase();
let bonus = 0;

switch (dog) {
    case A:
        bonus = salario * 0.05;
        console.log(`salario atual: ${(salario + bonus)}.toLocaleString('pt-BR',{style:'currecy', currency:'BRL'}).`);
        break;
    case B:
        bonus = salario * 0.05;
        console.log(`salario atual: ${(salario + bonus)}.toLocaleString('pt-BR',{style:'currecy', currency:'BRL'}).`);
        break;
    case C:
        bonus = salario * 0.05;
        console.log(`salario atual: ${(salario + bonus)}.toLocaleString('pt-BR',{style:'currecy', currency:'BRL'}).`);
        break;
    case A:
        bonus = salario * 0.05;
        console.log(`salario atual: ${(salario + bonus)}.toLocaleString('pt-BR',{style:'currecy', currency:'BRL'}).`);
        break;


    default:
        break;
}