const nome = "Mateus Oliveira"
const idade = 31
const categoria = "comum"
const possuiMatricula = true
const inadiplante = false
const valorMensalidade = 100
const valorPago = 100
let idadeStatus = "Aguardando"
let nivelAcesso = "Aguardando"
let acessoStatus = "Aguardando"
let pagamentoStatus = "Aguardando"
let troco = "Aguardando"
let statusAula = "Aguardando"

if (idade >= 18){
    idadeStatus = "Idade permitida"
} else {
    idadeStatus = "Idade não permitida"
}

if (categoria === "intrutor" || categoria === "coordenador"){
    nivelAcesso = "Acesso administartivo liberado"
} else {
    nivelAcesso = "Acesso comum"
}

if (possuiMatricula && idade >= 18 && !inadiplante){
    acessoStatus = "Acesso à aula liberado"
} else{
    acessoStatus = "Acesso à aula negado"
}

if (valorPago >= valorMensalidade){
    pagamentoStatus = "Pagamento aprovado"
    troco = valorPago - valorMensalidade
} else {
    pagamentoStatus = "Pagamento insuficiete"
    troco = 0
}

if (acessoStatus === "Acesso á aula liberado" && pagamentoStatus === "Pagamento aprovado"){
    statusAula = "Presença na aula confirmada"
} else {
    statusAula = "Presença na aula não confirmada"
}

const resumo = `Aluno: ${nome}
Categoria: ${categoria}
Nível de acesso: ${nivelAcesso}
Valor da mensalidade: ${valorMensalidade}
Valor pago: ${valorPago}
Troco: ${troco}
Situação do acesso: ${acessoStatus}
Situação do pagamento: ${pagamentoStatus}
Situação final: ${statusAula}`

console.log(resumo)

module.exports = {
    nome,
    idade,
    categoria,
    possuiMatricula,
    inadimplente,
    valorMensalidade,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusAula,
    resumo
}
