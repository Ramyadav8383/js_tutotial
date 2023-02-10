import get from "./util/getElement.js";
import getUser from "./util/fetchUser.js";

// selection
const img = get(".user-img");
const title = get(".user-title");
const value = get(".user-value");
const btn = get(".btn");
// spread operator generally used to transform a node list to arraysimplyy use ...  with big bracket
const btns = [...document.querySelectorAll(".icon")];

const displayUser = (person) => {
  img.src = person.image;
  value.textContent = person.name;
  title.textContent = `My name is`;
  btns[0].classList.add("active");
  btns.forEach((btn) => {
    const label = btn.dataset.label;
    btn.addEventListener("click", () => {
      title.textContent = `My ${label} is`;
      value.textContent = person[label];
      btns.forEach((btn) => btn.classList.remove("active"));
      btn.classList.add("active");
    });
  });
};

// show user // functionality
const showUser = async () => {
  // get user from api

  const person = await getUser();
  displayUser(person);
  // getUser().then((data) => console.log(data));
  // display user
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
