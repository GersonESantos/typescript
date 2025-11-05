const buscarUsuario = (id: number,
     callback: (erro: string | null, usuario?: string) => void): void => {
    console.log(`Buscando usuário com ID: ${id}...`);
    setTimeout(() => {
        if (id === 0) {
            callback('Usuário não encontrado.');
        } else {
            callback(null, 'João Silva');
        }
    }, 2000);
};
   

buscarUsuario(1, (erro, usuario) => {
    erro ? console.error('Erro: erro') : 
    console.log(`Usuário encontrado: ${usuario}`, usuario);
}); 

buscarUsuario(0, (erro, usuario) => {
    erro ? console.error('Erro: erro') : 
    console.log(`Usuário encontrado: ${usuario}`, usuario);
});