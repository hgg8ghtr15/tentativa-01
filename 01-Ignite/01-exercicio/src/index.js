const express = require('express')
const {v4: uuidv4} =  require('uuid')

const app = express()

app.use(express.json())

const patrimonios = []

/*
  id  
  numero
  nome
  valor
  lançamentos []
*/

/*
####### Cadastro de patrimonio
*/
app.post("/patrimonio/cadastrar", (request, response) => {
  const { numero, nome, valor } = request.body
  const patrimonio = patrimonios.some((patrimonio) => patrimonio.numero === numero)
  if(patrimonio){
    return response.status(400).json({error: "Este patrimonio existe."})
  }

  patrimonios.push({
    id : uuidv4(),
    numero,
    nome,
    valor,
    lancamentos:[]
  })
  return response.status(200).send("Patrimonio cadastrado com sucesso...")
})

/*
###### listar patrionios
*/

app.get("/patrimonios", (request, response) => {
  if(!patrimonios){
    return response.status(400).json({error: "Não exite patrimonio cadastrdos"})
  }
  return response.json({patrimonios})
})

function patrimonio_existe(request, response, next){
  const {numero} = request.headers
  const patrimonio = patrimonios.find((patri) => patri.numero === numero)

  if(!patrimonio){
    return response.status(400).json({error: "Patrimonio não existe."})
  }
  console.log(patrimonio)
  request.patrimonio = patrimonio
  return next()
}

/*
##### Buscar patrimonio
*/
app.get("/patrimonio",patrimonio_existe, (request, response)=>{
  const {patrimonio} = request
  return response.json({patrimonio})
})

/*
##### Editar patrimonio
*/
app.post("/patrimonio/alterar", patrimonio_existe, (request, response)=>{
  const {patrimonio} = request
  const {nome, numero, valor} = request.body
  patrimonio.nome = nome
  patrimonio.numero = numero
  patrimonio.valor = valor
  return response.send("Patrimonio atualizado com sucesso")
})

/*
##### Deletar patrimonio
*/
app.delete("/patrimonio/deletar", patrimonio_existe, (request, response)=>{
  const {patrimonio} = request
  const indice = patrimonios.indexOf(patrimonio)
  patrimonios.splice(indice, 1)
  return response.send(indice+" Removido")
})

app.get("/home", (req, res) => {
  return res.send("Seja bem vindo...")
})

app.listen(4444,()=>{
  console.log("Server Online!")
})