// objects basics

// objects are collection of key(property) value pairs proerty values can be strings, numbers, booleans, array and function however if the property value is a function its called a method

// object literal syntax, {}
// dot notation

// const person = {
//   name: "ram",
//   age: 25,
//   married: false,
//   siblings: ["anna", "peter"],
//   greet: function (name) {
//     console.log(`hello, my name is ${name}`);
//   },
//   sayHello(name) {
//     console.log(`hello, my name is ${name}`);
//   },
// };

// // console.log(person);
// // console.log(person.name);

// const name = person.name;
// console.log(name);

// person.age = 42;
// person.city = "uttar pradesh";
// console.log(person);

// // delete property /key
// const siblings = delete person.siblings;
// console.log(siblings);
// // delete person.siblings;
// // console.log(person);

// 02_ nested objects and bracket notation
// set variable as property value
// dot notation vs bracket notation
// const age = 48;
// let random = "random-value";
// random = "age";
// const person = {
//   name: "ram",
//   age,
//   // age: age,
//   married: false,
//   siblings: ["anna", "peter"],
//   greet: function (name) {
//     console.log(`hello, my name is ${name}`);
//   },
//   sayHello(name) {
//     console.log(`hello, my name is ${name}`);
//   },
//   job: {
//     title: "developer",
//     company: {
//       name: "coding addict",
//       adress: "123 vill. salarpur",
//     },
//   },
//   "random-value": "random",
// };
// // console.log(person.job.title);
// // console.log(person.job.company.name);
// console.log(person.job.company.adress);
// console.log(person.age);
// console.log(person["name"]);
// console.log(person["random-value"]);
// console.log(person[random]);

// 03_this keywords
//points to the left of the dot
// const age = 30;
// const bob = {
//   firstName: "bob",
//   lastName: "marley",
//   fullName: function () {
//     console.log(this);
//     console.log(`my full name is ${this.firstName} ${this.lastName}`);
//   },
//   // age: 25,
//   // address: "janta flat sec 71",
// };
// // this keyword is always pointing to the object , this keyword is refrencing the left object that is written before dot
// const john = {
//   firstName: "john",
//   lastName: "jacob",
//   fullName: function () {
//     console.log(this);
//     console.log(`my full name is ${this.firstName} ${this.lastName}`);
//   },
//   // age: 30,
//   // address: "mamora village sec- 66",
// };
// bob.fullName();
// john.fullName();

// this keyword advanced feature
// in Regular functions (not arrow) "this " determined by "how"!!! a function is invoked (left of .)

// defaults to global - window
// arrow functions - pump the breaks

// this is global window object
// console.log(this);

// function showThis() {
//   console.log(this);
// }

// const john = {
//   name: "jhon",
//   showThis: showThis,
// };
// const bob = {
//   name: "bob",
//   showThis: showThis,
// };

// john.showThis();
// bob.showThis();

// showThis();

// // selecting classes
// const btn1 = document.querySelector(".btn-1");
// const btn2 = document.querySelector(".btn-2");

// btn1.addEventListener("click", showThis);
// btn2.addEventListener("click", showThis);
// // invovked a global window object
// btn2.addEventListener("click", function () {
//   showThis();
// });

// 04_ factory function
// blue print
// factory function and constructor functions
// factory function

// const john = {
//   firstName: "john",
//   lastName: "jacob",
//   fullName: function () {
//     console.log(`my full name is ${this.firstName} ${this.last} and I love js`);
//   },
// };
// const krishten = {
//   firstName: "krishten",
//   lastName: "martin",
//   fullName: function () {
//     console.log(`my full name is ${this.firstName} ${this.last}`);
//   },
// };

// using factory function
// function createPerson(firstName, lastName) {
//   return {
//     // firstName,
//     // lastName,
//     firstName: firstName,
//     lastName: lastName,
//     fullName: function () {
//       console.log(
//         `my full name is ${this.firstName} ${this.lastName} and I love JS`
//       );
//     },
//   };
// }
// const john = createPerson("john", "jacob");
// // console.log(john);
// john.fullName();
// const kristen = createPerson("kristen", "martin");
// // console.log(kristen);
// kristen.fullName();
// const harry = createPerson("harry", "potter");
// // console.log(harry);
// harry.fullName();

//05_constructor function
// new - creates new object , points to it , omit return

// constructor function
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.fullName = function () {
//     console.log(
//       `my full name is ${this.firstName} ${this.lastName} and I love JS`
//     );
//   };
//   console.log(this);
// }
// // new keyword is allowing to return the object and create the new object
// const john = new Person("john", "jacob");
// john.fullName();
// const bob = new Person("bob", "marley");
// bob.fullName();

// function createPerson(firstName, lastName) {
//   return {
//     // firstName,
//     // lastName,
//     firstName: firstName,
//     lastName: lastName,
//     fullName: function () {
//       console.log(
//         `my full name is ${this.firstName} ${this.lastName} and I love JS`
//       );
//     },
//   };
// }

// constructor property
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.fullName = function () {
//     console.log(
//       `my full name is ${this.firstName} ${this.lastName} and I love JS`
//     );
//   };
// }

// const john = new Person("john", "jacob");
// // console.log(john.constructor);

// const bob = {};
// console.log(bob.constructor);
// const list = [];
// console.log(list.constructor);
// const sayHi = function () {};
// console.log(sayHi.constructor);

// const susy = new john.constructor("susy", "carpenter");
// susy.fullName();

// 06_prototype property
// prototypal inheritance modal javascript uses prototypal inheritance model. this means that every constructor function/ class has a prototype property that is shared by every instance of the constructor/ class. so any properties and methods or prototype can be accessed by every instance. prototype property returns a object

// function Account(name, initialBalance) {
//   this.name = name;
//   this.balance = initialBalance;
//   this.deposit = function (amount) {
//     this.balance += amount;
//     console.log(`Hello ${this.name}, your balance is ${this.balance}`);
//   };
// }

// const john = new Account("john", 200);
// const bob = new Account("bob", 0);

// // console.log(Account.prototype);
// Account.prototype.bank = "CHASE";
// Account.prototype.deposit = "CHASE";
// console.log(john.bank);
// console.log(bob);

// 08_ calls in js

// call - runs instantly , argument- list of items

// const john = {
//   name: "john",
//   age: 24,
//   greet: function () {
//     console.log(this);
//     console.log(`hello, iam ${this.name} and i am ${this.age} years old`);
//   },
// };
// const bob = {
//   name: "bob",
//   age: 21,
// };
// john.greet();

// function greet() {
//   console.log(this);
//   console.log(`hello, iam ${this.name} and i am ${this.age} years old`);
// }
// const secondGreet = john.greet;

// secondGreet();

//--- apply arguments
// call -runs instantly, arguments - list of items
// apply- runs instantly, arguments - array of items
// bind- assign, use later, arguments - list of items
// const john = {
//   name: "john",
//   age: 24,
// };
// const bob = {
//   name: "bob",
//   age: 21,
// };

// function greet() {
//   console.log(this);
//   console.log(`hello, iam ${this.name} and i am ${this.age} years old`);
// }
// greet.call(john, "salarpur", "noda");
// greet.call(bob);
// greet.call({ name: "peter", age: 30 });
// greet.call(john);
// greet.call(bob);
// greet.call({ name: "peter", age: 30 });

// --- bind

// const john = {
//   name: "john",
//   age: 24,
// };
// const bob = {
//   name: "bob",
//   age: 21,
// };

// function greet() {
//   console.log(this);
//   console.log(`hello, iam ${this.name} and i am ${this.age} years old`);
// }

// // assign , call it later
// const bobGreet = greet.bind(bob, "salarpur", "noida");
// bobGreet();

//--- example of call apply bind through button example

const counter = {
  count: 0,
  increment() {
    console.log(this);
    this.count++;
    console.log(this.count);
  },
};

const btn = document.querySelector(".btn-increment");

// fail
// btn.addEventListener("click", counter.increment);
// some edge cases
// btn.addEventListener("click", counter.increment.bind(counter));

const increment = counter.increment.bind(counter);
btn.addEventListener("click", increment);
btn.removeEventListener("click", increment);
