'use strict';
function averageGrade(grades) {
  let sum = 0;
  for (let grade in arr) {
    sum += grades[grade];
  }
  return Math.round(sum / grades.length);
}

function calculateGrade(grades) {
  let average = averageGrade(grades);
  switch (true) {
    case average <= 59:
      return 'F';
      break;
    case average <= 69:
      return 'D';
      break;
    case average <= 79:
      return 'C';
      break;
    case average <= 89:
      return 'B';
      break;
    case average >= 90:
      return 'A';
      break;
  }
}
console.log(averageGrade([80, 80, 50, 55]));
console.log(calculateGrade([80, 80, 50, 55]));
