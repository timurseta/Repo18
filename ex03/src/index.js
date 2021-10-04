// only change code below this line
function* myGenerator() {
    yield* [1, 2, 3, 4, 5];
    yield* "Arena";
    yield* arguments;
}

const iterator = myGenerator(6, 7, 8);
let generatorArray = [];
for (const n of iterator) {
    generatorArray.push(n);
}

console.log(generatorArray);
// only change code above this line

module.exports = { generatorArray, myGenerator };