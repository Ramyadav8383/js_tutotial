// ES6 modules : it is basically a file , one statemnet is placed in a separate file
// -provide structure
// split code into smaller files
// share code across app
// same as react
// use server extension locally
// modules
import { random, people } from "./utils/data.js";
import showPeople from "./utils/showPeople.js";
import get from "./utils/getElement.js";

const container = get(".container");
const btn = get(".btn");
// const btn1 = getElement(".btn1");

btn.addEventListener("click", () => {
  container.innerHTML = showPeople(people);
});
