var createHelloWorld = function () {
    return function () { return "Hello World"; };
};
var helloArrow = createHelloWorld();
console.log(helloArrow());
