// * GENERATORS
// * Allow us to make a paused iteration
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value); // ? If the elements are over, it prints an undefined

function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(["Oscar", "DANIEL"]);
console.log(it.next().value);
