const prompt = require("prompt-sync")()

let meta = 0
let lotes = 0

do {
  meta = Number(prompt("Meta de lotes (maior que 0): "))
} while (meta <= 0);

while(lotes < meta){
    lotes++
}

module.exports = lotes