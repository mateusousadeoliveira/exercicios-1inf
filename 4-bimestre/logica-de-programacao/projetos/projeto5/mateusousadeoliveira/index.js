const prompt = require("prompt-sync")()

const nomeTurno = prompt("Digite o nome do turno: ")
const meta = Number(prompt("Digite sua meta: "))
const  producaoInicial = Number(prompt("Digite a produção inicial: "))
const pecasPorCaixa = Number(prompt("Digite a quantidade de peças por caixa: "))
let situacaoMeta = "Meta atingida"
let caixasNecessarias = 0
let producaoFinal = producaoInicial


while(producaoFinal < meta){
    producaoFinal++
    situacaoMeta = producaoFinal >= meta ? "Meta atingida" : "Meta não atingida"
}

let restante = producaoFinal

do {
    restante -= pecasPorCaixa
    caixasNecessarias++
} while(restante > 0)

const resumo = `Turno: ${nomeTurno}
Meta: ${meta}
Produção inicial: ${producaoInicial}
Produção final: ${producaoFinal}
Caixas necessárias: ${caixasNecessarias}
Situação da meta: ${situacaoMeta}`

console.log(resumo)



module.exports = {
    nomeTurno,
    meta,
    producaoInicial,
    pecasPorCaixa,
    producaoFinal,
    caixasNecessarias,
    situacaoMeta,
    resumo
}