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
      this.ApiAcervo();
      this.ApiUsuarios();
  }

  async ApiAcervo() {
      try {
          const response = await fetch('https://api-biblioteca-mb6w.onrender.com/acervo');
          const data = await response.json();
          this.acervo = data;
          console.log(this.acervo);
      } catch (error) {
          console.error('Erro ao carregar dados do acervo:', error);
      }
  }

  async ApiUsuarios() {
      try {
          const response = await fetch('https://api-biblioteca-mb6w.onrender.com/users');
          const data = await response.json();
          this.usuarios = data;
          console.log(this.usuarios);
      } catch (error) {
          console.error('Erro ao carregar dados dos usuários:', error);
      }
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

  listarAcervo(){
    console.log("Biblioteca acervo")
    if(this.acervo.length == 0){
      console.log("Acervo vazio")
    }
    else{
      this.acervo.forEach(item => {
        const infoUsuario = item.usuarioEmprestimo ? 'Emprestado para: $(item.usuarioEmprestimo.nome)'
      :
      'Disponivel';console.log (item.titulo + 'codigo:' +item.codigo)
      })
    }
  }

  adicionarUsuario(usuario){
    this.usuarios.push(usuario)
    console.log('usuario' + usuario.nome + 'foi adicionado a biblioteca')
  }

  emprestarItem(codigo, registroAcademico){
    const item = this.acervo.find(item => item.codigo === codigo)

    if(item){
      const usuarioEmprestimo = this.usuarios.find(this.usuario => usuario.registroAcademico)
    }

  }

  devolverItem(){

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
