// AJAX - asynchronous javascript and xml/json
// Functions running in parallel with other functions are called asynchronous js (w3 school)
// HTTP requests - communication between client and server (w3 school)
// API - application programming interface (free code camp)

// const btn = document.querySelector(".btn");

// const url = "./people.json";
// btn.addEventListener("click", () => {
//   getData(url);
// });

// ajax request
// function getData(url) {
//   const xhr = new XMLHttpRequest();
//   // open- Sets the request method, request URL, and synchronous flag.

//   xhr.open("GET", url);
//   xhr.onreadystatechange = function () {
//     console.log(xhr);
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       const text = document.createElement("p");
//       text.textContent = xhr.responseText;
//       document.body.appendChild(text);
//     } else {
//       console.log({
//         status: xhr.status,
//         text: xhr.statusText,
//       });
//     }
//   };
//   xhr.send();
// }

// console.log("hello");

// json - javascript object  notation

// const btn = document.querySelector(".btn");

// const url = "./people.json";
// btn.addEventListener("click", () => {
//   getData(url);
// });

// function getData(url) {
//   const xhr = new XMLHttpRequest();
//   // xhr object
//   // open- Sets the request method, request URL, and synchronous flag.

//   xhr.open("GET", url);
//   xhr.onreadystatechange = function () {
//     console.log(xhr);
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       // parse
//       // stringify
//       const data = JSON.parse(xhr.responseText);
//       const displayData = data
//         .map((item) => {
//           return `<p>${item.name}</p>`;
//         })
//         .join("");
//       const element = document.createElement("div");
//       element.innerHTML = displayData;
//       document.body.appendChild(element);
//     } else {
//       console.log({
//         status: xhr.status,
//         text: xhr.statusText,
//       });
//     }
//   };
//   xhr.send();
// }

// console.log("hello");

// 02--- fetch api
// fetch built in
// promised based
// XHR is not wrong you can complete alkl our upcoming examples and projects using xhr. fetch is just alternative approach that has simpler and dcleaner syntax, the end result is the same. Still get dynamically, behind the scenes.

// const url = "./people.json";

// const response = fetch(url);
// console.log(response);

// explicit (fetch is more popular than ajax its uses less line of code)
// fetch(url)
//   .then((response) => {
//     // response object
//     // useful property and methods
//     // console.log(response);
//     // convert response into json data
//     // return promise
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// implicit
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//--- fetch with function
// const url = "./people.json";

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//   fetch(url)
//     .then((resp) => resp.json())
//     .then((data) => {
//       // console.log(data);
//       displayItems(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// const displayItems = (items) => {
//   const displayData = items
//     .map((item) => {
//       const { name } = item;
//       return `<p>${name}</p>`;
//     })
//     .join("");
//   const element = document.createElement("div");
//   element.innerHTML = displayData;
//   document.body.appendChild(element);
// };

// fetch with async/ await
// async makes a function return a Promise

// await makes a function wait for a Promise
// const url = "./people.json";

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", async () => {
//   const response = await fetch(url);
//   const data = await response.json();
//   displayItems(data);
// });

// const displayItems = (items) => {
//   const displayData = items
//     .map((item) => {
//       const { name } = item;
//       return `<p>${name}</p>`;
//     })
//     .join("");
//   const element = document.createElement("div");
//   element.innerHTML = displayData;
//   document.body.appendChild(element);
// };

// try catch

const url = "./people.json";

const btn = document.querySelector(".btn");
btn.addEventListener("click", async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayItems(data);
  } catch (error) {
    console.log(error);
  }
});

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { name } = item;
      return `<p>${name}</p>`;
    })
    .join("");
  const element = document.createElement("div");
  element.innerHTML = displayData;
  document.body.appendChild(element);
};

// try {
//   console.log("hello");
//   console.log(random);
// } catch (error) {
//   console.log(error);
// }
// console.log("hey");
