const Sequelize =  require("sequelize")
const connect = require("./database")

const Pergunta = connect.define("perguntas", {
  titulo:{
    type: Sequelize.STRING,
    allownull: false
  },
  descricao:{
    type: Sequelize.TEXT,
    allownull: false
  }
})

Pergunta.sync({force:false}).
then(()=>{console.log("Tabela Pergunta Criada!")})
.catch((msgError) => {console.log(msgError)})

module.exports = Pergunta