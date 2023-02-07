// IIFE - immediately-invoked function expression - this is older approach , we will use modules
// older approach - new modules
// simple approach to avoid global scope pollution
// good way at protecting the scope of your function and the variables within it.

// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

// It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:
// The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

// global namespace,

// const num1 = 47;
// const num2 = 56;

// function add() {
//   console.log(`the sum of the numbers is: ${num1 + num2}`);
// }
// add();

// // IIFE function

// (function () {
//   const num3 = 30;
//   const num4 = 60;
//   console.log(`the sum of the numbers is: ${num3 + num4}`);
// })();

// console.log(num1);

// (function () {
//   const num3 = 30;
//   const num4 = 60;
//   console.log(`the sum of the numbers is: ${num3 + num4}`);
// })();
// // pass arguments
// (function (num3, num4) {
//   // const num3 = 30;
//   // const num4 = 60;
//   console.log(`the sum of the numbers is: ${num3 + num4}`);
// })(300, 600);
// // return/ assign to variable
// const result = (function (num3, num4) {
//   console.log(`the sum of the numbers is: ${num3 + num4}`);
//   return num3 + num4;
// })(800, 600);

// console.log(result);

// 02-- hoisting
// function and var declarations are hoisted
// safer to acces only after initialized

// Hoisting is JavaScript's default behavior of moving declarations to the top.
// display();
// complex();

// const firstName = "john";
// let lastName = "harry";
// var random = "random";

// function display() {
//   console.log("hello world");
// }

// function complex() {
//   console.log(`${firstName}${lastName} ${random}`);
// }

// 03_ closure
// closure gives you can access to an other function scope from an inner function
// make private variables with closures

// function outer() {
//   let privateVar = "secret";
//   function inner() {
//     console.log(`hello there seceret is: ${privateVar}`);
//   }
//   return inner;
//   inner();
// }
// // console.log(privateVar);
// outer()();

// const value = outer();
// console.log(value);
// value();

// example of closure
function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`hey ${name}, your balance is ${balance}`);
  }
  function deposit(amount) {
    balance += amount;
    showBalance();
  }
  function withdraw(amount) {
    if (amount > balance) {
      console.log(`hey, ${name}, sorry not enough funds`);
      return;
    }
    balance -= amount;
    showBalance();
  }
  return { showBalance: showBalance, deposit: deposit, withdraw: withdraw };
}

// newAccount("susan", 500)();

const john = newAccount("john", 3000);
const bob = newAccount("bob", 1000);
john.showBalance();
// bob.showBalance();
john.deposit(1000);
bob.deposit(200);
bob.showBalance();
