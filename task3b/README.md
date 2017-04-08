# Task 3b: rewrite the CommonJS to ES modules

CommonJS only works in 1 environment, using ES modules gives us the flexibility of running in any environment.
Sadly we need to transpile them right now, since they are not yet natively supported yet. We use `babel` for this.

By running `babel-node` instead of `node` we'll run node in a way so all files are parsed by babel.
In reality there's more going on and more stuff that needs to happen, but for this assignment, this is what you need to know.
We can teach more about babel, configuration and tooling per request.

You have to install babel-node by running:
```
npm install --global babel-node
```

## Task


## tips:

### Exports syntax:

A named export:
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

### Import syntax
Get a module:
```
const mathUtils = require('./math-utils');
```
