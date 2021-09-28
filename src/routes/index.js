const express = require('express')
const router = express.Router()
const controller = require('../controllers/index')
const bodyParser = require('body-parser')
const Operacao = require('../models/index')
const Sequelize = require('sequelize')


const jsonParser = bodyParser.json()

router.get('/', (req, res) => {
    res.send('Home')
})

router.post('/sum', jsonParser,  (req, res) => {
    const result = controller.soma(req.body)
    Operacao.create(controller.soma(req.body))
    
    res.send(result)
})


router.post('/difference', jsonParser, (req, res) => {
    const result = controller.subtracao(req.body)
    res.send(result);
})

router.get('/list', (req, res) => {
    
    async function query () {
        const db_query = await Sequelize.query('SELECT * FROM "public"."Operacoes"')
        return db_query
    }

    res.send(query())
})

module.exports = router