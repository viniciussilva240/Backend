import rl from 'readline-sync';

let numal = rl.questionInt('informe o número de alunos na turma: ');
let somam = 0;
let contador = 1;

while (contador <= numal){


     console.log(`aluno ${contador}:`);

     let soman = 0;
     let contadorbimestre = 1;
     
    while(contadorbimestre <=4 ){
        let nota = rl.questionInt(`informe a nota do ${contadorbimestre}º bimestre para `)
        soman = soman + nota;
        contador++;
    
    }
    let medialuno = soman / 4
    somam += medialuno;
    console.log(`média do aluno ${contador}: ${medialuno.toFixed(2)}`);
    contador ++;
}

let mediageralturma = somam / numalunos;
console.log(`média geral da turma: ${mediageralturma.toFixed(2)}`)