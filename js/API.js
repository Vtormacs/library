const usuario1 = new Usuario("Vitor Eduardo", "505071", "2002-08-08")
const usuario2 = new Usuario("Jaqueline", "404012", "2002-02-03" )

const biblioteca = new Biblioteca()

biblioteca.adicionarUsuario(usuario1)
biblioteca.adicionarUsuario(usuario2)


async function obterDadosDaAPI() {
    try {
        const response = await fetch('https://api-biblioteca-mb6w.onrender.com/acervo');
        const acervoAPI = await response.json();
        return acervoAPI
    } catch (error) {
        console.error('Erro ao carregar dados do acervo:', error);
        return []
    }
}

async function ApiUsuarios() {
    try {
        const response = await fetch('https://api-biblioteca-mb6w.onrender.com/users');
        const userAPI = await response.json();
        return userAPI
    } catch (error) {
        console.error('Erro ao carregar dados dos usuários:', error);
        return []
    }
}
