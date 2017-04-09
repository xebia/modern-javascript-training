import { add, substract, multiply, devide, random } from './math';
import log from './log';

let value1 = 1;
let value2 = 2;

const timer = setInterval(() => {
  const operations = [add, substract, multiply, devide];
  const randomOperation = operations[random(0, 4)];
  const value3 = randomOperation(value1, value2);
  value1 = value2;
  value2 = value3;

  log('new values:', { value1, value2 });

  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    clearInterval(timer);
    log.error('Cannot continue with NaN');
  }
}, 50);
