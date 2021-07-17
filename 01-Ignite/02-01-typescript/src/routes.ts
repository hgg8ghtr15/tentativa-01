import {Request, Response} from "express"
import CreateCouseService from "./CreateCouseService"

export function createCurse(request:Request, response:Response){
  // const {nome, duration, educador} = request.body

  // console.log(nome)
  // CreateCouseService.execute({
  //   duration: duration,
  //   nome: nome,
  //   educador: educador
  // })
  CreateCouseService.execute({
    nome: "JavaScript",
    duration: 40,
    educador: "Fabio lucas marconi"
  })

  return response.send("Objeto Criado com sucesso")
}