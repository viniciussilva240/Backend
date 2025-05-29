import rl from 'readline-sync';
 

//como declarar um objeto:

//let car = {marca: 'toyota' , modelo: 'corola'}

//como chamar um objeto:

//console.log(car.modelo)

// dentro dos objetos são chamados de métodos

function vep(a) {
    if (a % 2 === 0) {
        return 'par';       
    }else{
        return 'impar';
    }  
}

let resultado= vep(11);
      console.log(resultado)