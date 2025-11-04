const processarPedido = (pedido: string, callback: ()=> void): void => {
    console.log(`Processando o pedido: ${pedido}.....`);
    setTimeout(() => {
        console.log(`Pedido ${pedido} processado com sucesso!`);
        callback();
    },2000);
}
processarPedido('Pizza', () => {
    console.log('Iniciando a entrega do pedido...');
});
processarPedido('Hambúrguer', () => {
    console.log('Iniciando a entrega do pedido...');
});