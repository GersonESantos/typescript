function alerta() {
    console.log("I'm a little annoying box!");
}
alerta();
function soma(a, b) {
    return a + b;
}
console.log(soma(1, 2));
function soma1(a, b, c) {
    return a + b + c;
}
console.log(soma1(1, 2, 3));
function soma2(a, b, c) {
    if (c === void 0) { c = 0; }
    return a + b + c;
}
console.log(soma2(1, 2));
function soma3(a, b, c) {
    return a + b;
}
console.log(soma3(7, 2));
function soma4(a, b, c, d) {
    if (c === void 0) { c = 0; }
    return a + b + c + (d || 0);
}
console.log(soma4(1, 2));
console.log(soma4(1, 2, 3));
console.log(soma4(1, 2, 3, 4));
function soma5() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (acc, curr) { return acc + curr; }, 0);
}
console.log(soma5(1, 2, 3, 4, 5));
function soma6(a, b, c) {
    if (c === void 0) { c = 0; }
    var args = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        args[_i - 3] = arguments[_i];
    }
    return a + b + c + args.reduce(function (acc, curr) { return acc + curr; }, 0);
}
console.log(soma6(1, 2, 3, 4, 5));
function soma7(a, b, c, d) {
    if (c === void 0) { c = 0; }
    var args = [];
    for (var _i = 4; _i < arguments.length; _i++) {
        args[_i - 4] = arguments[_i];
    }
    return a + b + c + (d || 0) + args.reduce(function (acc, curr) { return acc + curr; }, 0);
}
console.log(soma7(1, 2, 3, 4, 5));
console.log(soma7(1, 2, 3, 4));
console.log(soma7(1, 2, 3));
console.log(soma7(1, 2));
function soma8(a, b, c, d) {
    if (c === void 0) { c = 0; }
    var args = [];
    for (var _i = 4; _i < arguments.length; _i++) {
        args[_i - 4] = arguments[_i];
    }
    return a + b + c + (d || 0) + args.reduce(function (acc, curr) { return acc + curr; }, 0);
}
console.log(soma8(1, 2, 3, 4, 5));
console.log(soma8(1, 2, 3, 4));
console.log(soma8(1, 2, 3));
console.log(soma8(1, 2));
// Função com parâmetros opcionais
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
console.log(buildName("Gerson")); // Gerson
console.log(buildName("Gerson", "Santos")); // Gerson Santos
// Função com parâmetros padrão
function buildNameWithDefault(firstName, lastName) {
    if (lastName === void 0) { lastName = "Santos"; }
    return firstName + " " + lastName;
}
console.log(buildNameWithDefault("Gerson")); // Gerson Santos
console.log(buildNameWithDefault("Gerson", "Silva")); // Gerson Silva
// Função com parâmetros rest
function buildNameWithRest(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
console.log(buildNameWithRest("Gerson", "Santos", "Silva")); // Gerson Santos Silva 
// Função com parâmetros rest e padrão
function buildNameWithRestAndDefault(firstName, lastName) {
    if (lastName === void 0) { lastName = "Santos"; }
    var restOfName = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        restOfName[_i - 2] = arguments[_i];
    }
    return firstName + " " + lastName + " " + restOfName.join(" ");
}
console.log(buildNameWithRestAndDefault("Gerson", "Silva", "Santos", "Silva")); // Gerson Silva Santos Silva
var createHelloWorld = function () {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return "Hello World";
    };
};
var helloWorld = createHelloWorld();
console.log(helloWorld()); // Hello World
