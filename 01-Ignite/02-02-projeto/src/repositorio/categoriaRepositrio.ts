import {Categoria} from "../model/categoria"

interface ICreateCategoriaDTO {
  nome: string;
  descricao: string;
}

class CategoriaRepositrio {

  private categorias: Categoria[]

  constructor(){
    this.categorias = []
  }
  create({nome, descricao}:ICreateCategoriaDTO): void {
    const categoria = new Categoria()

    Object.assign(categoria,
      {
        nome,
        descricao,
        create_data: new Date()
      }
    )

    this.categorias.push(categoria)
  }

  buscarNomeCategoria(nome: string): Categoria {
    const categoria = this.categorias.find((categoria) => categoria.nome === nome)
    return categoria
  }
  list(): Categoria[]{
    return this.categorias
  }

  
}

export {CategoriaRepositrio}