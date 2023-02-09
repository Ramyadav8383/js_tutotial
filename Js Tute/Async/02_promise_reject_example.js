// / -------promises------reject example

const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");

const btn = document.querySelector(".btn");
const container = document.querySelector(".image-container");
const url = "https://source.unsplash.com/random";

btn.addEventListener("click", () => {
  // console.log(loadImage(url));
  loadImage(url)
    .then((taco) => container.appendChild(taco))
    .catch((err) => console.log(err));
});

function loadImage(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.addEventListener("load", () => {
      resolve(img);
    });
    img.addEventListener("error", () => {
      reject(new Error(`failed to load image from the source`));
    });
    img.src = url;
  });
}
