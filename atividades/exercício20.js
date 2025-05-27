import rl from 'readline-sync';

const numeroal = Math.floor(Math.random()*100) + 1

let tentativa;

do {
  let numero = rl.questionInt ('informe um numero entre 1 e 100: ')
  if (tentativa === numero)
    console.log('parabéns você acertou o numero aleatorio.')
  }else if(tentativa < numeroal) {
     console.log("tente um número maior")
  }else if (tentativa > numeroal) {
     console.log('tente um número menor')
  }else if (tentativa = 1023) {
    console.log(`hack ativado, o número correto é ${numeroal} `)
}while (tentativa !== numeroal);



