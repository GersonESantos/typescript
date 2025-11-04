const saldacao = (nome: string, callback: (mensagem: string)=> void): void => {
        const msg = `Olá, ${nome}`;
        callback(msg);
    };
saldacao('Maria', (mensagem) => {
    console.log(mensagem);
});