function createAdder(a: number) {
  return function add(b: number) {
    const sum = a + b;
    return sum;
  }
}
const addTo2 = createAdder(2);
addTo2(5); // 7
console.log(addTo2(5)); // 7