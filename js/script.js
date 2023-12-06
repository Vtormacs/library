iniciarAcervo()
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
    console.log("Código: " + this.codigo);
    console.log("Título: " + this.titulo);
    console.log("Autor: " + this.autor);
    console.log("Ano de publicação: " + this.anoPublicacao);
    console.log("Emprestado: " + this.emprestado);
    console.log("Usuário emprestado: " + this.usuarioEmprestimo);
    console.log("Gênero: " + this.genero);
    alert("ler console.log");
  }
}

class Revista extends EntidadeBibliografica {
  constructor(codigo,titulo, autor, anoPublicacao, edicao) {
    super(codigo,titulo, autor, anoPublicacao);
    this.edicao = edicao;
  }

  informacoes() {
    console.log("Código: " + this.codigo);
    console.log("Título: " + this.titulo);
    console.log("Autor: " + this.autor);
    console.log("Ano de publicação: " + this.anoPublicacao);
    console.log("Emprestado: " + this.emprestado);
    console.log("Usuário emprestado: " + this.usuarioEmprestimo);
    console.log("Edição: " + this.edicao);
    alert("ler console.log");
  }
}

class Usuario {
  constructor(nome, registroAcademico, dataNascimento) {
    this.nome = nome;
    this.registroAcademico = registroAcademico;
    this.dataNascimento = dataNascimento;
  }
}

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

class Biblioteca {
  constructor() {
    this.acervo = [];
    this.usuarios = [];
  }

  popularAcervo(APIreturnAcervo, APIreturnUsuario) {
  APIreturnAcervo.forEach(item => {
    if (item.entidadeBibliografica === "Livro") {
      this.acervo.push(new Livro(item.codigo, item.titulo, item.autor, item.anoPublicacao, item.isEmprestado, item.usuarioEmprestado, item.genero));
    } else if (item.entidadeBibliografica === "Revista") {
      this.acervo.push(new Revista(item.codigo, item.titulo, item.autor, item.anoPublicacao, item.isEmprestado, item.usuarioEmprestado, item.edicao));
    }
  });

  APIreturnUsuario.forEach(usuario => {
    this.usuarios.push(new Usuario(usuario.nome, usuario.registroAcademico, usuario.dataNascimento));
  });
}

adicionarItem(item) {
  this.acervo.push(item);
  console.log('Item adicionado ao acervo:', item);
}

listarAcervo() {
  console.log("Acervo da Biblioteca:");
  if (this.acervo.length > 0) {
    this.acervo.forEach(item => {
      const infoUsuario = item.usuarioEmprestado ? `Emprestado para ${item.usuarioEmprestado.nome}` : 'Disponível';
      console.log(`Código: ${item.codigo} | Título: ${item.titulo} | Autor: ${item.autor} | Ano de publicação: ${item.anoPublicacao} | ${infoUsuario}`);
    });
  } else {
    console.log("Acervo vazio");
  }
}

  adicionarUsuario(usuario) {
    this.usuarios.push(usuario)
    console.log('usuario' + usuario.nome + 'foi adicionado a biblioteca')
  }

  emprestarItem(itemCode, academicRegistration) {
    const itemParaEmprestar = this.acervo.find(item => item.codigo === itemCode);

    if (itemParaEmprestar) {
      const userParaEmprestar = this.usuarios.find(user => user.registroAcademico === academicRegistration);

      if (userParaEmprestar) {
        itemParaEmprestar.emprestar(userParaEmprestar);
        console.log('Item emprestado');
      } else {
        console.log('Usuário ' + academicRegistration + ' não encontrado');
      }
    } else {
      console.log('Item ' + itemCode + ' não encontrado');
    }
  }

  devolverItem() {
    const item = this.acervo.find(item => item.codigo === codigo)

    if (item) {
      item.devolver()
      console.log('Item devolvido')
    }
    else {
      console.log("Item " + codigo + " não encontrado");
    }
  }
}



const livro = new Livro()
const revista = new Revista()


const usuario1 = new Usuario(" Vitor Eduardo ", "505071", "2002-08-08")
const usuario2 = new Usuario(" Jaqueline ", "404012", "2002-02-03")

const biblioteca = new Biblioteca()

biblioteca.adicionarUsuario(usuario1)
biblioteca.adicionarUsuario(usuario2)


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

    biblioteca.adicionarRevista(revista);
}

function adicionarUsuario() {
    const nome = prompt('Digite o nome do usuário');
    const registroAcademico = prompt('Digite o registro acadêmico do usuário');
    const dataNascimento = prompt('Digite a data de nascimento do usuário');

    const usuario = new Usuario(nome, registroAcademico, dataNascimento);

    biblioteca.adicionarUsuario(usuario);
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
