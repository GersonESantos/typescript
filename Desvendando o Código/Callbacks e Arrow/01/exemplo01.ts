const saldacao = (nome: string, callback: (mensagem: string)=> void): void => {
        const msg = `Olá, ${nome}`;
        callback(msg);
    };
 const exibirMensagem = (mensagem: string): void => { 
      console.log(mensagem);  
    };
saldacao('João', exibirMensagem);
saldacao('Maria', (mensagem) => {
    console.log(mensagem);
});