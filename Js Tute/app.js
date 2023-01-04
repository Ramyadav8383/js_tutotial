// ---------------------------------------------
// 02_basics
// helper methods
// document.write("hello world");
// alert("hello world");
// console.log("helllo world");

// document.write("hello world");
// alert("hello world");
// console.log("hello world");

// document.write({ name: "ram" });
// alert({ name: "ram" });
// console.log({ name: "ram" });
// --------------------------------------------
// 03_statements and comments
// I woke up early him today
// statements - sets of instructions
// comments - ctrl+/
// This is console statement
// console.log("Hello world");
// console.log("Hello people");
// console.log("Hello pidoori");
// console.log("Hello Mommy");
// console.log("Hello chetii");
// console.log("Hello Lailuuu");
// console.log("Hello Lala");
// console.log("Hello pita ji");
// document.write("hello world");
// ------------------------------------------------
// 04_variables
// variables- most basic building block
// variables- stores, access , modify === value
// Declare , assignment operator, assign value
// assign variable value later , modify existing
// let Name = "Ram Narayan Yadav Noida Up Uk";
// let address, zip, state;
// address = "101 main street";
// zip = "201304";
// state = "up";
// Name = "pidoori";
// console.log(address, zip, state);
// console.log(Name);

// --------------------------------------------
// 05_variables Naming
// can contain digits, letters, underscore, $
// must start with letter, $ or _

// no Keyword
// cannot start with numbers
// case sensitive - Fullname vs fullname

// camelCase or underscore

// let random123_$ = "random";
// let Random123$ = "random2";
// console.log(random123_$);
// console.log(Random123$);

// --------------------------------------
// 06_const,let,var
// using var
// var value = "some value";
// value = "some More Value";

// using let
// let name = "Ram";
// name = "Harry";

// // using const (constant)   //-can't Re-assign
// const lastName = "Narayan";

// console.log(value);
// console.log(name);
// console.log(lastName);

// --------------------------------------
// 07_variable_challange
// variable #1
// let firstName = "ram";
// let address = "main street";
// address = "first street";
// console.log(firstName);
// console.log(address);

// variable #2
// let street = "main street";
// let country = "India";
// let fullMailingAddress = street + country;
// console.log(fullMailingAddress);

// 08_quotation marks
// " " or ' '
// ``
// const Name = "Ram's Narayan yadav";
// console.log(Name);

// ---------------------------------
// 09_string conactination
// string concatination - Combine String values
// `` - backticks (template strings) easier option.

// const name = "ram";
// const lastName = "Yadav";

// let fullName = name + " " + lastName;

// console.log("hello there your full name is: " + fullName);

// const website = "google";

// const url = "https://www." + website + ".com";

// console.log(url);

// ---------------------------------------
// 10_number_basics
// numbers
// loosely Typed = don't declare type
// const number = 40;
// let dummy = 1.234;
// dummy = "hey bro";
// const number2 = 1.456;
// const number3 = "1.456";
// basic mathematic operations
// const add = number + number2;
// const sub = number - number2;
// const mul = number * number2;
// const div = number / number2;

// console.log(add);
// console.log(sub);
// console.log(mul);
// console.log(div);
// console.log(number);
// console.log(number2);
// console.log(number3);

// --------------------------------------
// 11_number_additional
// Numbers
// += ,-=, /=, *=, ++, --, %
// modulus (%) operator returns the remainder after integer division
// let number = 40;
// number += 5;
// number += 5;
// number += 5;
// number += 5;
// number += 5;
// number += 5;
// number += 5;
// number -= 5;
// number++;
// number++;
// number--;

// modulus
// const slices = 10;
// const children = 3;
// const amount = slices % children;
// const amount = slices / children;

// random operation
// const random = 4 + 6 + 10 * 10;
// const random2 = (4 + 6 + 10) * 10;

// console.log(random);
// console.log(random2);
// console.log(amount);
// console.log(number);

// -------------------------------------
// 12_implicit type conversion
// string concatination
// const name = "ram";
// const lastName = "yadav";
// const fullName = name + " " + lastName;
// console.log(fullName);

// number concatination
// const number = 20;
// const number2 = 30;
// const result = number + number2;
// console.log(result);

// const value = name - lastName;
// console.log(value);

// let number3 = 10;
// let number4 = 40;

// number4 = "40";

// const result2 = number3 - number4;
// const result2 = number3 / number4;
// const result2 = number3 + number4;
// console.log(result2);

// const randomNumber = 13;
// document.querySelector(".form").addEventListener("submit", function (e) {
//   e.preventDefault();
//   let value = document.getElementById("amount").value;
//   value = parseInt(value);
//   console.log("input value Type");
//   console.log(value);
//   console.log("sum of two values");
//   console.log(randomNumber + value);
// });

// --------------------------------------
// 13_datatypes in js
// Data Types - 7 Total
// Primitive - String, Number, Boolean, Null, Undefined, Symbol
//object - Arrays, Functions, Objects

//typeof- operator (typeof variables) (typeof value)

// string
// const text = "some text";

// number
// const number = 10;

// Boolean
// let value1 = true;
// let value2 = false;

// Null
// const result = null;
// Undefined
// let name;

// symbol(ES6)

// console.log(typeof text);
// // console.log(typeof 10);
// console.log(typeof "hellow world");
// console.log(typeof true);
// console.log(typeof false);
// console.log(typeof number);
// console.log(typeof null);
// console.log(typeof name);

// 14_arrays
// arrays, functions and objects
// Arrays - [] , 0 index based

// const friends = ["anna", "ram", "john", "pidoori", 45, undefined, null];
// let bestfriend = friends[3];
// friends[4] = "ammapidoo";

// console.log(bestfriend);
// console.log(friends);
// console.log(friends[4]);
// console.log(friends[8]);

// 15-functions
// functions - declare , invoke

// declaring the function // we can also pass parameters in function name  paranthesis
// function hello() {
//   // fuction body
//   console.log("hello there ram");
//   console.log("hello there Rohan");
//   console.log("hello there sukhii");
// }

// invoking the function
// hello();
// // come code here

// hello();
// // come code here

// hello();
// // come code here

// 16_ functions parametrs and arguments
// parameters - when declare / define
// placeholders , local vars
// arguments- when ivoke / call /run
// use vars/values , multiple params , undefined
// const bob = "bob";
// const anna = "anna";
// const jhon = "jhon";

// function greet(name) {
//   console.log("hello there " + name);
// }
// // greet  bob
// greet(bob);
// // greet  Anna
// greet(anna);

// // greet  John
// greet(jhon);

// 17_fuctions return
// return
// default undefined, shortcut, ignores after
// 1 inch  2.54cm

// const wallheight = 80;

// function calculate(value) {
//   const newValue = value * 2.54;
//   return newValue;
// }

// const width = calculate(100);
// const height = calculate(wallheight);

// const dimensions = [width, height];
// console.log(dimensions);

// 18_functions_expressions
// expressions- another way of defines a  functions
// create a variable, assign to function (not value) , use var
// diff - hoisting, use - arrow func , libraries,

// function defination/ declaration
// function addValue(num1, num2) {
//   return num1 + num2;
// }

// const firstValue = addValue(3, 7);
// const secondValue = addValue(30, 70);

// // function expression
// const add = function (num1, num2) {
//   return num1 + num2;
// };

// const values = [firstValue, secondValue];
// console.log(values);

// // Arrow function
// const multiply = (num1, num2) => num1 * num2;
// // libraries
// exports.nameOfMethod = function () {};

// 19_objects
// objects- key/value pairs methods
// dot notation

// const person = {
//   name: "Ram",
//   lastName: "Yadav",
//   age: 40,
//   education: true,
//   married: false,
//   siblings: ["pido", "cheti"],
//   greeting: function () {
//     console.log("My name is ram");
//   },
// };

// const age = person.age;
// console.log(age);
// person.name = "harry";
// console.log(person.name);
// console.log(person.siblings[1]);

// person.greeting();

// 20_conditional statements
// > ,<, >=, <=, ===, ==, !=, !===

// const value = 2 > 1;
// const value2 = 1 > 2;

// const num1 = 6;
// const num2 = "6";

// const value = num1 != num2;
// const value2 = num1 !== num2;
// const value = num1 == num2;
// const value2 = num1 === num2; // most of the time we use triple equal to oerator

// console.log(value);
// console.log(value2);

// const result = num1 >= num2;
// const value = false;

// if (!value) {
//   console.log("value is false");
// }

// if (num1 > num2) {
//   console.log("First number is bigger then second");
// } else if (result) {
//   console.log("first number is equal to the second number");
// } else {
//   console.log("second number is bigger than first");
// }

// 21_logical operator
// (|| - OR), (&& - AND), !

// const name = "bob";
// const age = 25;
// // if (name === "bob" || age === 24)
// if (name === "bob" && age === 26) {
//   console.log("hello there user");
// } else {
//   console.log("false value");
// }

// switch statement
// dice values: 1 - 6

// const dice = 2;

// switch (dice) {
//   case 1:
//     console.log("you got one");
//     break;
//   case 2:
//     console.log("you got two");
//     break;
//   case 3:
//     console.log("you got three");
//     break;

//   default:
//     console.log("you did not roll the dice");
//     break;
// }

// using else if
// if (dice === 1) {
//   console.log("you got one");
// } else if (dice === 2) {
//   console.log("you got two");
// } else {
//   console.log("you did not roll the dice");
// }

// using only if statement
// if (dice === 1) {
//   console.log("you got one");
// }
// if (dice === 2) {
//   console.log("you got two");
// }
// if (dice === 3) {
//   console.log("you got three");
// }
// if (dice === 4) {
//   console.log("you got four");
// }
// if (dice === 5) {
//   console.log("you got five");
// }
// if (dice < 1 || dice > 6) {
// console.log("you did not roll the dice");

// 22_while loop
// repeatedly run a block of code while condition is true
// while loop

// let amount = 10;

// while (amount > 0) {
//   console.log("I have " + amount + " dollars and I'm going to the mall");
//   amount--;
// }

// 23_do_while
// code block first , condition second
// runs at least once

// let money = 12;

// do {
//   console.log("you have " + money + " dollars");
//   money++;
// } while (money < 10);

//24_for loop
//for loop

// let i;
// for (i = 0; i < 10; i++) {
//   console.log("and the number is: " + i);
// }

// for (let number = 15; number >= 0; number--) {
//   console.log("and the number is " + number);
// }

// 25_string properties and method
// wrapper string object, don't memorize methods

// let text = ' Ram Narayan Yadav';
// let result = text.length;
// console.log(result);

// console.log(text.length);
// console.log(text.toLocaleLowerCase());
// console.log(text.toLocaleUpperCase());
// console.log(text.charAt(2));
// console.log(text.charAt(text.length - 1));
// console.log(text.indexOf('a'));
// console.log(text);
// console.log(text.trim());
// console.log(text.startsWith('Ram'));
// console.log(text.trim().toLowerCase().startsWith('ram'));
// console.log(text.slice(0, 4));
// console.log(text.slice(-1));

// 26_tempelate literals - ES6+
// backtick characters ``
// interpolation ${} - insert expression (value)

// const name = 'Ram';
// const age = 25;
// const sentence = "hey it's " + name + ' and he is ' + age + " years old.";

// const value = `hey it's ${name} and he is  ${age} years old. here is some simple math value is ${ 4+ 4}.`;
// console.log(value);

// console.log(sentence);

// 27_array_properties
// array properties and methods
// let names = ['jhon', 'bobo', 'barry', 'olga', 'ben'];
// console.log(names);
// // length
// console.log(names.length);
// console.log(names[names.length - 1]);

// // concat
// const lastNames = ['harry', 'uppal', 'karry'];
// const allNames = names.concat(lastNames);

// console.log(allNames);

// // reverse
// console.log(allNames.reverse());

// // unshift
// // is used to add the items in array
// allNames.unshift('pido');
// allNames.unshift('coco');
// console.log(allNames);
// // shift
// // method is remove the items from the array
// allNames.shift();
// allNames.shift();
// console.log(allNames);

// // push
// allNames.push('jamura');
// allNames.push('kambura');
// allNames.push('nehlu');
// console.log(allNames);
// // pop
// allNames.pop();
// allNames.pop();
// allNames.pop();
// console.log(allNames);

// // splice -mutates original array

// const specificName = allNames.splice(2, 2);
// console.log(specificName);
// console.log(allNames);

// 28_exercise -full name
// Arrays and for loop

// const names = ['ram', 'shyam', 'geeta', 'sita'];
// const lastName = 'shakeandbake';
// let newArray = [];

// // for loop
// for (let i = 0; i < names.length; i++) {
//   console.log(i);
//   console.log(names[i]);
//   const fullName = `${names[i]} ${lastName}`;
//   newArray.push(fullName);
// }

// console.log(names);
// console.log(newArray);

// 29exercise calculate total
// function, return, if ,arrays, for loop

// const gas = [20, 40, 100];
// const food = [10, 40, 50];

// function calculateTotal(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//     // console.log(arr[i]);
//   }
//   if (total > 100) {
//     console.log(`whoa! you are spending way too much`);
//     return total;
//   }
//   console.log(`you are  good total is less than 100`);
//   return total;
// }
// const gasTotal = calculateTotal(gas);
// const foodTotal = calculateTotal(food);
// const randomTotal = calculateTotal([200, 4000, 500, 1]);

// console.log({
//   gas:gasTotal,
//   food:foodTotal,
//   random:randomTotal,
// });

// 30_value refrences
// refrences vs value
// primitive data types
// string, number , symbol, boolean, undefined, Null,
// Arrays, Functions, Objects = object
// typeof

// when assigning primitive data type value to a variable any changes are made directly to that value, without affecting original value

// when assigning no-primitive data type value to a variable is done by reference so any changes will affect all the references.

// const number = 1;
// let number2 = number;
// number2 = 7;

// console.log(`the first value is ${number} `);
// console.log(`the second value is ${number2} `);

// let person = { name: 'bob' };
// // let person2 = person;
// let person2 = { ...person };

// person2.name = 'susy';

// console.log(`the name of the first person is ${person.name}`);
// console.log(`the name of the second person is ${person2.name}`);

// 31_null and undefined
// both represent "no value"
// undefined - "javascript can not find value for this"

// variable without value
// missing function arguments
// missing object properties

// null = "developer sets the value"
// number = 20 + null; // 20+ 0
// number2 = 30 + undefined;
// console.log(number);
// console.log(number2);

// 32_truthy falsy
// "", '', ``, 0, -0 , NaN, false , null, undefined
// const bool1 = true;
// const bool2 = 3 > 2;

// // const text = 'ram chandran';
// const text = 'ram';
// if (text) {
//   console.log("its is truthy");
// }
// else {
//   console.log("hey its falsy");
// }

// if (bool1) {
//   console.log("hey it works!");
// }
// if (bool2) {
//   console.log("hey it also works!");
// }

// 33_unary and ternary operators
// unary operator - typeof
// let text = 'some text';
// console.log(typeof text); // operand
// // binary operator - assignment
// let number = 3;
// let number2 = 2 + 5;
// // console.log(number2)
// // ternary operator
// // condition ? (runs if true) : (runs if false)

// const value = 2 > 1;

// value ? console.log('value is true') : console.log('value is false');

// if (value) {
//   console.log('value is true');
// }
// else {
//   console.log('value is false');
// }

// 34_global scope and local scope
// any variable outside code block {} is said to be in global scope
// can be access anywhere in the program
// gotchas : name collisions, modify by mistake

// let name = 'ram';
// name = 'pido';

// function calculate() {
//   console.log(name);
//   name = 'orange';
//   function inner() {
//     name = "hey bro";
//     console.log(`this is from inner function ${name}`);
//   }
//   inner();
// }
// calculate();

// if (true) {
//   console.log(name);
//   name = 'pants';
// }

// console.log(`my name is ${name} and i'm awesome`);

// 35_local scope
// local scope
// can not be access from outside the code blocks
// if - NOT VAR we are not talking about VAR

// let name = "ram";

// function calculate() {
//   const name = "ram";
//   const age = 20;
//   // console.log(name);

//   becomesGlobal = 'global variable';
// }

// calculate();
// // console.log(age);
// console.log(becomesGlobal);

// if (true) {
//  console.log('harry');
// }
// {
//   const name = "ram";
//   const special = "spcial";
// }
// console.log(special);

// console.log(`my name is ${name} and i'm awesome`);

// 26_variable lookup
// {} - code block

// const globalNumber = 5;

// function add(num1, num2) {
//   const globalNumber = 20;
//   const result = num1 + num2 + globalNumber;
//   function multiply() {
//     const globalNumber = 100;
//     const multiplyResult = result * globalNumber;
//     console.log(multiplyResult)
//   }
//   multiply();
//   return result;
// }
// console.log(add(3, 5));

// 37_calback function and higher order functions
// calback function, higher order function, functions as first class objects/ citizens
// Functions are first class objects- stored in a variable(expression),passed as an argument to another function, return from the function (closure)
// Higher Order function- accepts another function as an argument or returns another function as a result
// calback function- passed to a another function as an argument and executed inside the function

// function morning(name) {
//   return `Good Morning ${name.toUpperCase()}`;
// }
// function afternoon(name) {
//   return `Good Afternoon ${name.repeat(3)}`;
// }
// // function morning(name) {
// //   return `Good Morning ${name.toUpperCase()}`;
// // }
// // high order function with call back
// function greet(name, cb) {
//   const myName = "harry";
//   console.log(`${cb(name)} my name is ${myName}`);
// }
// greet("pido" , morning);
// greet("peter", afternoon);

// function greetMorning(name) {
//   const myName = "Ram";
//   console.log(`Good morning ${name} my name is ${myName}`);
// }
// function greetAfternoon(name) {
//   const myName = "harry";
//   console.log(`Good afternoon ${name} my name is ${myName}`);
// }
// greetMorning("pido");
// greetAfternoon("pido");

// 38_array iterators
// Powerfull Array Methods
// forEach, map, filter,find,reduce
// Iterate over array- no for loop required
// accept CALLBACK function as an argument, calls callback against each item in a array. Reference Item in the Callback Parameter.

// const numbers = [0, 1, 2, 3, 4];

// // show all numbers

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// 39_forEach
// it does not return new array

// const people = [
//   { name: 'bob', age: 25, position: 'developer' },
//   { name: 'harry', age: 20, position: 'designer' },
//   { name: 'knight', age: 23, position: 'Tester' }
// ];

// // function seperately
// function showPerson(person) {
// console.log(person.position.toUpperCase());
// }

// // people.forEach(showPerson);

// people.forEach(function (item) {
//   console.log(item.position
//   .toUpperCase())
// })

// 40_map method
// does return a new array
// does not change size of original array
// uses values from original array when making new one

// const people = [
//   { name: 'bob', age: 20, position: 'developer' },
//   { name: 'harry', age: 25, position: 'Designer' },
//   { name: 'potter', age: 28, position: 'tester' },
//   { name: 'pido', age: 22, position: 'boss' },
// ];

// const ages = people.map(function (person) {
//   // console.log(person);
//   // return "hello world";
//   // return person;
//   // return person.age + 20;
//   return person.position;
// });

// const newPeople = people.map(function (person) {
//   return {
//     firstName: person.name.toUpperCase(),
//     oldAge: person.age + 20,
//   };

// });

// const names = people.map(function (person) {
//   return `<h1>${person.name}</h1>`
// });

// document.body.innerHTML = names.join('');
// // console.log(ages)
// console.log(names);

// 41_filter method
// does return a new array
// can manipulate the size of new array
// return based on condition

// const people = [
//   { name: 'bob', age: 20, position: 'developer' },
//   { name: 'harry', age: 25, position: 'Designer' },
//   { name: 'potter', age: 28, position: 'tester' },
//   { name: 'pido', age: 22, position: 'boss' },
// ];

// const youngPeople = people.filter(function (person) {
//   return person.age <= 25;

// });
// const developers = people.filter(function (person) {
//   return person.position === 'graphic designer';
// });
// // console.log(youngPeople);
// console.log(developers);

// 42_find method
// returns single instance -(in this case object)
// returns first match , if no match undefined
// great for getting unique value

// const people = [
//   { name: "bob", age: 20, position: "developer", id: 1 },
//   { name: "harry", age: 25, position: "Designer", id: 2 },
//   { name: "potter", age: 28, position: "tester", id: 3 },
//   { name: "pido", age: 22, position: "boss", id: 4 },
// ];

// const names = ['bob', 'peter', 'susy','pido'];
// console.log(
//   names.find(function (name) {
//   return name === "pido";
//   // return name === "zelda";
//   })

// );

// const person = people.find(function (person) {
//   return person.id === 3;
// });

// // console.log(person);
// console.log(person.name);

// const person2 = people.filter(function (person) {
//   return person.id === 3;
// });
// console.log(person2[0].name);

// 43_reduce method
// reduce
// iterates , callback function
// reduces to a single value - number , array, object
// 1 parameter ('acc') - total of all calculations
// 2 parameter ('curr') - current iteration/value

// const people = [
//   { name: "bob", age: 20, position: "developer", id: 1, salary: 200 },
//   { name: "harry", age: 25, position: "Designer", id: 2, salary: 300 },
//   { name: "potter", age: 28, position: "tester", id: 3, salary: 500 },
//   { name: "pido", age: 22, position: "boss", id: 4, salary: 500 },
// ];

// const total = people.reduce(function (acc, currItem) {
//   console.log(`total ${acc}`);
//   console.log(`current money: ${currItem.salary}`);
//   acc += currItem.salary;
//   return acc;
// }, 500);

// console.log(total);

// 44_math object
// standard built-in objects - always available
// const number = 5.63737;
// const result = Math.floor(9.56756);

// const number = 5.12222;
// const result = Math.ceil(number);

// const number = 100;
// const result = Math.sqrt(number);

// const result = Math.PI;
// const result = Math.min(4, 6, 8, 9, 10);
// const result = Math.max(4, 6, 8, 9, 10, 23, 23, 4, 5);

// const result = Math.floor(Math.random() * 10) + 1;
// console.log(result);

// 45_ date object

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Augest",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday",
];

// const date = new Date();
const date = new Date("1/12/2020");
const month = date.getMonth();
console.log(months[month]);
// console.log(date);

const day = date.getDay();
console.log(days[day]);

console.log(date.getDate());
console.log(date.getFullYear());

const sentence = `${days[day]}, ${date.getDate()} ${
  months[month]
} ${date.getFullYear()}`;

console.log(sentence);

document.body.innerHTML = sentence;
