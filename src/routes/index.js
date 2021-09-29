const express = require('express')
const router = express.Router()
const controller = require('../controllers/funcoes')
const bodyParser = require('body-parser')
const Operacao = require('../models/tabela_operacao')
const Sequelize = require('sequelize')

// Parse incoming request bodies in a middleware before your handlers
const jsonParser = bodyParser.json()


// Routes

router.get('/', (req, res) => {
    res.send('Home')
})

// Realiza operação de Soma, atraves de uma chamada 'POST"

router.post('/sum', jsonParser,  (req, res) => {
    const result = controller.soma(req.body)
    Operacao.create(controller.soma(req.body))
    
    res.send(result)
})


// Realiza operação de Subtração, atraves de uma chamada 'POST"

router.post('/difference', jsonParser, (req, res) => {
    const result = controller.subtracao(req.body)
    res.send(result);
})


// Lista todos os dados presentes no BD

router.get('/list', async (req, res) => {

  
    try {
        const list = await Operacao.findAll();
        const status = 200
        console.log(list.every(op => op instanceof Operacao)); // true
        const body = `Todas as operações: ${JSON.stringify(list, null, 2)}`
        res.send(status, body)
    } catch(e) {
        // catch errors and send error status
        console.log(e);
        res.sendStatus(500);
    }
    
    
    
})

module.exports = router