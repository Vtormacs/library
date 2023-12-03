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

  popularAcervo(APIreturn) {
    APIreturn.forEach(item => {
      if(item.entidadeBibliografica === "Livro")
            {
                this.acervo.push(new Livro(item.codigo, item.titulo, item.autor, item.anoPublicação, item.isEmprestado, item.usuarioEmprestado, item.genero));
            }
            else if(item.entidadeBibliografica === "Revista")
            {
                this.acervo.push(new Revista(item.codigo, item.titulo, item.autor, item.anoPublicação, item.isEmprestado, item.usuarioEmprestado, item.edicao));
            }
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
            console.log(`Código: ${item.codigo} | Título: ${item.titulo} | Autor: ${item.autor} | Ano de publicação: ${item.anoPublicação} | ${infoUsuario}`);
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
  constructor(titulo, autor, anoPublicado, codigo, edicao) {
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

const livro = new Livro()
const revista = new Revista()


const usuario1 = new Usuario(" Vitor Eduardo ", "505071", "2002-08-08")
const usuario2 = new Usuario(" Jaqueline ", "404012", "2002-02-03")

const biblioteca = new Biblioteca()

biblioteca.adicionarUsuario(usuario1)
biblioteca.adicionarUsuario(usuario2)


function adicionarLivro() {
    const codigo = prompt('Digite o código do livro');
    const titulo = prompt('Digite o título do livro');
    const autor = prompt('Digite o autor do livro');
    const ano = prompt('Digite o ano do livro');
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

function adicionarUsuarioTESTE() {
    const nome = prompt('Digite o nome do usuário');
    const registroAcademico = prompt('Digite o registro acadêmico do usuário');
    const dataNascimento = prompt('Digite a data de nascimento do usuário');

    const usuario = new Usuario(nome, registroAcademico, dataNascimento);

    biblioteca.adicionarUsuario(usuario);
}



async function obterDadosAPI() {
    try {
        const resposta = await fetch('https://api-biblioteca-mb6w.onrender.com/acervo');
        const dados = await resposta.json();
        return dados;
    }
    catch (erro) {
        console.error(erro);
        return [];
    }
}

async function userAPI() {
    try {
        const resposta = await fetch('https://api-biblioteca-mb6w.onrender.com/users');
        const dados = await resposta.json();
        return dados;
    }
    catch (erro) {
        console.error(erro);
        return [];
    }
}

async function iniciarAcervo() {
    const dados = await obterDadosAPI();
    const usuarios = await userAPI();

    await biblioteca.popularAcervo(dados);
}
iniciarAcervo()
