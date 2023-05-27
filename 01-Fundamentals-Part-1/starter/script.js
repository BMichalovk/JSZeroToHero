//////////  chapter 2-09
// js = "amazing";
// if (js === "amazing") {
//   alert("js is " + js);
// }

/////// chapter 2-10
// console.log('hellow world!')
// console.log(10 + 5 * 2);
let greeting = "hello world";
console.log(greeting);
let _234Name = 123;
let $tester = "Valid variable name";

// Exersise
let country = "usa";
let continent = "North America";
let population = 300000001;
console.log("country: " + country);
console.log("continent: " + continent);
console.log("population: " + population);

////// chapter 2-12 Data types
// data types (js uses dynamic typing)
// numbers,   let number=123.12
// strings,   let fName = 'Brian'
// boolean,   let isLive = ytue
// undefined, let tValue
// null,
// symbol,    let
// bigint

// exersise
let isIsland = true;
let language;
console.log("isIsland: " + isIsland);
console.log("language: " + language);

/// chapter 2-13 let const var
// always use let and const in new programs
// const is immutable
// let and var is mutable

// let var block and function scope
// exersise
language = "English";
let countryCode = "US";
const avgCountryPopulation = 33000000;

// Chapter 2-14 basic operators
// + - * / ** = += -= *= /= ++ --
// template strings
// comparison operators (return booleans > < != <= >=)

// exersises
console.log(population / 2);
console.log(population + 1);
console.log(population++);
let populayionFinland = 6000000;
console.log(population > populayionFinland);
console.log(avgCountryPopulation > population);
let description =
  country +
  " in in " +
  continent +
  ", and its " +
  population +
  " people speak " +
  language;
console.log(description);
// Chapter 2-15 pedmas parenthesis, exponent, division, multiplication, addition, subtraction

// Code Challenge
let marksWeight = 78;
let marksHeight = 1.69;
let johnsWeight = 92;
let johnsHeight = 1.95;

console.log("Test #1 Marks BMI: " + marksWeight / marksHeight ** 2);
console.log("Test #1 Johns BMI: " + johnsWeight / johnsHeight ** 2);
console.log(marksWeight / marksHeight ** 2 > johnsWeight / johnsHeight ** 2);
marksWeight = 95;
marksHeight = 1.88;
johnsWeight = 85;
johnsHeight = 1.76;

console.log("Test #2 Marks BMI: " + marksWeight / marksHeight ** 2);
console.log("Test #2 Johns BMI: " + johnsWeight / johnsHeight ** 2);
console.log(marksWeight / marksHeight ** 2 > johnsWeight / johnsHeight ** 2);

// Chapter 2-17 Template Literals
let firstName = "Brian";
let job = "programer";
let birthYear = 1966;
const year = 2023;

let brian = `I'm ${firstName} a ${year - birthYear} year old ${job}`;
console.log(brian);
console.log(`This is a template literal`);
console.log(`    This
    is a 
    multi line
    Literal`);

//Chapter 2-18 if then else statement
var age = 13;
var isOldEnough = age > 18;
if (isOldEnough) {
  console.log(`The Driver is old enough`);
} else {
  let yearsLeft = 18 - age;
  console.log(`Not old enough wait another ${yearsLeft} years to drive`);
}

// Code Challenge #2
marksWeight = 78;
marksHeight = 1.69;
johnsWeight = 92;
johnsHeight = 1.95;

console.log("Test #1 Marks BMI: " + marksWeight / marksHeight ** 2);
console.log("Test #1 Johns BMI: " + johnsWeight / johnsHeight ** 2);

if (marksWeight / marksHeight ** 2 > johnsWeight / johnsHeight ** 2) {
  console.log(`Mark's BMI is Higher`);
} else {
  console.log(`John's BMI is Higher`);
}
console.log(marksWeight / marksHeight ** 2 > johnsWeight / johnsHeight ** 2);
marksWeight = 95;
marksHeight = 1.88;
johnsWeight = 85;
johnsHeight = 1.76;

console.log("Test #2 Marks BMI: " + marksWeight / marksHeight ** 2);
console.log("Test #2 Johns BMI: " + johnsWeight / johnsHeight ** 2);
if (marksWeight / marksHeight ** 2 > johnsWeight / johnsHeight ** 2) {
  console.log(`Mark's BMI is Higher`);
} else {
  console.log(`John's BMI is Higher`);
}

//Chapter 2-18 Type conversion vs Coersion
let inputYear = "1998";
console.log(Number(inputYear), inputYear);
console.log(Number(`Mark`));

console.log(String(23), 23);
console.log(`i'm` + 23 + ` Years old`);

// five falsey valus 0,'',undefined, NaN, null
// prompt captures a string
let FavoriteNumber = prompt(`What's your favorite Number`);

let dScores = [96, 108, 89];
let kScores = [88, 91, 110];
let dTotal = 0;
let kTotal = 0;
let dAvg;
let kAvg;

dScores.forEach((num) => {
  dTotal += num;
});

dAvg = dTotal / dScores.length;

kScores.forEach((num) => {
  kTotal += num;
});

kAvg = kTotal / kScores.length;
console.log(`${dAvg} - ${kAvg}`);
if (dTotal > kTotal) {
  console.log(`Dolphins Win`);
} else if (kTotal > dTotal) {
  console.log(`Koalas Win`);
} else {
  console.log(`it's a tie`);
}

dScores = [97, 112, 101];
kScores = [88, 91, 110];
dTotal = 0;
kTotal = 0;

dScores.forEach((num) => {
  dTotal += num;
});

dAvg = dTotal / dScores.length;

kScores.forEach((num) => {
  kTotal += num;
});

kAvg = kTotal / kScores.length;

console.log(`${dAvg} - ${kAvg}`);
if (dTotal > kTotal && dTotal > 100) {
  console.log(`Dolphins Win`);
} else if (kTotal > dTotal && kTotal > 100) {
  console.log(`Koalas Win`);
} else if ((dTotal = kTotal && dTotal > 100 && kTotal > 100)) {
  console.log(`it's a tie`);
}

dScores = [97, 112, 101];
kScores = [109, 95, 106];
dTotal = 0;
kTotal = 0;

dScores.forEach((num) => {
  dTotal += num;
});

dAvg = dTotal / dScores.length;

kScores.forEach((num) => {
  kTotal += num;
});

kAvg = kTotal / kScores.length;

console.log(`${dAvg} - ${kAvg}`);
if (dTotal > kTotal && dTotal > 100) {
  console.log(`Dolphins Win`);
} else if (kTotal > dTotal && kTotal > 100) {
  console.log(`Koalas Win`);
} else if ((dTotal = kTotal && dTotal > 100 && kTotal > 100)) {
  console.log(`it's a tie`);
}
