class EntidadeBibliografica{
    constructor(codigo, titulo, autor, anoPublicação, isEmprestado, usuarioEmprestado){
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
    constructor(codigo, titulo, autor, anoPublicação, isEmprestado, usuarioEmprestado){
        super(codigo, titulo, autor, anoPublicação, isEmprestado, usuarioEmprestado);
    }

    informacao() // por quê não está na classe pai para ser herdada? por conta do gênero?
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
    constructor(nome, RA, dataNascimento){
        this.nome = nome;
        this.RA = RA;
        this.dataNascimento = dataNascimento;
    }
}

class Biblioteca{
    constructor(acervo, usuarios){
        this.acervo = []; // nao sei se é por this
        this.usuarios = [];
    }

    adicionarItem(item){
        this.acervo.push(item);
    }

    adicionarUsuario(usuario){
        this.usuarios.push(usuario);
    }

    emprestarItem(codigoItem, codigoUsuario){
        let item = this.acervo.find(item => item.codigo === codigoItem);
        let usuario = this.usuarios.find(usuario => usuario.codigo === codigoUsuario);

        if(item.emprestar(usuario))
        {
            console.log("Item emprestado com sucesso");
            alert("Item emprestado com sucesso");
        }
        else
        {
            console.log("Item não emprestado");
            alert("Item não emprestado");
        }
    }

    devolverItem(codigoItem){
        let item = this.acervo.find(item => item.codigo === codigoItem);

        if(item.devolver())
        {
            console.log("Item devolvido com sucesso");
            alert("Item devolvido com sucesso");
        }
        else
        {
            console.log("Item não devolvido");
            alert("Item não devolvido");
        }
    }
}