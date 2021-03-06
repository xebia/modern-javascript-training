const flow = (...fns) => x => fns.reduce((v, fn) => fn(v), x);

const toLowerCase = str => str.toLowerCase();
const makeSplitter = separator => str => str.split(separator);
const makeJoiner = separator => arr => arr.join(separator);

const slugify = flow(
  toLowerCase,
  makeSplitter(' '),
  makeJoiner('-'),
  encodeURIComponent
);

console.log(slugify("The Quick Brown Fox"));  // => "the-quick-brown-fox"
