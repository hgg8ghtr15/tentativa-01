import {Router} from "express"
import { v4 as uuidV4 } from "uuid"

import { CategoriaRepositrio} from "../repositorio/categoriaRepositrio"

const categoriasRoute = Router()
const categoriaRepositrio =  new CategoriaRepositrio()

categoriasRoute.post("/", (request, response)=>{

  const { nome, descricao} = request.body
  categoriaRepositrio.create({nome, descricao})
  
  return response.status(201).send()
})

categoriasRoute.get("/", (request, response) =>{
  const todascategorias = categoriaRepositrio.list()
  return response.json({todascategorias})
})

export {categoriasRoute}