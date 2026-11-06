const prompt = require("prompt-sync")()

const quantidadeTurnos = Number(prompt("Quantos turnos: "))
let diasAcimaDaMedia = 0

for (let i = 1; i <= quantidadeTurnos; i++){
    const producao = Number(prompt(`Peças do turno ${i}: `))

    if(producao > 15){
        diasAcimaDaMedia++
    }
}

module.exports = diasAcimaDaMedia