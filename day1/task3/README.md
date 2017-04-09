# Task 3: Split codebase into CommonJS modules

We're going to use CommonJS modules to split our code into smaller units.

## Task

0. Make sure you are in the right directory (`cd day1/task3`).
1. Split the codebase into seperate files (modules). Use the CommonJS syntax.
2. Run the code by: `node main.js`. 

## Tips

### Exports syntax:

A single export:
```
module.exports = 'something';
```

Multiple exports:
```
module.exports = {
  add: (a, b) => a + b,
  multiply: (a, b) => a * b
};
```

### Import syntax:

Get a module:
```
const mathUtils = require('./math-utils');
```
