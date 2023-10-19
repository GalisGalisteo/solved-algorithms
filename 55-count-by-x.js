/**
 * https://www.codewars.com/kata/5513795bd3fafb56c200049e/
 *
 * Implementa una función con estas carácteristicas
 *
 * parámetro x: incremento
 * parámetro n: Cantidad de números a colocar en el array
 *
 *  returno: Un array de números
 *
 */

function countBy(x, n) {
  let z = [];
  for (let i = x; i <= n * x; i += x) {
    z.push(i);
  }
  return z;
}

console.log(countBy(1, 10)); //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

console.log(countBy(2, 5)); // [2, 4, 6, 8, 10]

console.log(countBy(3, 6));

console.log(countBy(10, 20));