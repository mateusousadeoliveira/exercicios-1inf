const prompt = require("prompt-sync")()

const dias = Number(prompt("Quantos dias? "))
let vendaHoje = 0
let totalProduzido = 0

for(let dia = 1; dia <= dias; dia++){
    vendaHoje = Number(prompt(`Venda do dia ${dia}: `))

    totalProduzido += vendaHoje
}

console.log(totalProduzido)
module.exports = totalProduzido;
