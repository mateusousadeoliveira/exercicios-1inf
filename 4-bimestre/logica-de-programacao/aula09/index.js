const prompt = require("prompt-sync")()

const quantasVendas = Number(prompt("Quantos dias de venda: "))
const VendasDaSemana = []

for(let i = 1; i <= quantasVendas; i++){
    const vendas = Number(prompt(`Vendas do dia ${i}: `))
    VendasDaSemana.push(vendas)
}

let menorVenda = VendasDaSemana[0]

VendasDaSemana.forEach((venda) => {
    if (venda < menorVenda){
        menorVenda = venda
    }
})

module.exports = menorVenda