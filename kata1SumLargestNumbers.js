// let sumLargestNumbers = function (data) {
//   let sortedArray = []; let sum = 0; let arrayLength = 0;
//   len = data.length;
//   //   sort method + function call to sort numbers from low to high
//   sortedArray = data.sort(function (a, b) { return a - b });
//   sum = sortedArray[len - 1] + sortedArray[len - 2];
//   return sum;
// };


// // without the sort function
// let sumLargestNumbers = function (data) {
//   let sortedArray = []; len = data.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len; j++) {
//       if (data[i] < data[j]) {
//         sortedArray = data[i];
//         data[i] = data[j];
//         data[j] = sortedArray;
//       }

//     }
//   } return data[len - 1] + data[len - 2];
// };

const sumLargestNumbers = function(arr) {
  arr.sort((a, b) => a - b);
  const len = arr.length;
  return arr[len - 1] + arr[len - 2];
};


console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
