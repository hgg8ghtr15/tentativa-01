const express = require("express")

const app = express()

app.use(express.json())

const usuarios = []

app.set("view engine", "ejs")

app.get("/home", (request, response) => {

  return response.render("home/index")
})


app.post("/usuario", (request, response)=>{
  const {nome, idade, sexo} = request.body
  const usuario = {
    nome: nome, 
    idade: idade, 
    sexo: sexo
  }
  usuarios.push(usuario)

  return response.send("Usuario cadastrado com sucesso!")
})

app.get("/usuario", (request, response)=>{

  return response.render("usuario/index", { usuarios: usuarios})
})

app.listen(4000, ()=>{
  console.log("Servidor online")
})