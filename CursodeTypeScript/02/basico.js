console.log("Olá!");
var dataNacimento = new Date(1957, 3, 7); // Data de nascimento
console.log(dataNacimento); // Saída: Sat Mar 07 1957 00:00:00 GMT-0300 (Horário Padrão de Brasília)
var isDone = false; // Booleano true ou false
console.log(isDone);
var lines = 42; // Números inteiros ou decimais
console.log(lines);
var name1 = "Anders"; // String com aspas duplas ou simples
console.log(name1);
var notSure = 4; // Qualquer tipo
console.log(notSure);
notSure = "maybe a string instead";
console.log(notSure);
notSure = false;
console.log(notSure);
var list = [1, 2, 3]; // Matriz
console.log(list);
var list = [1, 2, 3]; // Matriz genérica
console.log(list);
var tuple = ["hello", 10]; // Tupla com dois tipos
console.log(tuple);
var list = [1, 2, 3];
// Percorrer valores da matriz
for (var i = 0; i < list.length; i++) {
    console.log(list[i]);
}
// Percorrer valores da matriz usando for...in
var list1 = [1, 2, 3, 4];
for (var j in list1) {
    console.log(list1[j]);
}
var list2 = [1, 2, 3, 4, 5];
for (var _i = 0, list2_1 = list2; _i < list2_1.length; _i++) {
    var w = list2_1[_i];
    console.log(w);
}
var list3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Matriz genérica
for (var k = 0; k < list3.length; k++) {
    console.log(list3[k]);
}
// Tupla
var x;
x = ["hello", 10];
console.log(x[0]); // Acessar o primeiro elemento da tupla e aplicar substring
console.log(x[0].substring(1)); // Saída: "ello"
console.log(x[1].toString()); // Acessar o segundo elemento da tupla e converter para string
console.log(x[1].toFixed(2)); // Acessar o segundo elemento da
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; // Enumeração
var c = Color.Green; // Atribuir um valor da enumeração
console.log(c); // Saída: 1 (índice do valor Green na enumeração)
var colorName = Color[2]; // Obter o nome do valor da enumeração
console.log(colorName); // Saída: "Blue" (nome do valor Blue na enumeração)
var u = undefined; // Indefinido
console.log(u); // Saída: undefined
var n = null; // Nulo
console.log(n); // Saída: null
