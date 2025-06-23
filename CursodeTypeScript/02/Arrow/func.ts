var createHelloWorld = function() {
    return () => "Hello World";
};
const helloArrow = createHelloWorld();
console.log(helloArrow());