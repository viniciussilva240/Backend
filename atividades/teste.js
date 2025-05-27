import rl from 'readline-sync';// server para usara o imput (let pesquisa = rl.question)

let idade = 25;       // Número
let nome = "Maria";    // String
let ativo = true;      // Booleano
let frutas = ["maçã", "banana", "laranja"]; // Array
let pessoa = { nome: "João", idade: 30 };   // Objeto

console.log(nome);  // Saída: Maria

let a = 10, b = 5;
console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0 (resto da divisão)


let x = 10, y = 20;
console.log(x == y);  // false (igualdade)
console.log(x !== y); // true (diferente)
console.log(x < y);   // true (menor)


let idade = 18;

if (idade < 18) {
    console.log("Menor de idade");
} else if (idade === 18) {
    console.log("Você tem 18 anos");
} else {
    console.log("Maior de idade");
}

