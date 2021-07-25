const express = require('express');
const bodyParser = require('body-parser');
const connect = require('./database/database')
const Pergunta = require("./database/Pergunta")
const Resposta = require("./database/Resposta")

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
  Pergunta.findAll({raw:true, order:[ 
    ["id", "DESC"]
    ]}).then(perguntas =>{
    // console.log(perguntas)  DESC = DECRESENTE | ASC = CRESENTE
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

app.get("/pergunta/:id", (request, response) => {
  const id = request.params.id
  
  console.log(id)

  Pergunta.findOne({
    raw:true,
    where:{id:id} 
  }).then(pergunta => {
    if(pergunta){
      Resposta.findAll({
        raw:true,
        where:{perguntaid:id},
        order:[
          ["id","DESC"]
        ]
      }).then(respostas => {
        return response.render("perguntar/pergunta",{pergunta:pergunta, respostas:respostas});
      })
    }else{
      console.log("Pergunta não encontrada.")
      response.redirect("/pergunta/"+id)
    }
  })
})
app.listen(4000,()=>{
  console.log("Servidor online")
})

app.post("/pergunta/:id", (request, response)=>{
  const id = request.params.id
  const {corpo} = request.body

  console.log(typeof(id))

  Resposta.create(
    {
      corpo:corpo,
      perguntaid:id
    }).then(()=>{
    response.redirect("/pergunta/"+id)
    // response.redirect("/pergunta/"+id)
  })
})
