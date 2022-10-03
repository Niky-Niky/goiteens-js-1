// CONVERTING INTO THE NUMBER
const valueString = "string";
console.log(Number(valueString)); // NaN
console.log(Boolean(valueString)); // TRUE

const randomNumber = 5;
console.log(String(randomNumber)); // "5"
console.log(Boolean(randomNumber)); // TRUE

const randomBoolean = true;
console.log(String(randomBoolean)); // TRUE
console.log(Number(randomBoolean)); // 1
// NUMBER PARCING
const parcing = "15.37qwe13"
console.log(Number.parseInt(parcing)); // 15
console.log(Number.parseFloat(parcing)); // 15.37
// CHECKING NaN
const validNumber = Number("51"); 
console.log(Number.isNaN(validNumber)); // FALSE

const invalidNumber = Number("qweqwe");
console.log(Number.isNaN(invalidNumber)); // TRUE
// SUBTRACTION NUMBERS WITH DOT
console.log(0.1 + 0.2 === 0.3); // FALSE

console.log(0.1 + 0.2); // 0.30000000000000004

console.log(((0.1 * 10) + (0.2 * 10)) /10) // 0.3
// MATH OBJECT
console.log(Math.floor(10.9)); // 10

console.log(Math.ceil(1.2)); // 2

console.log(Math.round(1.6)); // 2

console.log(Math.max(20, 10, 50, 40)); // 50

console.log(Math.min(20, 10, 50, 40)); // 10

console.log(Math.pow(2, 4)); // 16

console.log(Math.random()); // 0 OR 1
console.log(Math.random() * (100 - 10) + 10); // FROM 10 TO 100
// LESSON PRACTICE
let sentence = "I am happy";
console.log(sentence.length); // 10
sentence = "I am very happy";
console.log(sentence.indexOf("I", "y")); // 0

let quantity = 882369283162;
console.log(sentence.length); // 15
console.log(sentence.indexOf(882369283162)); // -1
// TEMPLATE SENTENCES
const customer = "Illia Bilishuk";
const age = 13;
const room = 19;
const quality = "VIP";
const hotelName = "Coach";
const hotelStatement = `Customer ${customer} is ${age} years old settled down to the room ${room} with status ${quality} to hotel ${hotelName}.`;
console.log(hotelStatement); // Customer Illia Bilishuk is 13 years old settled down to the room 19 with status VIP to hotel Coach.
console.log(`The subtraction result is ${2 + 15}`); // The subtraction result is 17
// OPERATORS "AND", "OR", "NOT"
const number = 17;
const result = number > 16 && number < 18;
console.log(result); // TRUE

const numberOr = 40;
const resultOr = numberOr > 10 || numberOr < 20;
console.log(resultOr); // TRUE
console.log(!resultOr); // FALSE

const a = 5;
const b = 5 + a;
const check = a > b;
console.log(typeof !check); // BOOLEAN