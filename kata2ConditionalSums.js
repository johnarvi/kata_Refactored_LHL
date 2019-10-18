const isEven = (num) => num % 2 === 0;

const conditionalSum = function(values, condition) {
  let sum = 0; let array = [];
  (condition === 'even') ? array = values.filter(value => isEven(value)) : array = values.filter(value => !isEven(value));
  for (let number of array) {
    sum += number;
  }
  return sum;
};
