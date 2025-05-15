
class Imovel {
    constructor(num, quartos, tipo, endereco) {
        this.num = num;
        this.quartos = quartos;
        this.tipo = tipo;
        this.endereco = endereco;
    }

    exibirInformacoes() {
        return `${this.num}° Imóvel, com ${this.quartos} quartos, tipo: ${this.tipo}, localizado no ${this.endereco}.`;
    }
}

let casa = new Imovel(1, 4, "Casa", "Rua da Amizade, 789 - Bairro Alegre");
let apartamento = new Imovel(2, 2, "Apartamento", "Avenida da Paz, 123 - Centro");

console.log(`${casa.exibirInformacoes()} \n${apartamento.exibirInformacoes()}`)
