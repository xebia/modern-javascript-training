module.exports = {
  add: (a, b) => a + b,
  multiply: (a, b) => a * b,
  substract: (a, b) => a - b,
  devide: (a, b) => a / b,
  random: (min = 0, max = 10) => Math.floor(Math.random() * (max - min)) + min
};
