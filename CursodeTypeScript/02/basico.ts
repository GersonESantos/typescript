console.log("Olá!");

const dataNacimento :Date = new Date(1957, 2, 7); // Data de nascimento
console.log(dataNacimento); // Saída: Sat Mar 07 1957 00:00:00 GMT-0300 (Horário Padrão de Brasília)

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

var list: number[] = [1, 2, 3];
// Percorrer valores da matriz
for (var i = 0; i < list.length; i++) {
    console.log(list[i]);
}
// Percorrer valores da matriz usando for...in
var list1: number[] = [1, 2, 3, 4];
for (var j in list1) {
    console.log(list1[j]);
}

var list2: number[] = [1, 2, 3, 4, 5 ];
for (var w of list2) {
    console.log(w);
}
var list3: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Matriz genérica
for (var k = 0; k < list3.length; k++) {
    console.log(list3[k]);
}
// Tupla
var x: [string, number];
x = ["hello", 10];
console.log(x[0]); // Acessar o primeiro elemento da tupla e aplicar substring
console.log(x[0].substring(1)); // Saída: "ello"
console.log(x[1].toString()); // Acessar o segundo elemento da tupla e converter para string
console.log(x[1].toFixed(2)); // Acessar o segundo elemento da

enum Color {Red, Green, Blue}; // Enumeração
var c: Color = Color.Green; // Atribuir um valor da enumeração
console.log(c); // Saída: 1 (índice do valor Green na enumeração)
var colorName: string = Color[2]; // Obter o nome do valor da enumeração
console.log(colorName); // Saída: "Blue" (nome do valor Blue na enumeração)

var u: undefined = undefined; // Indefinido
console.log(u); // Saída: undefined
var n: null = null; // Nulo
console.log(n); // Saída: null