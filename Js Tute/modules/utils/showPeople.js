// const showPeople = (people) => {
//   const newPeople = people
//     .map((person) => {
//       const { name, job } = person;
//       return `<p>${name} <strong>${job}</strong></p>`;
//     })
//     .join("");
//   // container.innerHTML = newPeople;
//   return newPeople;
// };

// export default showPeople;

export default (people) => {
  const newPeople = people
    .map((person) => {
      const { name, job } = person;
      return `<p>${name} <strong>${job}</strong></p>`;
    })
    .join("");
  // container.innerHTML = newPeople;
  return newPeople;
};
