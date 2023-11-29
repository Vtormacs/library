class Biblioteca {
  constructor() {
      this.acervo = [];
      this.usuarios = [];
      this.ApiAcervo();
      this.ApiUsuarios();
  }

  async ApiAcervo() {
      try {
          const response = await fetch('https://api-biblioteca-mb6w.onrender.com/acervo');
          const data = await response.json();
          this.acervo = data;
          // console.log(this.acervo);
      } catch (error) {
          console.error('Erro ao carregar dados do acervo:', error);
      }
  }

  async ApiUsuarios() {
      try {
          const response = await fetch('https://api-biblioteca-mb6w.onrender.com/users');
          const data = await response.json();
          this.usuarios = data;
          // console.log(this.usuarios);
      } catch (error) {
          console.error('Erro ao carregar dados dos usuários:', error);
      }
  }

  popularAcervo(itens){
    this.acervo = itens;
    console.log('Itens do acervo' +itens)
  }

  adicionarItem(item){
    this.acervo.push(item);
    console.log('Item adicionado ao acervo:', item);
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
      console.log('Livro emprestado')
    }
    else if (this.emprestado === true) {
      console.log('Livro já foi emprestado')
    }
  }

  devolver() {
    if (this.emprestado === true) {
      this.emprestado = false
      this.usuarioEmprestimo = null
      console.log('livro devolvido')
    }
    else if (this.emprestado === false) {
      console.log('livro já foi devolvido')
    }
  }
}

class Revista extends EntidadeBibliografica {
  constructor(titulo, autor, anoPublicado, codigo) {
    super(titulo, autor, anoPublicado, codigo);
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
