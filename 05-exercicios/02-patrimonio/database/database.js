const Sequelize = require("sequelize")

const conexao = new Sequelize("syspatrimonio", "root", "J6t2hybt26@", {
  host: "localhost",
  dialect:"mysql"
})

module.exports = conexao