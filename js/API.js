
async function obterDadosDaAPI() {
    try {
        const response = await fetch('https://api-biblioteca-mb6w.onrender.com/acervo');
        const acervoAPI = await response.json();
        return acervoAPI;
    } catch (error) {
        console.error('Erro ao carregar dados do acervo:', error);
        return [];
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

async function iniciarAcervo(){
    const acervoAPI = await obterDadosDaAPI();
    const usuarios = await ApiUsuarios();

    await biblioteca.popularAcervo(acervoAPI);
}
iniciarAcervo()
