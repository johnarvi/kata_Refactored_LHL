// let numberOfVowels = function(data) {
//   let vowels = 0;
//   for (i = 0; i < data.length; i++) {
//     if (data[i] === 'a' || data[i] === 'e' || data[i] === 'i' || data[i] === 'o' || data[i] === 'u') {
//       vowels++;
//     }
//   } return vowels;
// };


// // same fucntion as above but also counts capital vowels
// let numberOfVowels = function (data) {
//   let vowels = 0;
//   for (i = 0; i < data.length; i++) {
//     if (data[i] === 'a' || data[i] === 'e' || data[i] === 'i' || data[i] === 'o' || data[i] === 'u') {
//       vowels++;
//     } else if (data[i] === 'A' || data[i] === 'E' || data[i] === 'I' || data[i] === 'O' || data[i] === 'U') {
//       vowels++;
//     }
//   } return vowels;
// };

let numberOfVowels = function(string) {
  let count = 0; const vowels = ['a','e','i','o','u','A','E','I','O','U'];
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      count++;
    }
  } return count;
};



console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
