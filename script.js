class EntidadeBibliografica {

  constructor(titulo,autor,anoPublicado,codigo) {
    this.titulo = titulo
    this.autor = autor
    this.anoPublicado = anoPublicado
    this.codigo = codigo
    this.emprestado = false
    this.usuarioEmprestimo = null
  }
  alet(){
    console.log('Livro cadastrado')
  }
  emprestar(){

    if(this.emprestado === false){
      this.emprestado = true
      console.log('Livro emprestado')
    }
    else if(this.emprestado === true){
      console.log('Livro já foi emprestado')
    }
  }

  devolver(){
    if(this.emprestado === true){
      this.emprestado = false
      console.log('livro devolvido')
    }
    else if(this.emprestado === false){
      console.log('livro já foi devolvido')
    }
  }
}

class Livro extends EntidadeBibliografica{
  constructor(titulo,autor,anoPublicado,codigo,genero){
    super(titulo,autor,anoPublicado,codigo);
      this.genero = genero
    
  }
}

class Usuario{
  constructor(nome,registroAcademico,dataNascimento){
    this.nome = nome
    this.registroAcademico = registroAcademico
    this.dataNascimento = dataNascimento
  }
}
var biblioteca = new EntidadeBibliografica();
