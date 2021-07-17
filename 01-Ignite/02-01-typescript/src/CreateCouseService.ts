interface Course {
  nome: string;
  duration?: number;
  educador: string;
}

class CreateCourseService{
  execute({nome, duration = 8, educador}:Course){
    console.log(nome, duration, educador)
  }
}

export default new CreateCourseService();