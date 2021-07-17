const express = require('express');

const app = express();

app.set("view engine","ejs")

app.get("/", (request, response) => {
  return response.render('index')
})

app.get("/home", (request, response) => {
  return response.render('principal/index')
})

app.get("/variavel", (request, response) => {
  var nome = "fabio"
  var idade = 32
  return response.render('04-variaveis/index', {nome:nome, idade:idade})
})

app.get("/variavel/:nome/:idade", (request, response) => {
  var {nome, idade} = request.params
  return response.render('04-variaveis/index', {nome:nome, idade:idade})
})

app.get("/condicional/:nome", (request, response)=>{
  var {nome} = request.params
  var exibirmsg = false
  
  if (nome){
    exibirmsg = true
  }

  return response.render("05-condicional/index", 
    {
      exibirmsg: exibirmsg,
      nome: nome
    }
  )
})

app.get("/repeticao", (request, response)=>{

  var produtos = [
    { nome:"Coca-cola",valor: 10 },
    { nome:"Fanta",valor: 5 }
  ]
  return response.render("06-repeticao/index", {produtos: produtos})
})

app.listen(4000,()=>{
  console.log("Servidor online")
})

