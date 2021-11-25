// for simple types
let apple = 5;
let count = "Count me";
let isItMe = true;

let nothing = null;
let nothingMuch = undefined;

//for reference types
//array
const colors = ["red", "blue", "green"];
const myNumbers = [1, 2, 3, 4];
const truths = [true, false];

//classes
class Car {}
const car = new Car();

//object literal
const point = {
  x: 10,
  y: 20,
};

//functions
const logNumber = (i: number): void => {
  console.log(i);
};

//when to use type annotations
//1: when have a function that returns 'any' type
const json = '{"id": 234, "number": 890890}';
const coordinates: { id: 234; number: 890890 } = JSON.parse(json);
console.log(coordinates); // {"id": 234, "number": 890890}

//2: when we declare variable in one line and init it in another line
const coins = [10, 20, 30, 40];
let price: boolean; // or let price = false;

for (let i = 0; i < coins.length; i++) {
  if (coins[i] === 20) {
    price = true;
  }
}
console.log(price); //true

//3: when the type of variable can't be inferred
const numbers = [-10, -9, 23, 1];
let nonEven: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    nonEven = numbers[i];
  }
}

