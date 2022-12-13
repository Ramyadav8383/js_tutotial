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

const number = 1;
let number2 = number;
number2 = 7;

console.log(`the first value is ${number} `);
console.log(`the second value is ${number2} `);
