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

class Revista extends EntidadeBibliografica{
  constructor(titulo, autor, anoPublicado, codigo) {
    super(titulo, autor, anoPublicado, codigo);
  }

  informacoes(){
    console.log('Titulo da revista ' +this.titulo)
    console.log('Autor ' +this.autor)
    console.log('Ano Publicado ' +this.anoPublicado)
    console.log('Codigo '  +this.codigo)
  }
}

class Livro extends EntidadeBibliografica {
  constructor(titulo, autor, anoPublicado, codigo, genero) {
    super(titulo, autor, anoPublicado, codigo);
    this.genero = genero
  }

  informacoes(){
    console.log('Titulo do livro ' +this.titulo)
    console.log('Autor ' +this.autor)
    console.log('Ano Publicado ' +this.anoPublicado)
    console.log('Codigo '  +this.codigo)
    console.log('Genero '  +this.genero)
  }
}
var revista = new Revista();
var entidadebiblioteca = new EntidadeBibliografica();
var livro = new Livro();

class Usuario {
  constructor(nome, registroAcademico, dataNascimento) {
    this.nome = nome
    this.registroAcademico = registroAcademico
    this.dataNascimento = dataNascimento
  }
}

class Biblioteca {
  constructor(acervo,usuarios){
    this.acervo = []
    this.usuarios = []
  }

  adicionarItem(item){
    this.acervo.push(item)
    console.log(this.acervo)
  }

  listarAcervo()
  {
    console.log('Acervo')
    this.acervo.forEach(function(item){
      console.log(item)
    })
  }

  adicionarUsuario(usuario){
    this.usuarios.push(usuario)
  }

  emprestarItem(codigo,usuario){
    this.acervo.forEach(function(item){
      if(item.codigo === codigo){
        item.emprestar(usuario)
      }
    })
  }

  devolverItem(codigo){
    this.acervo.forEach(function(item){
      if(item.codigo === codigo){
        item.devolver()
      }
    })
  }
}

var biblioteca = new Biblioteca();const fetch = require('node-fetch');

class Biblioteca {
  constructor() {
    this.acervo = [];
    this.usuarios = [];
  }

  async carregarAcervo() {
    try {
      const response = await fetch('https://api-biblioteca-mb6w.onrender.com/acervo');
      const data = await response.json();
      this.acervo = data;
      console.log('Acervo carregado com sucesso');
    } catch (error) {
      console.error('Erro ao carregar o acervo:', error);
    }
  }

  async carregarUsuarios() {
    try {
      const response = await fetch('https://api-biblioteca-mb6w.onrender.com/users');
      const data = await response.json();
      this.usuarios = data;
      console.log('Usuários carregados com sucesso');
    } catch (error) {
      console.error('Erro ao carregar os usuários:', error);
    }
  }

  adicionarItem(item) {
    this.acervo.push(item);
    console.log('Item adicionado ao acervo:', item);
  }

  listarAcervo() {
    console.log('Acervo:');
    this.acervo.forEach(function (item) {
      console.log(item);
    });
  }

  adicionarUsuario(usuario) {
    this.usuarios.push(usuario);
    console.log('Usuário adicionado:', usuario);
  }

  emprestarItem(codigo, usuario) {
    this.acervo.forEach(function (item) {
      if (item.codigo === codigo) {
        item.emprestar(usuario);
      }
    });
  }

  devolverItem(codigo) {
    this.acervo.forEach(function (item) {
      if (item.codigo === codigo) {
        item.devolver();
      }
    });
  }
}
