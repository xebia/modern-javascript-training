const flow = (...fns) => x => fns.reduce((v, fn) => fn(v), x);

const toLowerCase = str => str.toLowerCase();
const makeSplitter = separator => str => str.split(separator);
const makeJoiner = separator => str => str.join(separator);

const slugify = // TODO Implement the slugify function

console.log(slugify("The Quick Brown Fox"));  // => "the-quick-brown-fox"
