const sumLargestNumbers = function(arr) {
  arr.sort((a, b) => a - b);
  const len = arr.length;
  return arr[len - 1] + arr[len - 2];
};


console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
