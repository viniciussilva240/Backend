import rl from 'readline-sync'
for (let i = 0; i < i <= 10; i++) {
    let nome = rl.question(`Informe o nome da ${i}º pessoa: `)
    let salario = rl.questionFloat(`Informe o salário de ${nome}: `)

    let ir = 0;
    if (salario <= 2100) {
        ir = 0
    } else if (salario <= 2800) {
        ir = salario * 0.075;

    } else if (salario <= 3750) {
        ir = salario * 0.15;
    } else if (salario <= 4660) {
        ir = salario * 0.275
    }
    console.log(`imposto de renda devido`)
    console.log(`nome: ${nome} \n Imposto de renda: R$ ${ir.toFixed(2)} \n`)
}
