// var let const
// define, update ,redefine

// define
// var number = 100;
// // console.log(number);

// // update
// number = 300;
// // console.log(number);
// // redefine
// var number = "ram";
// // console.log(number);

// // let
// // define
// let amount = 200;
// // console.log(amount);
// // update
// amount = 400;
// // console.log(amount);

// // redefine (we can not redefine a same variable again)
// // let amount = "hello world";
// // console.log(amount);

// // const we can not reassign value in const variable
// const total = 100;
// // console.log(total);
// // total = 200;

// // in object we can reassign a const value
// const person = { name: "bob" };
// person.name = "john";
// console.log(person.name);

// 02_ function scope and block scope
// var, let, const
// let, const - blocked scoped{} - anything within{}
// var - function scoped

//global scope
// var amount = 100;

// function greet() {
//   // local scope
//   var random = "some value";
//   console.log(`hello there ${random} ${amount}`);
// }
// // console.log(random);
// // greet();

// // var total = 1000;
// // var test = true;

// // if (test) {
// //   var total = "oranges and onions";
// //   console.log("hello there");
// // }
// // console.log(total);
// let total = 1000;
// let test = true;

// if (test) {
//   let total = "oranges and onions";
//   let value = "some random value";
//   console.log("hello there");
// }
// // console.log(value);
// console.log(total);

// 02_ templete literals/ strings

// `` backticks template literals
// const name = "ram";
// const lastName = "yadav";
// const age = 25;

// const phrase = `my full name is${name} ${lastName.toUpperCase()} and i am ${age} old.`;
// console.log(phrase);

// templete strings
// const person = {
//   name: "kyle",
//   job: "developer",
//   hobbies: ["surfing", "banking", "bowling"],
// };

// const result = document.getElementById("result");

// result.innerHTML = `<h2>${person.name}</h2> <p>${
//   person.job
// } <ul>${person.hobbies
//   .map((item) => {
//     return `<li>${item}</li>`;
//   })
//   .join("")}</ul></p>`;

// tagged template literals

// const author = "some author";
// const statement = "some statement";

// const quote = `here is the <strong>${statement}</strong> by ${author} and it could not be more true`;
// console.log(quote);

// const result = document.getElementById("result");
// result.innerHTML = quote;

// 03_ arrow function
// Arrow Functions or Fat Arrow Functions
// no name
// no function keyword
// parameters and return statement
//no parameters

// function sayHi() {
//   console.log("hello");
// }
// sayHi();
// const hello = function(name) {
//   console.log(`Hello ${name}`);
// };
// hello("bob");
// one parameter
// function triple(value) {
//   return value * 3;
// }

// const Hi = () => console.log("hello boss");
// Hi();

// const sayHi = () => console.log("hello");
// sayHi();

// // const double = (value) => value * 2;
// // implicitly return in one value in argument
// const double = (value) => value * 2;
// const num = double(7);
// console.log(num);

// // two parameters and more than one line
// // explicitly return on more than 1 arguments
// const multiply = (num1, num2) => {
//   const result = num1 * num2;
//   // more code here
//   return result;
// };
// const sum = multiply(7, 4);
// console.log(sum);

// // return object
// const object = () => ({ name: "bob", age: 25 });
// const person = object();
// console.log(person);
// // arrow functions as callback functions
// const numbers = [1, 2, 3, 4, 5, 6];
// const big = numbers.filter((number) => number > 2);
// console.log(big);

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => console.log("you clicked me"));

//arrow function object and this
// Arrow Functions or Fat Arrow Functions
// reg function: 'this' refers parent, left of the dot
// arrow function: refers to its current surrounding scope
// 'this' keyword

// const bob = {
//   firstName: "bob",
//   lastName: "smith",
//   sayName: function () {
//     console.log(this);
//     setTimeout(() => {
//       console.log(this);
//       console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
//     }, 1000);
//   },
// };

// const anna = {
//   firstName: "anna",
//   lastName: "sanders",
//   sayName: () => {
//     console.log(this);
//     console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
//   },
// };

// bob.sayName();
// anna.sayName();

// ------ select element and this

// const btn = document.querySelector(".btn");

// // btn.addEventListener("click", function () {
// //   console.log(this);
// //   this.style.color = "black";
// // });

// // arrow function with regular function
// btn.addEventListener("click", function () {
//   console.log(this);
//   setTimeout(() => {
//     this.style.color = "black";
//   }, 2000);
// });

// 04_ default parameter , arrow functions

// const jhon = "john";
// const peter = "peter";

// function sayHi(person = "susan") {
//   console.log(`hi ${person}`);
// }
// sayHi();

// const sayHello = (person = "bob") => console.log(`hello ${person}`);

// sayHello();

// 04__ array destructuring
// destructuring
// faster/ easier
// const fruits = ["orange", "banana", "pineapple"];
// const friends = ["peter", "pido", "haarry", "uppal", "king"];
// // first way
// const orange = fruits[0];
// const banana = fruits[1];
// const pineapple = fruits[2];

// console.log(orange, banana, pineapple);

// // second way using destructuring
// const [person1, , person3, , person5] = friends;
// console.log(person1, person3, person5);

// 04_ swap variables
// objects into variables
// array

// let first = "ram";
// let second = "pido";

// // let temp = second;
// // second = first;
// // first = temp;

// // console.log(first, second);

// // array destructuring
// [first, second] = [second, first];

// console.log(first, second);

// 04_ destructuring objects

// const bob = {
//   first: "ram",
//   last: "yadav",
//   city: "chicago",
//   siblings: {
//     sister: "pido",
//   },
// };

// // destructure object in js
// const {
//   first: firstName,
//   last: lastName,
//   city: cityname,
//   zip,
//   siblings: { sister: favroiteSister },
// } = bob;
// console.log(firstName, lastName, cityname, zip, favroiteSister);

// noraml way
// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;

// console.log(firstName, lastName, sister);

// 04_ destructuring function parameters

// const ram = {
//   first: "ram",
//   last: "yadav",
//   city: "chicago",
//   siblings: {
//     sister: "pido",
//   },
// };

// function printPerson({ first, last, city }) {
//   // console.log(person.first);
//   // const { first, last, city } = person;
//   console.log(first, last, city);
// }
// printPerson(ram);

// 04_ (new) string methods in es6
// startswith(), endswith(), includes(),repeat()

// const person = "Ram yadav";
// const employee = "123456-emp-ram-yadav";
// const manager = "6253-hjkdgbfh-hjdfg76";

// // startsWith
// // its is case sensitive
// // console.log(person.startsWith("Ram"));
// // console.log(person.startsWith("ram"));

// // endsWith
// // first value what you want to find and second is index value
// // console.log(employee.startsWith("emp", 7));

// // includes
// // console.log(employee.includes("ram"));

// // multiply function

// const multiplyPeople = (person, amount = 5) => person.repeat(amount);

// // repeat
// const people = multiplyPeople(person, 10);
// console.log(people);

// 04 __for of loop
// for of - loops through the values of an iterable object
// strings , Array, Map ,set etc -Not object
// unlike forEach - we can use break, continue

// const fruits = ["apple", "banana", "orange", "peach"];
// const longName = "ram narayan yadav II";
// let shortName = "";

// for (const letter of longName) {
//   if (letter === " ") {
//     continue;
//   } else {
//     shortName += letter;
//   }
// }
// // console.log(shortName);

// for (const fruit of fruits) {
//   if (fruit === "banana") {
//     // break;
//     continue;
//   }
//   console.log(fruit);
// }

// ---04 _spread operator ...
// allows an iterable to spread/ expand individually inside reciever
// split into single items and copy them.

// const udemy = "udemy";
// const letters = [...udemy];
// console.log(letters);

// const boys = ["john", "ram", "syam"];
// const girls = ["geeta", "seeta"];

// const bestFriend = "harry";

// const friends = [...boys, ...girls, bestFriend];
// console.log(friends);

// // reference
// // const newFriends = friends;
// const newFriends = [...friends];
// newFriends[0] = "pidoori";
// console.log(newFriends);
// console.log(friends);

// ES2018 - es8

// const person = { name: "ram", job: "developer" };
// const newperson = { ...person, country: "india", name: "harry" };
// console.log(person);
// console.log(newperson);

// 04_-- spread operator - in dom element

// const heading = document.querySelectorAll("h1");
// const result = document.getElementById("result");

// // map() creates a new array from calling a function for every array element.

// const text = [...heading]
//   .map((item) => `<span>${item.textContent}</span>`)
//   .join("");
// // console.log(text);
// result.innerHTML = text;

// 04 -- spread operator - function arguments
// allows an iterable to spread/ expand individually inside reciever
// split into single items and copy them

// const number = [23, 24, 45, 65, 76, 87, 98, 7896, 345566];
// // Numeric expressions to be evaluated.Returns the larger of a set of supplied numeric expressions.

// console.log(Math.max(...number));

// const ram = ["ram", "yadav"];
// const sayHello = (name, lastName) => {
//   console.log(`hello ${name} ${lastName}`);
// };
// sayHello(...ram);

//05_-- rest operators in js
// Rset Operator ...
// gathers/collecting item
// gathers/collecting the parameter for passing functions
// spread operator for the arguments
// rest operator for the parameters
// arrays
// const fruit = ["apple", "orange", "lemon"];
// const [first, ...fruits] = fruit;
// console.log(first, fruits);

// // objects
// const person = { name: "john", lastName: "smith", job: "developer" };
// // const { job, ...rest } = person;
// const { job, ...rest } = person;
// console.log(job, rest);

// const testScores = [78, 45, 65, 32, 65, 99];

// const getAverage = (name, ...scores) => {
//   console.log(name);
//   console.log(scores);
//   let total = 0;
//   for (const score of scores) {
//     total += score;
//   }
//   console.log(`${name}'s average score is ${total / scores.length}`);
// };

// getAverage(person.name, 78, 90, 56, 43);
// getAverage(person.name, ...testScores);

// 05--string operators array.of
// array.from and array.of - Not on the prototype
// array.from
// array.of
// of creates a new array instance from a variable number of arguments.

// const example = ["one", "two", "three"];
// // console.log(example);
// // console.log(example.map);
// // console.log(example.from);
// // console.log(example.of);

// const friends = Array.of("ram", 2, true);
// console.log(friends);

// --Array.from - strings and arguments object
// from - returns Array object from any object with a length property or an iterable object
// from turns array-like/ish into array - string, nodelist,set

// array .from of string
// const udemy = "udemy";
// console.log(Array.from(udemy));

// // argument object
// function countTotal() {
//   // console.log(arguments);
//   let total = Array.from(arguments).reduce(
//     (total, currNum) => (total += currNum),
//     0
//   );
//   console.log(total);
// }
// countTotal(67, 89, 54);

// 05-- array.from - dom element nodelist
// Array.from and Array.of - NOT ON THE PROTOTYPE

// from - returns Array Object from any object with a length property or an iterable object
// from turns array-like/ish into array - string,nodeList,Set

// const p = document.querySelectorAll("p");
// const result = document.getElementById("result");
// const second = document.getElementById("second");

// let newText = Array.from(p);
// newText = newText.map((item) => `<span>${item.textContent}</span>`).join(" ");

// result.innerHTML = newText;

// const text = Array.from(document.querySelectorAll("p"), (item) => {
//   return `<span>${item.textContent}</span>`;
// }).join(" ");

// second.innerHTML = text;

// 05-- find, findindex,every, some
//find -gets specific item
// findIndex - get's index of the item;
// every - every item in the array
// some - at least one item

const people = [
  { id: 1, name: "john" },
  { id: 2, name: "petter" },
  { id: 3, name: "ram" },
];
// const grades = ["A", "B", "A", "B", "C"];
// const goodGrades = ["A", "B", "A", "B"];

// FIND
// const ram = people.find((person) => person.name === "ram");
// console.log(ram);

// find index
// const person = people.findIndex((item) => item.id === 3);
// console.log(person);
// const newPeople = people.slice(0, person);
// console.log(newPeople);

// every
// const grades = ["A", "B", "A", "B", "C"];
// const goodGrades = ["A", "B", "A", "B"];

// --- for in loop
// const person = {
//   name: "john",
//   age: 25,
//   status: "student",
// };

// for (const propertyName in person) {
//   console.log(`${propertyName}`);
// }

// --05 -- methods of converting objects to array
// object.keys() - converts property names into array
// object.values() - converts property values into array
// object.entries() - conert both

// const person = {
//   name: "john",
//   age: 25,
//   status: "student",
// };

// // value
// // const value = Object.values(person);
// // console.log(value);
// // keys
// // const key = Object.keys(person);
// // console.log(key);
// const result = Object.entries(person);
// console.log(result);

// // map method
// const newResult = result.map((item) => {
//   const [first, second] = item;
//   console.log(first, second);
//   return first;
// });

// console.log(newResult);

// 05--- set objects
// it srores a collection of unique values of any type

// new Set()
// add(value)
// delete(value)
// clear()
// has(value)

// iterators
// entries(),keys(),values(),forEach()

// Array includes() - checks if the item is an array
// useful in the conditional statements

// const unique = new Set();
// const random = "third";

// unique.add("first");
// unique.add("second");
// unique.add("random");
// unique.add("first");
// unique.add(4);

// // const result = unique.delete("third");
// // console.log(result);
// const result = unique.delete("five");
// console.log(result);
// console.log(unique);

// const groceries = ["milk", "bread", "meat"];

// let randomItem = "lemon";
// randomItem = "milk";

// // const isIncluded = groceries.includes(randomItem, 1);
// // console.log(isIncluded);

// if (groceries.includes(randomItem)) {
//   console.log(`Yeah! it's on the list`);
// }

//05 -- new set() - accepts iterable objects

// const products = [
//   {
//     title: "high-back bench",
//     comapny: "ikea",
//   },
//   {
//     title: "albeny table",
//     comapny: "marcos",
//   },
//   {
//     title: "accent chair",
//     comapny: "caress",
//   },
//   {
//     title: "wooden table",
//     comapny: "ikea",
//   },
// ];

// const companies = products.map((item) => item.comapny);
// console.log(companies);

// const uniqueCompanies = new Set(companies);
// console.log(uniqueCompanies);

// const finalcompanies = [...uniqueCompanies];
// console.log(finalcompanies);

// string includes - srings checks a another string

// --rest array includes
// const groceries = ["milk", "bread", "meat"];

// let randomItem = "lemon";
// randomItem = "milk";

// const isIncluded = groceries.includes(randomItem, 1);
// console.log(isIncluded);

// if (groceries.includes(randomItem)) {
//   console.log(`Yeah! it's on the list`);
// }
