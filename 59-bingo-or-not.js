/**
 * 
 * URL: Kata https://www.codewars.com/kata/5a1ee4dfffe75f0fcb000145 Kyu 7
 * 
 * For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.
 */

function numberToLetters(num) {
  if (num < 1 || num > 26) {
    return "Invalid input";
  }

  let letter = String.fromCharCode(64 + num);
  return letter;
}


// OPCIÓN 1

// function bingo(numbers) {
//   let result = [];
//   for (let num of numbers) {
//     result.push(numberToLetters(num));
//   }
//   const joinedResult = result.join('');
//   if (
//     joinedResult.includes('B') &&
//     joinedResult.includes('I') &&
//     joinedResult.includes('N') &&
//     joinedResult.includes('G') &&
//     joinedResult.includes('O')
//   ) {
//     return 'WIN';
//   }
//   return 'LOSE';
// }


// OPCIÓN 2

function bingo(numbers) {
  let result = [];
  for (let num of numbers) {
    result.push(numberToLetters(num));
  }
  if ('BINGO'.split('').every(letter => result.includes(letter))) {
    return 'WIN';
  }
  return 'LOSE';
}


console.log(bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // "LOSE"
console.log(bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10])); // "WIN"
console.log(bingo([21, 13, 1, 7, 5, 14, 7, 15, 9, 10])); // "LOSE"
