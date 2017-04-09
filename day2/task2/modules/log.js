export default (message, ...tail) => {
  const line = message.toString().split('').map(i => '◦').join('');

  console.log(`\x1b[34m\x1b[2m${line}\x1b[0m`);
  console.log(`\x1b[36m\x1b[1m${message}\x1b[0m`);

  if (tail.length) {
    console.log(`\x1b[34m\x1b[2m${line.replace(/./g, '-')}\x1b[0m`);
    tail.forEach(item => console.log(item));
  }

  console.log('\n');
};
