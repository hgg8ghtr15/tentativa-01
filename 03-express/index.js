const express = require("express")

const app = express()

app.get("/", function(req, res){

    return res.send("Bem vindo a pagina home...")
})

/*
    parametos
*/ 
// rota obrigatoria
app.get("/home/:nome", function(req, res){
    let nome = req.params.nome
    return res.send("<h1>Bem vindo " + nome + "</h1>")
})

// rota nao obrigatória
app.get("/blog/:titulo?", function(req, res){
    let titulo = req.params.titulo
    
    if (titulo){
        return res.send("<h1> Titulo: "+ titulo +"</h1>")
    }else{
        return res.send("<h1> Não há titulo disponível </h1>")
    }
})

/*
    query paramentos /url?nome=fabio
*/ 
// query paramentos
app.get("/usuario", function(req, res){
    let usuario = req.query["nome"]

    if (usuario){
        return res.send(usuario)
    }else{
        return res.send("Usuário não informádo.")
    }
})

// servidor start
app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro!")
    }else{
        console.log("Servidor inicializado com sucesso!")
    }
})