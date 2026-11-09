const prompt = require("prompt-sync")()

const catalogo = []
const limiteEstoqueBaixo = Number(prompt("Digite o limite de estoque baixo: "))

let proximoValor = prompt("Digite a quantidade de produtos ou o nome do primeiro produto: ")

let quantidadeDeProdutos = 4 
if (Number(proximoValor) > 0) {
    quantidadeDeProdutos = Number(proximoValor)
} else {
    primeiroNome = proximoValor
}

let precoMaisCaro = 0
let produtoMaisCaro = "Aguardando"
let produtosComEstoqueBaixo = 0
let estoqueTotal = 0

for (let i = 1; i <= quantidadeDeProdutos; i++) {
    
    const nome = prompt(`Digite o nome do produto ${i}: `)
    const preco = Number(prompt(`Digite o preço do produto ${i}: `))
    const estoque = Number(prompt(`Digite o estoque do produto ${i}: `))
    
    estoqueTotal += estoque

    const produtoNovo = { nome: nome, preco: preco, estoque: estoque }
    catalogo.push(produtoNovo)

    if (preco > precoMaisCaro) {
        precoMaisCaro = preco
        produtoMaisCaro = nome
    }

    if (estoque <= limiteEstoqueBaixo) {
        produtosComEstoqueBaixo++
    }
}

const produtoAumento = prompt("Digite o produto a ser reajustado: ")
const aumento = Number(prompt("Digite o valor do reajuste: "))

const produtoDesejado = catalogo.find(produto => produto.nome === produtoAumento)

if (produtoDesejado) {
    produtoDesejado.preco += aumento
}

const resumo = "Produtos cadastrados: " + catalogo.length + ". Estoque total de " + estoqueTotal

module.exports = {
    catalogo,
    limiteEstoqueBaixo,
    produtoMaisCaro,
    estoqueTotal,
    produtosComEstoqueBaixo,
    resumo
}
