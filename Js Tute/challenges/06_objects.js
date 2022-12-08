// objects #6

const car = {
  make: "Honda",
  model: "Amaze",
  year: 2022,
  colors: ["blue", "black", "grey", "white"],
  hybrid: true,
  drive: function () {
    //old approach
    console.log("driving.......");
  },
  stop() {
    //new approach
    console.log("stop!!!!");
  },
};
console.log(car.make);
console.log(car.colors[2]);
car.drive();
car.stop();
