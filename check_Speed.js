function checkSpeed(speed) {
  let points = 0;
  if (speed <= 74) {
    return 'OK';
  } else {
    points = Math.floor((speed - 70) / 5);
    return points >= 12 ? 'License suspended' : points;
  }
}

let currentSpeed1 = 73;
let points1 = checkSpeed(currentSpeed1);
console.log(points1);

let currentSpeed2 = 300;
let points2 = checkSpeed(currentSpeed2);
console.log(points2);
