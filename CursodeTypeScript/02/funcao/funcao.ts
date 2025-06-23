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
function soma4(a: number, b: number, c: number = 0, d?: number): number { // Parâmetro opcional
    return a + b + c + (d || 0);
}

console.log(soma4(1, 2));
console.log(soma4(1, 2, 3));
console.log(soma4(1, 2, 3, 4));     
function soma5(...args: number[]): number { // Parâmetro rest
    return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(soma5(1, 2, 3, 4, 5));

function soma6(a: number, b: number, c: number = 0, ...args: number[]): number { // Parâmetro rest
    return a + b + c + args.reduce((acc, curr) => acc + curr, 0);
}

console.log(soma6(1, 2, 3, 4, 5));
function soma7(a: number, b: number, c: number = 0, d?: number, ...args: number[]): number { // Parâmetro rest
    return a + b + c + (d || 0) + args.reduce((acc, curr) => acc + curr, 0);
}

console.log(soma7(1, 2, 3, 4, 5));
console.log(soma7(1, 2, 3, 4));
console.log(soma7(1, 2, 3));
console.log(soma7(1, 2));
function soma8(a: number, b: number, c: number = 0, d?: number, ...args: number[]): number { // Parâmetro rest
    return a + b + c + (d || 0) + args.reduce((acc, curr) => acc + curr, 0);
}

console.log(soma8(1, 2, 3, 4, 5));  
console.log(soma8(1, 2, 3, 4));
console.log(soma8(1, 2, 3));
console.log(soma8(1, 2));       

// Função com parâmetros opcionais
function buildName(firstName: string, lastName?: string): string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
console.log(buildName("Gerson")); // Gerson
console.log(buildName("Gerson", "Santos")); // Gerson Santos

// Função com parâmetros padrão
function buildNameWithDefault(firstName: string, lastName: string = "Santos"): string {
    return firstName + " " + lastName;
}
console.log(buildNameWithDefault("Gerson")); // Gerson Santos
console.log(buildNameWithDefault("Gerson", "Silva")); // Gerson Silva
// Função com parâmetros rest
function buildNameWithRest(firstName: string, ...restOfName: string[]): string {
    return firstName + " " + restOfName.join(" ");
}
console.log(buildNameWithRest("Gerson", "Santos", "Silva")); // Gerson Santos Silva 

// Função com parâmetros rest e padrão
function buildNameWithRestAndDefault(firstName: string, lastName: string = "Santos", ...restOfName: string[]): string {
    return firstName + " " + lastName + " " + restOfName.join(" ");
}
console.log(buildNameWithRestAndDefault("Gerson", "Silva", "Santos", "Silva")); // Gerson Silva Santos Silva

var createHelloWorld = function() {
    return (...args: any[]) => "Hello World";
};
var helloWorld = createHelloWorld();
console.log(helloWorld()); // Hello World