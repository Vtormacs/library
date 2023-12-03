class EntidadeBibliografica{
    constructor(codigo, titulo, autor, anoPublicação){
        this.codigo = codigo;
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicação = anoPublicação;
        this.isEmprestado = false;
        this.usuarioEmprestado = null;
    }

    emprestar(usuario)
    {
        if(this.isEmprestado === false)
        {
            this.isEmprestado = true;
            this.usuarioEmprestado = usuario;
            return true;
        }
        else
        {
            console.log("Livro já emprestado");
            alert("Livro já emprestado");
            return false;
        }
    }

    devolver()
    {
        if(this.isEmprestado === true)
        {
            this.isEmprestado = false;
            this.usuarioEmprestado = null;
            return true;
        }
        else
        {
            console.log("Livro já devolvido");
            alert("Livro já devolvido");
            return false;
        }
    }
}

const GeneroLivro = {
    TEXTOS_RELIGIOSOS : "Textos Religiosos",
    TERROR : "Terror",
    COMEDIA : "Comédia",
    ROMANCE : "Romance",
    SUSPENSE : "Suspense",
    DRAMA : "Drama",
    FICCAO_CIENTIFICA : "Ficção Científica",
    HISTORIA : "História",
    CIENCIA : "Ciência",
    PROGRAMAÇÃO : "Programação"
};

class Livro extends EntidadeBibliografica{
    constructor(codigo, titulo, autor, anoPublicação, isEmprestado, usuarioEmprestado, genero){
        super(codigo, titulo, autor, anoPublicação, isEmprestado, usuarioEmprestado);
        this.genero = genero;
    }

    informacao()
    {
        console.log("Código: " + this.codigo);
        console.log("Título: " + this.titulo);
        console.log("Autor: " + this.autor);
        console.log("Ano de publicação: " + this.anoPublicação);
        console.log("Emprestado: " + this.isEmprestado);
        console.log("Usuário emprestado: " + this.usuarioEmprestado);
        
        console.log("Gênero: " + this.genero); // linha que exige a existência desse método

        alert("ler console.log");
    }
}

class Revista extends EntidadeBibliografica{
    constructor(codigo, titulo, autor, anoPublicação, isEmprestado, usuarioEmprestado, edicao){
        super(codigo, titulo, autor, anoPublicação, isEmprestado, usuarioEmprestado);
        this.edicao = edicao;
    }

    informacao() 
    {
        console.log("Código: " + this.codigo);
        console.log("Título: " + this.titulo);
        console.log("Autor: " + this.autor);
        console.log("Ano de publicação: " + this.anoPublicação);
        console.log("Emprestado: " + this.isEmprestado);
        console.log("Usuário emprestado: " + this.usuarioEmprestado);

        alert("ler console.log");
    }
}

class Usuario{
    constructor(nome, registroAcademico, dataNascimento){
        this.nome = nome;
        this.registroAcademico = registroAcademico;
        this.dataNascimento = dataNascimento;
    }
}

class Biblioteca{
    constructor(){
        this.acervo = []; 
        this.usuarios = [];
    }
    
    // popular
    popularAcervo(acervoAPIreturn, usuarioAPIreturn){
        acervoAPIreturn.forEach(item => {
            if(item.entidadeBibliografica === "Livro")
            {
                this.acervo.push(new Livro(item.codigo, item.titulo, item.autor, item.anoPublicação, item.isEmprestado, item.usuarioEmprestado, item.genero));
            }
            else if(item.entidadeBibliografica === "Revista")
            {
                this.acervo.push(new Revista(item.codigo, item.titulo, item.autor, item.anoPublicação, item.isEmprestado, item.usuarioEmprestado, item.edicao));
            }
        });

        usuarioAPIreturn.forEach(usuario => {
            this.usuarios.push(new Usuario(usuario.nome, usuario.registroAcademico, usuario.dataNascimento));
        });
    }

    adicionarItem(item){
        this.acervo.push(item);
        console.log(`Item ${item.nome} adicionado ao acervo`);
    }

    adicionarUsuario(usuario){
        this.usuarios.push(usuario);
        console.log(`Usuário ${usuario.nome} adicionado ao sistema`);
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

    emprestarItem(codigoItem, registroAcademicoUsuario) {
    const item = this.acervo.find(item => item.codigo === codigoItem);
    const usuario = this.usuarios.find(usuario => usuario.registroAcademico === registroAcademicoUsuario);

    if (item && usuario) {
        item.emprestar(usuario);
        console.log(`Item ${item.titulo} emprestado para ${usuario.nome}`);
    } else {
        console.log("Item ou usuário não encontrado");
        alert("Item ou usuário não encontrado");
    }
}

    devolverItem(codigoItem){
        let item = this.acervo.find(item => item.codigo === codigoItem);

        if(item)
        {
            item.devolver();
        }
        else
        {
            console.log("Item não encontrado");
            alert("Item não encontrado");
        }
    }

}