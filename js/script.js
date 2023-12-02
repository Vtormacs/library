const GeneroLivro = {
  TEXTOS_RELIGIOSOS: "Textos Religiosos",
  TERROR: "Terror",
  COMEDIA: "Comédia",
  COMEDIA_ROMANTICA: "Comédia Romantica",
  SUSPENCE: "Suspence",
  DRAMA: "Drama",
  HISTORIA: "Historia",
  POLICIAL: "Policial",
  FICCAO_CIENTIFICA: "Ficção Cientifica"
}

class Biblioteca {
  constructor(acervo,usuarios) {
      this.acervo = [];
      this.usuarios = [];
      this.obterDadosDaAPI();
      this.ApiUsuarios();
  }
  
  popularAcervo(acervoAPI){
    acervoAPI.forEach(item => {
      if(item.entidadebiblioteca === "Livro"){
        this.acervo.push(new Livro(item.titulo,item.autor,item.anoPublicado,item.codigo,item.genero))
      }
      else if(item.entidadebiblioteca === "Revista"){
        this.acervo.push(new Revista(item.titulo,item.autor,item.anoPublicado,item.codigo,item.edicao))
      }
    });
  }

  adicionarItem(item){
    this.acervo.push(item);
    console.log('Item adicionado ao acervo:', item);
  }

  listarAcervo() {
  console.log("Biblioteca acervo");
  if (this.acervo.length === 0) {
    console.log("Acervo vazio");
  } else {
    this.acervo.forEach(item => {
      const infoUsuario = item.usuarioEmprestimo ? `Emprestado para: ${item.usuarioEmprestimo.nome}` : 'Disponivel';
      console.log(`${item.titulo} codigo: ${item.codigo}`);
    });
  }
}
  adicionarUsuario(usuario){
    this.usuarios.push(usuario)
    console.log('usuario' + usuario.nome + 'foi adicionado a biblioteca')
  }

  emprestarItem(itemCode, academicRegistration) {
  const itemToLend = this.acervo.find(item => item.codigo === itemCode);

  if (itemToLend) {
    const userToLend = this.usuarios.find(user => user.registroAcademico === academicRegistration);

    if (userToLend) {
      itemToLend.emprestar(userToLend);
      console.log('Item emprestado');
    } else {
      console.log('Usuário ' + academicRegistration + ' não encontrado');
    }
  } else {
    console.log('Item ' + itemCode + ' não encontrado');
  }
}

  devolverItem(){
    const item = this.acervo.find(item => item.codigo === codigo)

    if(item){
      item.devolver()
      console.log('Item devolvido')
    }
    else {
  console.log("Item " + codigo + " não encontrado");
    }
  }
}



class EntidadeBibliografica {

  constructor(titulo, autor, anoPublicado, codigo) {
    this.titulo = titulo
    this.autor = autor
    this.anoPublicado = anoPublicado
    this.codigo = codigo
    this.emprestado = false
    this.usuarioEmprestimo = null
  }
  emprestar(usuario) {

    if (this.emprestado === false) {
      this.emprestado = true
      this.usuarioEmprestimo = usuario
      console.log("O" + this.titulo + "foi emprestado para " + usuario.nome)
    }
    else if (this.emprestado === true) {
      console.log('Livro já foi emprestado')
    }
  }

  devolver() {
    if (this.emprestado === true) {
      this.emprestado = false
      this.usuarioEmprestimo = null
      console.log("O" + this.titulo + 'foi devolvido')
    }
    else if (this.emprestado === false) {
      console.log('livro já foi devolvido')
    }
  }
}

class Revista extends EntidadeBibliografica {
  constructor(titulo, autor, anoPublicado, codigo,edicao) {
    super(titulo, autor, anoPublicado, codigo);
    this.edicao = edicao
  }

  informacoes() {
    console.log('Titulo da revista ' + this.titulo)
    console.log('Autor ' + this.autor)
    console.log('Ano Publicado ' + this.anoPublicado)
    console.log('Codigo ' + this.codigo)
  }
}

class Livro extends EntidadeBibliografica {
  constructor(titulo, autor, anoPublicado, codigo, genero) {
    super(titulo, autor, anoPublicado, codigo);
    this.genero = genero
  }

  informacoes() {
    console.log('Titulo do livro ' + this.titulo)
    console.log('Autor ' + this.autor)
    console.log('Ano Publicado ' + this.anoPublicado)
    console.log('Codigo ' + this.codigo)
    console.log('Genero ' + this.genero)
  }
}

class Usuario {
  constructor(nome, registroAcademico, dataNascimento) {
    this.nome = nome
    this.registroAcademico = registroAcademico
    this.dataNascimento = dataNascimento
  }
}

var biblioteca = new Biblioteca();
var entidadebiblioteca = new EntidadeBibliografica();
var revista = new Revista();
var livro = new Livro();
