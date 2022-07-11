function countTruthy(values) {
  let count = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i]) count++;
  }
  return count;
}

let values = ['Jonh', 45, null, 'a', false, 0, true, {}];
let count = countTruthy(values);
console.log(count);
