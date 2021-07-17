import { v4 as uuidV4} from "uuid"


class Categoria{
  id: string;
  nome: string | undefined ;
  descricao: string | undefined;
  create_data: Date | undefined;

  constructor(){
    if (!this.id){
      this.id = uuidV4();
    }
  }
}

export {Categoria}