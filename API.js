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
}

const biblioteca = new Biblioteca();
export { biblioteca };



// class Biblioteca {
//   constructor() {
//     this.acervo = [];
//     this.usuarios = [];
//   }

//   async carregarAcervo() {
//     try {
//       const response = await fetch('https://api-biblioteca-mb6w.onrender.com/acervo');
//       const data = await response.json();
//       this.acervo = data;
//       console.log('dados do JSON' +data)
//       console.log('Acervo carregado com sucesso');
//     } catch (error) {
//       console.error('Erro ao carregar o acervo:', error);
//     }
//   }

//   async carregarUsuarios() {
//     try {
//       const response = await fetch('https://api-biblioteca-mb6w.onrender.com/users');
//       const data = await response.json();
//       this.usuarios = data;
//       console.log('Usuários carregados com sucesso');
//     } catch (error) {
//       console.error('Erro ao carregar os usuários:', error);
//     }
//   }

//   adicionarItem(item) {
//     this.acervo.push(item);
//     console.log('Item adicionado ao acervo:', item);
//   }

//   listarAcervo() {
//     console.log('Acervo:');
//     this.acervo.forEach(function (item) {
//       console.log(item);
//     });
//   }

//   adicionarUsuario(usuario) {
//     this.usuarios.push(usuario);
//     console.log('Usuário adicionado:', usuario);
//   }

//   emprestarItem(codigo, usuario) {
//     this.acervo.forEach(function (item) {
//       if (item.codigo === codigo) {
//         item.emprestar(usuario);
//       }
//     });
//   }

//   devolverItem(codigo) {
//     this.acervo.forEach(function (item) {
//       if (item.codigo === codigo) {
//         item.devolver();
//       }
//     });
//   }
// }
