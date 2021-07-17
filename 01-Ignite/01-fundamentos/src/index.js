const express = require("express")

const app = express()

app.use(express.json())
/*
* GET - busca
* POST - inserir
* PUT -  altera
* PATH - altera
* DELETE - deleta
*/

/*
* Router - params (Editar/deletar/buscar)
* QUERY - params (paginação, filtro)
* BODY - params  objetos ( inserção / alteração)
*/

app.get("/home", (req, res) => {
  return res.json({message:"Bem vindo."})
})

app.get("/cursos", (req, res) => {
  const query = req.query
  console.log(query)
  return res.json(["Curso 1, Curso 2, Curso 3, Curso 4, Curso 5"])
})

app.post("/cursos", (req, res) => {
  const body = req.body
  console.log(body)
  return res.json(["Curso 1, Curso 2, Curso 9, Curso 4, Curso 5, Curso 6"])
})

app.put("/cursos/:id", (req, res) => {
  const {id} = req.params
  console.log(id)
  return res.json(["Curso 1, Curso 2, Curso 62, Curso 4, Curso 5, Curso 6"])
})

app.patch("/cursos/:id", (req, res)=> {
  return res.json(["Curso 1, Curso 2, Curso 9, Curso 98, Curso 5, Curso 6"])
})

app.delete("/cursos/:id", (req, res)=>{
  return res.json(["Curso 1, Curso 2, Curso 9"])
})
app.listen(3333, ()=>{
  console.log("Servidor online...")
})