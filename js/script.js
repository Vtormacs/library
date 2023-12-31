const generoLivro = {
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

class EntidadeBibliografica {
  constructor(codigo,titulo, autor, anoPublicacao) {
    this.codigo = codigo;
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
    this.emprestado = false;
    this.usuarioEmprestimo = null;
  }

  emprestar(usuario) {
    if (this.emprestado === false) {
      this.emprestado = true;
      this.usuarioEmprestimo = usuario;
      return true;
    } else {
      console.log("Livro já emprestado");
      alert("Livro já emprestado");
      return false;
    }
  }

  devolver() {
    if (this.emprestado === true) {
      this.emprestado = false;
      this.usuarioEmprestimo = null;
      console.log("O " + this.titulo + " foi devolvido");
    } else {
      console.log("Livro já foi devolvido");
    }
  }
}

class Livro extends EntidadeBibliografica {
  constructor(codigo,titulo, autor, anoPublicacao, genero) {
    super(codigo,titulo, autor, anoPublicacao);
    this.genero = genero;
  }

  informacoes() {
  const statusEmprestimo = this.emprestado ? "Sim" : "Não";
  const usuarioEmprestimo = this.usuarioEmprestimo ? this.usuarioEmprestimo.nome : "Nenhum";

  alert(
    `Informações do Livro:\n` +
    `Código: ${this.codigo}\n` +
    `Título: ${this.titulo}\n` +
    `Autor: ${this.autor}\n` +
    `Ano de publicação: ${this.anoPublicacao}\n` +
    `Emprestado: ${statusEmprestimo}\n` +
    `Usuário emprestado: ${usuarioEmprestimo}\n` +
    `Gênero: ${this.genero}`
  );
}
}

class Revista extends EntidadeBibliografica {
  constructor(codigo,titulo, autor, anoPublicacao, edicao) {
    super(codigo,titulo, autor, anoPublicacao);
    this.edicao = edicao;
  }
informacoes() {
  const statusEmprestimo = this.emprestado ? "Sim" : "Não";
  const usuarioEmprestimo = this.usuarioEmprestimo ? this.usuarioEmprestimo.nome : "Nenhum";

  alert(
    `Informações da Revista:\n` +
    `Código: ${this.codigo}\n` +
    `Título: ${this.titulo}\n` +
    `Autor: ${this.autor}\n` +
    `Ano de publicação: ${this.anoPublicacao}\n` +
    `Emprestado: ${statusEmprestimo}\n` +
    `Usuário emprestado: ${usuarioEmprestimo}\n` +
    `Edição: ${this.edicao}`
  );
}
}

class Usuario {
  constructor(nome, registroAcademico, dataNascimento) {
    this.nome = nome;
    this.registroAcademico = registroAcademico;
    this.dataNascimento = dataNascimento;
  }
}

class Biblioteca {
constructor() {
    this.acervo = [];
    this.usuarios = [];
}

popularAcervo(APIreturnAcervo, APIreturnUsuario) {
    APIreturnAcervo.forEach(item => {
      if (item.entidadeBibliografica === "Livro") {
        this.acervo.push(new Livro(item.codigo, item.titulo, item.autor, item.anoPublicacao, item.genero, item.emprestado, item.usuarioEmprestado));
      } else if (item.entidadeBibliografica === "Revista") {
        this.acervo.push(new Revista(item.codigo, item.titulo, item.autor, item.anoPublicacao, item.edicao, item.emprestado, item.usuarioEmprestado));
      }
    });
  
  APIreturnUsuario.forEach(usuario => {
      this.usuarios.push(new Usuario(usuario.nome, usuario.registroAcademico, usuario.dataNascimento));
    });
    console.log(biblioteca)
}

adicionarItem(item) {
  this.acervo.push(item);
  console.log('Item adicionado ao acervo:', item);
  console.log(biblioteca)
}

listarAcervo() {
  console.log("Livros da Biblioteca:");
  if (this.acervo.length > 0) {
    this.acervo.forEach(item => {

console.log(`Código: ${item.codigo} | Título: ${item.titulo} | Autor: ${item.autor} | Ano de publicação: ${item.anoPublicacao} `);

    });
  } else {
    console.log("Acervo vazio");
  }
  alert('Ver o console')
  console.log(biblioteca)
}

listarUsuarios(){
  console.log("Usuários da Biblioteca:");
  if (this.usuarios.length > 0) {
    this.usuarios.forEach(usuario => {
      console.log(`Nome: ${usuario.nome} | Registro Acadêmico: ${usuario.registroAcademico} | Data de Nascimento: ${usuario.dataNascimento}`);
    });
  } else {
    console.log("Não há usuários cadastrados");
  }
  console.log(biblioteca)
}

adicionarUsuario(usuario) {
    this.usuarios.push(usuario)
    console.log('usuario ' + usuario.nome + ' foi adicionado a biblioteca')
    console.log(biblioteca)
}

emprestarItem(itemCode, academicRegistration) {
  const itemParaEmprestar = this.acervo.find(item => item.codigo.toLowerCase() === itemCode.toLowerCase());

  if (itemParaEmprestar) {
    const usuarioEmpretimo = this.usuarios.find(user => user.registroAcademico === academicRegistration);

    if (usuarioEmpretimo) {
      itemParaEmprestar.emprestar(usuarioEmpretimo);
      console.log('Item emprestado');
      alert('Item emprestado para ' + usuarioEmpretimo.nome);
    } else {
      console.log('Usuário ' + academicRegistration + ' não encontrado');
    }
  } else {
    console.log('Item ' + itemCode + ' não encontrado');
  }
  console.log(biblioteca)
  
}

devolverItem(codigo) {
    const item = this.acervo.find(item => item.codigo === codigo)

    if (item) {
      item.devolver()
      console.log('Item devolvido')
    }
    else {
      console.log("Item " + codigo + " não encontrado");
    }
    console.log(biblioteca)
}
}

function adicionarLivro() {
  const titulo = prompt('Digite o título do livro');
  const autor = prompt('Digite o autor do livro');
  const ano = prompt('Digite o ano do livro');
    const codigo = prompt('Digite o código do livro');
    const genero = prompt('Digite o gênero do livro');

    const livro = new Livro(codigo, titulo, autor, ano, genero);

    biblioteca.adicionarItem(livro);
}

function adicionarRevista() {
    const codigo = prompt('Digite o código da revista');
    const titulo = prompt('Digite o título da revista');
    const autor = prompt('Digite o autor da revista');
    const ano = prompt('Digite o ano da revista');
    const edicao = prompt('Digite a edição da revista');

    const revista = new Revista(codigo, titulo, autor, ano, edicao);

    biblioteca.adicionarItem(revista);
}

function adicionarUsuario() {
    const nome = prompt('Digite o nome do usuário');
    const registroAcademico = prompt('Digite o registro acadêmico do usuário');
    const dataNascimento = prompt('Digite a data de nascimento do usuário (ano-mes-dia)');

    const usuario = new Usuario(nome, registroAcademico, dataNascimento);

    biblioteca.adicionarUsuario(usuario);
}

function emprestarItem(){
    const itemCode = prompt('Digite o código do item');
    const academicRegistration = prompt('Digite o registro académico do usuário');

    biblioteca.emprestarItem(itemCode,academicRegistration);
}

function devolverItem(){
    const codigo = prompt('Digite o código do item');
    biblioteca.devolverItem(codigo);
}

function informacoes(){
  const codigo = prompt('Digite o codigo do item')
  const item = biblioteca.acervo.find(item => item.codigo.toLowerCase() === codigo.toLowerCase())

  if(!item){
    alert('Item não encontrado')
  }else{
    item.informacoes()
  }
}

async function obterAcervo() {
    try {
        const respostaAcervo = await fetch('https://api-biblioteca-mb6w.onrender.com/acervo');
        const dadosAcervo = await respostaAcervo.json();
        return dadosAcervo;
    }
    catch (erro) {
        console.error(erro);
        return [];
    }
}

async function obterUsuario() {
    try {
        const respostaUsuario = await fetch('https://api-biblioteca-mb6w.onrender.com/users');
        const dadosUsuario = await respostaUsuario.json();
        return dadosUsuario;
    }
    catch (erro) {
        console.error(erro);
        return [];
    }
}

async function iniciarAcervo() {
    const dadosAcervos = await obterAcervo();
    const dadosUsuarios = await obterUsuario();

    await biblioteca.popularAcervo(dadosAcervos,dadosUsuarios);

}
const biblioteca = new Biblioteca()
iniciarAcervo()


