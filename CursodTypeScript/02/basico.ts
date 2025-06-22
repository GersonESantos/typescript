console.log("Olá!");
var isDone: boolean = false; // Booleano true ou false
console.log(isDone);

var lines: number = 42; // Números inteiros ou decimais
console.log(lines);

var name1: string = "Anders"; // String com aspas duplas ou simples
console.log(name1);

var notSure: any = 4; // Qualquer tipo
console.log(notSure);

notSure = "maybe a string instead";
console.log(notSure);

notSure = false;
console.log(notSure);

var list: number[] = [1, 2, 3]; // Matriz
console.log(list);

var list: Array<number> = [1, 2, 3]; // Matriz genérica
console.log(list);

var tuple: [string, number] = ["hello", 10]; // Tupla com dois tipos
console.log(tuple);
