/**
 * El Hosptial Clinic nos ha pedido un algoritmo para detectar cadenas defectuosas de ADN en los análisis. 
 * Se dice que una cadena de ADN es defectuosa si las proteinas que la forman, representadas por números enteros, no son consecutivas entre si.

Por no consecutivo nos referimos a no exactamente 1 elemento más grande que el elemento anterior del array.

P.ej. Si tenemos un array [1,2,3,4,6,7,8] entonces 1, luego 2, luego 3, luego 4 son todos consecutivos pero 6 no, entonces ese es el primer número no consecutivo.

Si toda el array es consecutivo, devuelve el valor null. Significará que esta cadena de ADN no contiene errores.

El array puede ser de números positivos o negativos, pero al menos, tendrá dos elementos. 
 * 
 * @param {array} arr Array de números 
 * @returns Devuelve un número o null
 */
function firstNonConsecutive(arr) {
  let result = null;

  let i = 1;

  while (i < arr.length - 1 && result === null) {
    if (arr[i] - arr[i - 1] !== arr[i + 1] - arr[i]) {
      result = arr[i + 1];
    }
    i++;
  }
  return result;

  // for (let i = 1; i < arr.length - 1; i++) {
  //   if (arr[i] - arr[i - 1] !== arr[i + 1] - arr[i]) {
  //     result = arr[i + 1];
  //     break;
  //   }
  // }
  // return result;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); // 6
console.log(firstNonConsecutive([1, 2, 3, 4])); // null (porque todos son consecutivos)
console.log(firstNonConsecutive([-10, -5, -1])); // -1
console.log(firstNonConsecutive([10, 20, 30, 40, 50, 80, 10000])); // 80
console.log(firstNonConsecutive([11, 22, 33, 42, 50, 80, 10000])); // 42
