const mathUtils = {
  add: (a, b) => a + b,
  multiply: (a, b) => a * b,
  substract: (a, b) => a - b,
  devide: (a, b) => a / b,
  random: (min = 0, max = 10) => Math.floor(Math.random() * (max - min)) + min
};

const dateUtils = {
  now: () => (new Date()),
  isToday: (data) => dateUtils.date(date) === dateUtils.date(dateUtils.now()),
  time: (date) => date.toLocaleTimeString(),
  date: (date) => date.toLocaleDateString()
};

const log = (message, data, level = 'log' ) => {
  console[level](dateUtils.now(), message, data);
};
log.debug = (message, options) => log(message, options, 'debug' );
log.warn = (message, options) => log(message, options,  'warn' );
log.error = (message, options) => log(message, options, 'error' );


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
