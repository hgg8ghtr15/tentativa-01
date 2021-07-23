const Sequelize = require("sequelize")
const conexao = require("./database")

const Patrimonio = conexao.define("patrimonios", {
  nome:{
    type: Sequelize.STRING,
    allownull: false
  },
  numero:{
    type: Sequelize.STRING,
    allownull: false
  },
  tipo:{
    type: Sequelize.STRING,
    allownull: false
  },
  local:{
    type: Sequelize.STRING,
    allownull: false
  }
})

Patrimonio.sync({force:false})
.then(()=>{console.log("Tabela criada com sucesso")})
.catch((error)=>{console.log(error)})

module.exports = Patrimonio