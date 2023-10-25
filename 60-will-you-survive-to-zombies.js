/** 
 * Un algoritmo al más puro estilo Plantas contra Zombies
 * 
 * Enunciado: https://www.codewars.com/kata/5deeb1cc0d5bc9000f70aa74 Kyu 7

    
*/

// The zombies start at range metres, and move at 0.5 metres per second. Each second, you first shoot one zombie, and then the remaining zombies shamble forwards another 0.5 metres.
/** 
 * zombies 0.5m/s
 * 1s -> -1 zombie killed and rest of zombies forward 0.5m
 * if zombies === 0 -> "You shot all X zombies."
 * if zombies > 0 && ammo > 0 -> "You shot X zombies before being eaten: overwhelmed."
 * if zombies > 0 && ammo === 0 -> "You shot X zombies before being eaten: ran out of ammo."
 * 
 * Tengo que hacer un for loop que interprete que pasa un segundo cada vez que se repite hasta que range = 0.
*/


function zombieShootout(zombies, range, ammo) {
  let shots = 0;

  while (range > 0 && zombies > 0 && ammo > 0) {
    shots++;
    zombies--;
    range -= 0.5;
    ammo--;

    if (zombies === 0) {
      return `You shot all ${shots} zombies.`;
    }

    if (ammo === 0) {
      return `You shot ${shots} zombies before being eaten: ran out of ammo.`;
    }

    if (range <= 0) {
      return `You shot ${shots} zombies before being eaten: overwhelmed.`;
    }
  }
  return "Unexpected situation occurred.";
}

// ASÍ NO FUNCIONA EL ÚLTIMO CASO:
// function zombieShootout(zombies, range, ammo) {
//   for (let i = 1; range >= 0; i++) {
//     ammo -= 1;
//     zombies -= 1;
//     range -= 0.5;
//     if (zombies === 0) {
//       return `You shot all ${i} zombies.`;
//     } else if (zombies > 0 && ammo > 0 && range === 0) {
//       return `You shot ${i} zombies before being eaten: overwhelmed.`
//     } else if (zombies > 0 && ammo === 0 && range === 0) {
//       return `You shot ${i} zombies before being eaten: ran out of ammo.`
//     }
//   }
// }


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
