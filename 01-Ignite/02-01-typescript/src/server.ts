import express from 'express';
import {createCurse} from './routes';

const app = express();

app.get("/", createCurse)
  

app.listen(4444, () => {
  console.log("Server online")
})