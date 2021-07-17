const { response } = require('express')
const express = require('express')
const {v4: uuidv4} =  require('uuid')

const app = express()

app.use(express.json())

const banco = []

/*
MIDDLEWARE
*/
function verificar_cpf_existe(req, res, next) {
  const {cpf} = req.headers
  const cliente = banco.find((cliente) => cliente.cpf === cpf)

  if(!cliente){
    return res.status(400).json({error:"Usuário não existe"})
  }
  req.cliente = cliente
  return next()
}

/*
Cadastro de cliente
*/
app.post("/conta", (request, response) => {
  const {cpf, nome} = request.body
  
  const cpf_existente =  banco.some(
    (cliente) => cliente.cpf === cpf
  )
  if (cpf_existente){
    return response.status(400).json({error:"Usuario já existe !"})
  }
  banco.push({
    id: uuidv4(), 
    cpf, 
    nome, 
    saldo:0,
    estrato:[]
  })
  return response.status(201).send("Usuário criado com sucesso")
})

/*
Busca estrato
*/
app.get("/estrato", verificar_cpf_existe, (req, res) => {
  // const {cpf} = req.params
  const {cliente} = req
  return res.json(cliente)
})

/*
Deposito
*/
app.post("/deposito", verificar_cpf_existe, (req, res)=>{
  const {cliente} = req
  const {descricao, montante, data} = req.body

  const newdata = new Date(data)
  cliente.saldo = cliente.saldo + montante
  cliente.estrato.push({
    descricao, 
    montante,
    data: newdata
  })

  return res.send("Deposito efetuado com sucesso")
})
/*
Deposito
*/
app.post("/sacar", verificar_cpf_existe, (req, res)=>{
  const {cliente} = req
  const {descricao, montante, data} = req.body
  const newdata = new Date(data)

  if(cliente.saldo <= montante){
    return res.json({error:"Saldo insuficiente"})
  }

  cliente.saldo = cliente.saldo - montante
  cliente.estrato.push({
    descricao, 
    montante,
    data: newdata
  })
  return res.send("Saque efetuado com sucesso")
})


/*
estrato por data
*/
app.get("/estrato/data", verificar_cpf_existe, (req, res)=>{
  const {cliente} = req
  const {data} = req.query
  const newdata =  new Date(data)
  const estratos = cliente.estrato.filter((estrato) => estrato.data.getUTCDate() === newdata.getUTCDate())
  
  return res.json({estratos})
})


/*
Alterar dados do cliente
*/

app.put("/conta/cliente/altera", verificar_cpf_existe, (req, res)=>{
  const {cliente} = req
  const {nome} = req.body

  cliente.nome = nome

  return res.send("Nome atualizado com sucesso.")
})

app.delete("/conta/delete", verificar_cpf_existe, (req, res)=>{
  const {cliente} = req
  banco.splice(cliente, 1)
  return res.send("Cliente detectedo com sucesso")
})

app.get("/home", (req, res) => {
  return res.send("Seja bem vindo...")
})

app.listen(4444,()=>{
  console.log("Server Online!")
})