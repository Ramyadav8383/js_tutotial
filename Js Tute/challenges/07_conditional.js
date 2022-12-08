// conditonal statement #7

const person1 = {
  name: "Ram",
  age: 20,
  status: "resident",
};
const person2 = {
  name: "harry",
  age: 17,
  status: "tourist",
};

// for person one
// if (person1.age >= 18 && person1.status === "resident") {
//   console.log("you can cast a vote");
// } else {
//   console.log("you are not eligible");
// }
// for person two
if (person2.age >= 18 && person2.status === "resident") {
  console.log("you can cast a vote");
} else {
  console.log("you are not eligible");
}
