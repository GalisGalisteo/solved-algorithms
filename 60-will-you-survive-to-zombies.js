/** 
 * Un algoritmo al más puro estilo Plantas contra Zombies
 * 
 * Enunciado: https://www.codewars.com/kata/5deeb1cc0d5bc9000f70aa74 Kyu 7

    
*/

function zombieShootout(zombies, range, ammo) {
  return "";
}

// El console.log de la izquierda debe dar lo mismo que el console.log de la derecha, para cada llamada a la función

console.log(zombieShootout(3, 10, 10), "You shot all 3 zombies.");
console.log(
  zombieShootout(100, 8, 200),
  "You shot 16 zombies before being eaten: overwhelmed."
);
console.log(
  zombieShootout(50, 10, 8),
  "You shot 8 zombies before being eaten: ran out of ammo."
);
