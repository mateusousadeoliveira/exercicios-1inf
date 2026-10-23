const prompt = require("prompt-sync")()
const quantidadeDeDias = Number(prompt("Digite a quantidade de dias: "))
const metaDiaria = Number(prompt("Digite a meta diária: "))
const metaSemanal = Number(prompt("Digite a meta semanal: "))
let totalVendido = 0
let vendaHoje = 0
let mediaVendas = 0
let diasAcimaDaMeta = 0
let melhorDia = 0
let situacaoSemana = "Aguradando"

for(let dia = 1; dia <= quantidadeDeDias; dia++ ){
    vendaHoje = Number(prompt(`Venda do dia ${dia}: `))
    totalVendido += vendaHoje

    if(vendaHoje >= metaDiaria){
        diasAcimaDaMeta++
    }

    if(vendaHoje > melhorDia){
        melhorDia = vendaHoje
    }

}

if(totalVendido >= metaSemanal){
    situacaoSemana = "Meta semanal atingida"
} else{
    situacaoSemana = "Meta semanal não atingida"
}

mediaVendas = totalVendido / quantidadeDeDias

const resumo = `Quantidade de dias: ${quantidadeDeDias}
Meta diária: ${metaDiaria}
Meta semanal: ${metaSemanal}
Total vendidos: ${totalVendido}
Médias de vendas: ${mediaVendas}
Dias acima da meta ${diasAcimaDaMeta}
Melhor venda diária: ${melhorDia}
Situação da semana: ${situacaoSemana}`

console.log(resumo)

module.exports = {
    quantidadeDeDias,
    metaDiaria,
    metaSemanal,
    totalVendido,
    mediaVendas,
    diasAcimaDaMeta,
    melhorDia,
    situacaoSemana,
    resumo
}