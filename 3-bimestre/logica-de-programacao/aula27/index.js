const idade = 25
const cargo = "gerente"
const ativo = true
let resultado

if (idade >= 18 && cargo === "gerente" && ativo){
    resultado = "Acesso permitido"
} else {
    resultado = "Acesso negado"
}
 console.log(resultado)

// === FIM DO CÓDIGO =======================
// === NÃO FAZER NADA ABAIXO DESSA LINHA ===
module.exports = resultado