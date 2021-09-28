const Sequelize = require('sequelize')

 
const URL_BD = "postgres://iwjhvlvv:YA9Ez1In2L_eC9gGaQmNxb1FQnZwN6bs@fanny.db.elephantsql.com/iwjhvlvv"; 
 
let database = null; 
try { 
    database = new Sequelize(URL_BD, { 
        logging: false, 
    }); 
 
    database 
        .authenticate() 
        .then(() => { 
            console.log("Conexão realizada com o SGBD"); 
        }) 
        .catch((error) => { 
            console.error("Não foi possível conectar com o SGBD:", error.message); 
        }); 
} catch (e) { 
    console.log(e.message); 
} 
 
module.exports = database;