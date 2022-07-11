function showProperties(obj) {
  let newobj = {};
  for (let prop in obj) {
    if (typeof obj[prop] == 'string') newobj[prop] = obj[prop];
  }
  return newobj;
}
let movie = {
  title: 'Whiplash',
  releaseYeat: 2013,
  rating: 8.3,
  director: 'Damien Chazelle',
};
let properties = showProperties(movie);
console.log(properties);
