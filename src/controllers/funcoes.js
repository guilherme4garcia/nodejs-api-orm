
// Funções retornam o cálculo em um formato JSON ex: { "op": "32 + 27 = 59" }

const subtracao = function (req) {
    const calculo = req.x - req.y
    const resposta = `${req.x} - ${(req.y)} = ${calculo}`
    const op_json = {"op" : resposta}
    return op_json
}

const soma = function (req) {
    const calculo = req.x + req.y
    const resposta = `${req.x} + ${(req.y)} = ${calculo}`
    const op_json = {"op" : resposta}
    return op_json
}

module.exports = {subtracao, soma}
