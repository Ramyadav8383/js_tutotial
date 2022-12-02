// #number 3 challange
const score1 = 30;
const score2 = 50;
const score3 = 70;
const totalScore = score1 + score2 + score3;
const averageScore = totalScore / 3;

const plates = 20;
const peoples = 7;

let remainingPlates = plates % peoples;
remainingPlates++;
const message = "There are" + " " + remainingPlates + " " + "plates available";

console.log(message);
console.log(totalScore);
console.log(averageScore);
