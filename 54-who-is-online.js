/**
 * Página del algoritmo: https://www.codewars.com/kata/5b6375f707a2664ada00002a
 *
 * Queremos saber si los usuarios de una aplicación están online, offline y ausente
 *
 * Parámetro de entrada: un array de objetos, que representa cada uno de los usuarios
 * Return: Un objeto, indicando quien está online, offline o ausente
 *
 * Una persona está ausente si no ha tenido actividad hace más de 10 minutos, a pesar de estar online.
 *
 */

function whosOnline(friends) {
  const output = {
    online: [],
    offline: [],
    away: []
  }
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].status === "online" && friends[i].lastActivity <= 10) {
      output.online.push(friends[i].username);
    } else if (friends[i].status === "online" && friends[i].lastActivity > 10) {
      output.away.push(friends[i].username);
    } else if (friends[i].status === "offline") {
      output.offline.push(friends[i].username);
    }
  }
  return output;
}

const whosOnline2 = (friends) => {
  const output = {
    online: [],
    offline: [],
    away: []
  }
  for (let friend of friends) {
    const { status, lastActivity, username } = friend;
    if (status === "online" && lastActivity <= 10) {
      output.online.push(friend.username);
    } else if (status === "online" && lastActivity > 10) {
      output.away.push(username);
    } else if (status === "offline") {
      output.offline.push(username);
    }
  }
  return output;
}

const whosOnline3 = (friends) => {
  const output = {
    online: [],
    offline: [],
    away: []
  }

  friends.forEach(friend => {
    const { status, lastActivity, username } = friend;
    if (status === "online" && lastActivity <= 10) {
      output.online.push(friend.username);
    } else if (status === "online" && lastActivity > 10) {
      output.away.push(username);
    } else if (status === "offline") {
      output.offline.push(username);
    }
  })
  return output;
}

let friends = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

console.log(whosOnline(friends));
console.log(whosOnline2(friends));
console.log(whosOnline3(friends));

// debería dar:
/**
 * {
      online: ['David'],
      offline: ['Lucy'],
      away: ['Bob']
    }
 */

let friends_2 = [
  {
    username: "David",
    status: "offline",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "offline",
    lastActivity: 104,
  },
];

console.log(whosOnline(friends_2));
console.log(whosOnline2(friends_2));
console.log(whosOnline3(friends_2));

/**
 * {
 * online: [],
 * offline: ["David", "Lucy", "Bob"],
 * away: []
 *
 * }
 */
