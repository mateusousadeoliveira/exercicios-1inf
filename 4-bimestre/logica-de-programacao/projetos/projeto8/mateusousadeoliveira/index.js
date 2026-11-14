const prompt = require("prompt-sync")()

const precoUnitario = Number(prompt("Digite o preco: "))
const quantidade = Number(prompt("Digite a quantidade: "))
const formaPagamento = prompt("Digite a forma de pagamento: ")

const calcularSubtotal = (a, b) => a * b
const calcularFrete = (a) => {
        if(a >= 100){
            return 0
        } else{
            return 10
        }
}
const calcularDesconto = (sub, forma) => {
    let percentual = 0
    switch(forma){
        case "pix":
            percentual = 5
            break
        case "dinheiro":
            percentual = 5
            break
        case "cartao":
            percentual = 0
            break
    }

    return sub * percentual / 100
}
const calcularTotal = (preco, quant, forma) => {
   return calcularSubtotal(preco, quant) + calcularFrete(calcularSubtotal(preco, quant)) - calcularDesconto(calcularSubtotal(preco, quantidade), forma )

}

const total = calcularTotal(precoUnitario, quantidade, formaPagamento)
const subtotal = calcularSubtotal(quantidade, precoUnitario)
const frete = calcularFrete(subtotal)
const desconto = calcularDesconto(subtotal, formaPagamento)

const resumo =`
Preco: ${precoUnitario}
Quantidade: ${quantidade}
Forma de pagamento: ${formaPagamento}
Subtotal: ${subtotal}
Frete: ${frete}
Desconto: ${desconto}
Total: ${total}`

console.log(resumo)


module.exports = {
    precoUnitario,
    quantidade,
    formaPagamento,
    calcularSubtotal,
    calcularFrete,
    calcularDesconto,
    calcularTotal,
    subtotal,
    frete,
    desconto,
    total,
    resumo
}