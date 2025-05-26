import rl from 'readline-sync';

let num = rl.questionInt('informe um número: ');
let cont= 1;
while (cont <= 10) {
    console.log(`${num} x ${cont} = ${num *cont}`);
    cont++;
    
}