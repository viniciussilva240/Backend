import rl from 'readline-sync';

//function  soma(a,b) {
//    return a + b;
//}

//let a = rl.questionInt('digite um numero: ')
//let b = rl.questionInt('digite outro numero: ')

//let res = soma(a, b);
//console.log(`a soma de ${a} + ${b} = ${res}`)


//function porcetagen(a,b) {
//    return a*b/100;
//}
//let  a = rl.questionInt('digite um numero: ')
//let  b = rl.questionInt('digite uma porcetagem: ')
//let cal = porcetagen(a, b);
//console.log(`${b}% de ${a} é igual a ${cal}`)

let nota = rl.questionInt('digite um numero entre 0 e 10: ');

while (nota <0, nota >10 ) {
    console.log('por favor digite um numero valido entre 0 e 10');
    nota = rl.questionInt('digite um numero entre 0 e 10: ');
      
}
console.log(`numero salvo com sucesso`)