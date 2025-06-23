var createHelloWorld = function() {
    return function(): string {
        return "Hello World";
    }
};
const hello = createHelloWorld();
console.log(hello());