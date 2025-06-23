var createHelloWorld = function () {
    return function () {
        return "Hello World";
    };
};
var hello = createHelloWorld();
console.log(hello());
