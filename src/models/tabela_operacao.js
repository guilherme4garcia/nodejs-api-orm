const Sequelize = require('sequelize')
database = require('../database/conexao')
    
 
// Cria uma tabela no Elephant SQL

const Operacao = database.define('Operacoes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,    
        allowNull: false,
        primaryKey: true
    },
    op: {
        type: Sequelize.STRING,
        allowNull: false
    }

})


Operacao.sync()
///Operacao.sync({force: true})         /// recreate the table everytime
module.exports = Operacao;