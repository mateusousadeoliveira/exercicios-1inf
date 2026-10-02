const cliente = "Isabela Rezende"
const opcaoMenu = 3
const quantidade = 5
const formaPagamento = "pix"
let statusPedido = "aprovado"
let prato = "aguardando"
let precoUnitario = 0
let pagamentoMensagem = "Aguardando"
let descontoPercentual = 0
let statusMensagem = "Aguardando"

switch(opcaoMenu){
    case 1:
       prato =  "Casquinha"
       precoUnitario = 7
        break
    case 2:
        prato = "Milkshake"
        precoUnitario = 18
        break
    case 3:
        prato = "Sundae"
        precoUnitario = 16
        break
    case 4:
        prato = "Picolé"
        precoUnitario = 5
        break
    default:
        prato = "Opção inválida"
        precoUnitario = 0
        break
}

const subtotal = precoUnitario * quantidade
const frete = subtotal >= 40 ? 0 : 10
const freteStatus = frete === 0 ? "Frete grátis" : "Frete pago"

switch (formaPagamento){
    case "pix":
        pagamentoMensagem = "Pagamento via PIX"
        descontoPercentual = 0
        break
    case "cartao":
        pagamentoMensagem = "pagamento via cartão"
        descontoPercentual = 15
        break
    case "dinheiro":
        pagamentoMensagem = "Pagamento via dinheiro"
        descontoPercentual = 15
    default:
        pagamentoMensagem = "Forma de pagamento inválida"
        descontoPercentual = 0
        break
}

const desconto = descontoPercentual * subtotal / 100
const total = subtotal - desconto + frete

switch(statusPedido){
    case "pendente":
        statusMensagem = "Aguardando pagamento"
        break
    case "aprovado":
        statusMensagem = "Pedido em preparo"
        break
    case "enviado":
        statusMensagem = "Pedido a caminho"
        break
    case "cancelado":
        statusMensagem = "Pedido cancelado"
        break
    default:
        statusMensagem = "Status desconhecido"
        break

}

const resumo = `
Cliente: ${cliente}
Item: ${prato}
Quantidade: ${quantidade}
Subtotal: R$${subtotal}
Situação do frete: ${freteStatus}
Frete: ${frete}
Forma de pagamento; ${pagamentoMensagem}
Desconto: ${desconto}
Pagamento: ${statusPedido}
Situação do pedido: ${statusMensagem}
`

console.log(resumo)

module.exports = {
    cliente,
    opcaoMenu,
    quantidade,
    formaPagamento,
    statusPedido,
    prato,
    precoUnitario,
    subtotal,
    freteStatus,
    frete,
    pagamentoMensagem,
    descontoPercentual,
    desconto,
    total,
    statusMensagem,
    resumo
}