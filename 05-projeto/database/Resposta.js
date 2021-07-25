const Sequelize = require("sequelize")
const connect = require("./database")

const Resposta = connect.define("respostas", {
  corpo:{
    type: Sequelize.TEXT,
    allownull: false
  },
  perguntaid:{
    type: Sequelize.INTEGER,
    allownull: false
  }
})

Resposta.sync({force:false})

module.exports = Resposta