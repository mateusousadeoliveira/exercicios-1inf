const prompt = require("prompt-sync")()

const subtotal = Number(prompt("Subtotal do pedido: "))

function calcularFrete(valor){
    if(valor >= 80){
        return 0
    } else{
        return 10
    }
}

const frete = calcularFrete(subtotal)

module.exports = frete