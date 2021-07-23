const express = require("express")
const bodyParser = require("body-parser")
const conexao = require("./database/database")
const Patrimonio = require("./database/patrimonio")


const app = express()

app.use(express.json())


/**
 * Configuração Data base
 */
conexao.authenticate()
.then(() => {console.log("Conexão realizada")})
.catch((msg_error) => {console.log(msg_error)})

/**
 * configuração de paginas estaticas.
*/
app.set("view engine","ejs")
app.use(express.static("public"))

/**
 * receber raquest body
 */

app.use(express.urlencoded({ extended:false}))
app.use(bodyParser.json())


app.get("/", (request,response) =>{
  return response.render('index')
})

app.get("/patrimonio", (request,response) =>{
  Patrimonio.findAll({raw:true}).then(patrimonios =>{
    response.render("patrimonio/index", {patrimonios:patrimonios})
  })
  
  // return response.render('patrimonio/index')
})
app.get("/patrimonio/cadastrar", (request,response) =>{
  return response.render('patrimonio/cadastrar')
})

app.post("/patrimonio/cadastrar", (request,response) =>{
  const {nome, numero, tipo, local} = request.body
  Patrimonio.create(
    {
      nome: nome,
      numero: numero,
      tipo: tipo,
      local: local
    }
  ).then(() => {
    response.redirect("/patrimonio/cadastrar")
  })
})


app.listen(4000, () => {
  console.log("Servidor online")
})
