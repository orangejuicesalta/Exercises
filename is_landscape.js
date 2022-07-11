function isLandscape(weight, height) {
  return weight > height ? true : false;
}

let width = 1920;
let height = 1080;
let result = isLandscape(width, height);
console.log(result);
