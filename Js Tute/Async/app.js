// Async
// synchronous
// Asynchronous
// callbacks
// promises
// Async /Await

// javascript is single threaded, synchronous langauge
//javascript read the code line by line when one line is executed then move to the next line of code (line after line)

// console.log("i am first");
// console.log("i am second");
// console.log("i am third");

// console.log("i am first");
// boilingWater();
// console.log("i am third");

// function boilingWater() {
//   console.log("boiling...");
//   for (let i = 0; i < 10000; i++) {
//     console.log("still not done");
//   }
//   console.log("done");
// }

// example
// make soup
// chop onion
// chop carrot
// boil water 10 min
// add carrot boil for 5 min
// add onion boil for 5 min
// Browser!!!! fetch Data, Get Geolacation, setTimeout, setTimer etc
// Asynchronous javascript

// boilingWater(10000);
// console.log("chop onion");
// boilingWater(5000);
// console.log("chop carrot");
// boilingWater(5000);

// asynchronous means the things are happening in the background
// boilWater(0);
// console.log("chop carrots");
// // for (let i = 0; i < 10000; i++) {
// //   console.log("still busy");
// // }

// function boilWater(time) {
//   console.log("boiling...");
//   setTimeout(() => {
//     console.log("done");
//   }, time);
// }

//--01 calbacks hells, promises , async/await

// boilWater();
// console.log("chop carrots");

// function boilWater() {
//   console.log("boiling...");
//   setTimeout(() => {
//     console.log("done");
//     console.log("add carrot");
//     setTimeout(() => {
//       console.log("carrot done");
//       console.log("add onion");
//       setTimeout(() => {
//         console.log("onion done");
//       });
//     }, 5000);
//     console.log("chop onion");
//   }, 10000);
// }

// ---01 callback hell dom examples , promises , asyn/await
//
// const heading1 = document.querySelector(".one");
// const heading2 = document.querySelector(".two");
// const heading3 = document.querySelector(".three");

// const btn = document.querySelector(".btn");

// // callback hells nesting in callback
// btn.addEventListener("click", () => {
//   // console.log("you click the btn");
//   setTimeout(() => {
//     heading1.style.color = "red";
//     setTimeout(() => {
//       heading2.style.color = "blue";
//       setTimeout(() => {
//         heading3.style.color = "green";
//       }, 1000);
//     }, 1000);
//   }, 1000);
// });

// console.log(`i am second`);

// 01--- promises -pending, Resolved, rejected
// -then- catch - pass another callback

// ----- promisessss------
// const heading1 = document.querySelector(".one");
// const heading2 = document.querySelector(".two");
// const heading3 = document.querySelector(".three");

// const btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {});

// // promise (promise constructor)
// // Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined
// const promise = new Promise((resolve, reject) => {
//   let value = true;
//   if (value) {
//     resolve([1, 2, 3, 4]);
//   } else {
//     reject("there was a error, value is false");
//   }
// });
// // console.log(promise);
// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     err;
//   });

// -------promises------reject example
// what if no resolve , one is rejected

// const heading1 = document.querySelector(".one");
// const heading2 = document.querySelector(".two");
// const heading3 = document.querySelector(".three");

// const btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//   addColor(1000, heading1, "red");
// });

// function addColor(time, element, color) {
//   return new Promise((resolve, reject) => {
//     if (element) {
//       setTimeout(() => {
//         element.style.color = color;
//         resolve();
//       }, time);
//     } else {
//       reject(new Error(`there is no such element ${element}`));
//     }
//   });
// }

// 01-- async/ await

// async function someFunction() {
//   await
// }
// const otherFunction = async () => {
//   await
// }

const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");

const btn = document.querySelector(".btn");

btn.addEventListener("click", async () => {
  try {
    const first = await addColor(1000, heading1, "red");
    await addColor(1000, heading2, "green");
    await addColor(1000, heading3, "purple");
    console.log(first);
  } catch (error) {
    console.log("error");
  }
});

function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve("hello");
      }, time);
    } else {
      reject(new Error(`there is no such element ${element}`));
    }
  });
}
