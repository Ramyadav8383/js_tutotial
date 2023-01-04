// Array Methods #9

// create students array
// console.log(students);
// const updatedStudents = students.map(function () {
//   // console.log(updatedStudents);
// });

// sayName("ram");

// have acces to student from dat.js
// map
const updatedStudents = students.map(function (student) {
  // console.log(student);
  student.role = "student";
  return student;
});

// console.log(updatedStudents);
// filter
const highScore = students.filter(function (student) {
  // first way
  // if (student.score >= 85) {
  //   return student; // a value thaty coerces to true
  // }
  // second way
  // if (student.score >= 80) return student;
  return student.score >= 80;
});
// console.log(highScore);
// find
const specificId = students.find(function (student) {
  return student.id === 1;
  // return (id = 1);
});
// console.log(specificId);

// reduce
const averageScore =
  students.reduce(function (scoresTotal, student) {
    // console.log(student);
    // console.log(scoresTotal);
    return scoresTotal + student.score;
  }, 0) / students.length;

// console.log(averageScore);

// square bracket notation
const subject = "math";
const total = {};
// total.math = "some value";
total[subject] = " some value";
// console.log(total);

// survey challange
const survey = students.reduce(function (survey, student) {
  // console.log(student.favoriteSubject);
  const favSubject = student.favoriteSubject;
  if (survey[favSubject]) {
    survey[favSubject] = survey[favSubject] + 1;
  } else {
    survey[favSubject] = 1;
  }
  return survey;
}, {});
console.log(survey);
