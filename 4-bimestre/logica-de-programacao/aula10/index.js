const prompt = require("prompt-sync")()

const produto = {
    nome: prompt("Digit o nome do produto: "),
    preco: Number(prompt("Digite o preço do produto: ")),
    estoque: Number(prompt("Digite o estoque do produto: "))

}

const aumento = Number(prompt("Digite o aumento do reajuste: "))
produto.preco += aumento

module.exports = produto