import express from "express";
import {categoriasRoute} from "./routes/categoria.routes"

const app = express();

app.use(express.json())

app.use("/categorias", categoriasRoute)


app.listen(4444, ()=>{
  console.log("Servidor online")
})