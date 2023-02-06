const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelectorAll(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

// console.log(items);
// dynamic value in giveaway
let futureDate = new Date(2023, 2, 24, 17, 30, 0);
// console.log(futureDate);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

let month = futureDate.getMonth();
// console.log(months[month]);
month = months[month];
giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}pm`;

//forEach() calls a function for each element in an array

// give dynamic value for countdown timmer

const futureTime = futureDate.getTime();
// console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  console.log(t);
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // id = 24hr
}
getRemainingTime();
