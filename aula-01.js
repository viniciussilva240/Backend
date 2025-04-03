let valor = 20.250000;
let text= "Meu primeiro projeto em javaScript"
let boleando = true;

console.log (valor.toFixed(2)); //aredonda o valor para duas casas decimais
console.log('tipo:' + typeof valor); //Retorna o tipo da variável
console.log (text.toUpperCase()); //converte o texto para maiúsculas
console.log('tipo:' + typeof text);// Retorna o tipó da variável
console.log (boleando.toString()); //converte para texto
console.log('tipo:' + typeof boleando) //Retorna o tipo da variável

let estados = ["São Paulo", "Rondônia", "Minas Gerais", "Acre"]
let marcaCarros = [];
marcaCarros.push  ('fiat')
console.log(estados[2])
console.log(marcaCarros[0])
console.log('tamanho: ' + estados.length)// contar a quantidades de itens dentro de uma lista
console.log('total de letras: '+ marcaCarros[0].length) //conctenação
console.log(`Estado: ${estados[1]}`); //interpolação
