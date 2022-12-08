const calculateTotal = function random(subTotal, tax) {
  return subTotal + tax;
};

// console.log(calculateTotal(100, 20));

const order1 = calculateTotal(100, 10);
const order2 = calculateTotal(150, 20);
const order3 = calculateTotal(200, 15);

console.log(order1, order2, order3);
