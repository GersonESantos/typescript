function alerta(): void { // Vazio (sem retorno)
    console.log("I'm a little annoying box!");
}
alerta();

function soma(a: number, b: number): number { // Retorno do tipo number
    return a + b;
}
console.log(soma(1, 2));