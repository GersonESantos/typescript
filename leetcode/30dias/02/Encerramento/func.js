function createAdder(a) {
    return function add(b) {
        var sum = a + b;
        return sum;
    };
}
var addTo2 = createAdder(2);
addTo2(5); // 7
console.log(addTo2(5)); // 7
