const items = [...document.querySelectorAll(".number")];
// console.log(items);
const updateCount = (el) => {
  const value = parseInt(el.dataset.value);
  const increment = Math.ceil(value / 100);
  // const increment = 1;
  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increaseCount;
    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }

    el.textContent = `${initialValue}+`;
  }, 100);
  console.log(increaseCount);
};
// The parseInt method parses a value as a string and returns the first integer.
// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.

items.forEach((item) => {
  updateCount(item);
});
