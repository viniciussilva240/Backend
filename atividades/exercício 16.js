import readl from 'readline-sync';

let salario = readl.questionFloat('imforme seu salário: ');
let dog = readl.question('informe a categoria de bonificação: ').toUpperCase();
let bonus = 0;



switch (dog) {
    case dog = "A":
        bonus = salario * 0.05;
        console.log(`salario atual: ${(salario + bonus)}`);
        break;
    case dog = "B":
        bonus = salario * 0.05;
        console.log(`salario atual: ${(salario + bonus)}`);
        break;
    case dog = "C":
        bonus = salario * 0.05;
        console.log(`salario atual: ${(salario + bonus)}`);
        break;
    case dog = "D":
        bonus = salario * 0.05;
        console.log(`salario atual: ${(salario + bonus)}`);
        break;


    default:
        break;
}