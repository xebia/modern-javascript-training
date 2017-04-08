const mathUtils = require('./math');
const dateUtils = require('./date');
const log = require('./log');

let value1 = 1;
let value2 = 2;

const timer = setInterval(() => {
  const operations = [mathUtils.add, mathUtils.substract, mathUtils.multiply, mathUtils.devide];
  const randomOperation = operations[mathUtils.random(0, 4)];
  const value3 = randomOperation(value1, value2);
  value1 = value2;
  value2 = value3;

  log('new values:', { value1, value2 });

  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    clearInterval(timer);
    log.error('Cannot continue with NaN');
  }
}, 50);
