const express = require('express');
const bodyParser = require('body-parser');
const connect = require('./database/database')
const Pergunta = require("./database/Pergunta")

/**
 * database conexão
 */
connect.authenticate()
.then(() => {console.log("Conexão realizada com sucesso! ")})
.catch((msgError) => {console.log(msgError)})

/**
 * 
 * alter user "root"@"localhost" identified with mysql_native_password by "J6t2hybt26@"

 */

const app = express();
/**
 * configuração de paginas estaticas.
*/
app.set("view engine","ejs")
app.use(express.static("public"))

/**
 * Modeulo para receber o post em body
*/
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.get("/", (request, response) => {
  Pergunta.findAll({raw:true}).then(perguntas =>{
    // console.log(perguntas)
    response.render('index', {perguntas:perguntas})
  })
})

app.get("/listar", (request, response) => {
  Pergunta.findAll({raw:true}).then(perguntas =>{
    // console.log(perguntas)
    response.render('perguntar/listar', {perguntas:perguntas})
  })
})

app.get("/perguntar", (request, response) => {
  return response.render('perguntar/index')
})

app.post("/salvarpergunta", (request, response)=>{
  const {titulo, descricao} =  request.body
  
  Pergunta.create(
    {
      titulo:titulo, 
      descricao:descricao
    }).then(() => {
      response.redirect("/")
    })
  // return response.redirect("/listar")
})
app.listen(4000,()=>{
  console.log("Servidor online")
})

