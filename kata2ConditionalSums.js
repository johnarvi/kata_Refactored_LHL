// const conditionalSum = function(values, condition) {
//   let sum = 0;
//   if (condition === 'even') {
//     for (let i = 0; i < values.length; i++) {
//       if (values[i] % 2 === 0) {
//         sum += values[i]
//       }
//     } return sum;
//   } else {
//     for (let i = 0; i < values.length; i++) {
//       if (values[i] % 2 !== 0) {
//         sum += values[i]
//       }
//     } return sum;
//   }
// };

// const conditionalSum = function(values, condition) {
//   sum = 0;
//   if (condition === 'even') {
//     for (let i = 0; i < values.length; i++) {
//       if (values[i] % 2 === 0) {
//         sum += values[i]
//       }         
//     } return sum;
//   } else if (condition === 'odd') {
//     for (let i = 0; i < values.length; i++) {
//       if (values[i] % 2 !== 0) {
//         sum += values[i]
//       }         
//     } return sum;
//   } else {
//     return sum;
//   }
// };

const isEven = (num) => num % 2 === 0;

const conditionalSum = function(values, condition) {
  let sum = 0; let array = [];
  (condition === 'even') ? array = values.filter(value => isEven(value)) : array = values.filter(value => !isEven(value));
  for (let number of array) {
    sum += number;
  }
  return sum;
};

// console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
// console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
// console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
// console.log(conditionalSum([], "odd"));
