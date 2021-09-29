// import dos modulos utilizados

const express = require('express')
const bodyParser = require('body-parser')
const database = require('./database/conexao')
const Route = require('./routes/index')
const Operacao = require('./models/tabela_operacao')
const app = express()



// Servidor Escutando na Porta 3100

app.use(Route)
app.listen

app.listen(3100, () => {
    console.log('Servidor rodando na porta 3100')
})
