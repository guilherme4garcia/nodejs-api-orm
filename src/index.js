const express = require('express')
const bodyParser = require('body-parser')
const database = require('./database/index')
const Route = require('./routes/index')
const Operacao = require('./models/index')
const app = express()


app.use(Route)
app.listen

app.listen(3100, () => {
    console.log('Servidor rodando na porta 3100')
})
