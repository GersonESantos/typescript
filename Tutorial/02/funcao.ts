function alerta(): void { // Vazio (sem retorno)
    console.log("I'm a little annoying box!");
}
alerta();

function soma(a: number, b: number): number { // Retorno do tipo number
    return a + b;
}
console.log(soma(1, 2));

function soma1(a: number, b:  number, c: number) { // Retorno do tipo number
    return a + b + c;
}
console.log(soma1(1, 2, 3));
function soma2(a: number, b: number, c: number = 0): number { // Parâmetro opcional
    return a + b + c;
}

console.log(soma2(1, 2));
function soma3(a: number, b: number, c?: number ): number { // Parâmetro opcional
    return a + b ;
}

console.log(soma3(7, 2));