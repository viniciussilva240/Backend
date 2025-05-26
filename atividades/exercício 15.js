import readl from 'readline-sync';

let x = readl.questionFloat('informe o valro x: ');
let y = readl.questionFloat('infrome o valor y: ');
let op = readl.questionInt('escolha uma opção: \n[1] para soma \n[2] para subtração \n[3] para multiplacação \n[4] para divisão ');

switch (op) {
    case 1:
        console.log(`${x} + ${y} = ${x + y}`);
        break;
    case 2:
        console.log(`${x} - ${y} = ${x - y}`);
        break;
    case 3:
        console.log(`${x} x ${y} = ${x * y}`);
        break;
    case 4:
        console.log(`${x} / ${y} = ${x / y}`);
        break;
    default:
        console.log("selecione um numero valido")
        break;
}