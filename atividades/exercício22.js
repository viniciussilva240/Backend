import rl from 'readline-sync'

const pessoa = {
    nome: 'Vinicius Silva Martins Costa',
    datam: "22/02/2025",
    cpf: 1212121212,
    sexo: 'M'
}

for (const key in pessoa) {
    console.log(`${key}: ${pessoa[key]}`);
}

const cores = ["Branco", "azul", "verde", "preto", "roxo", "amarelo"];
for (const elemento of cores){
    valores += elemento + ", ";

}

console.log(valores)