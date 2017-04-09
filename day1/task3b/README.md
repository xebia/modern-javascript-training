# Task 3b: Rewrite the CommonJS to ES modules

CommonJS only works in 1 environment, using ES modules gives us the flexibility of running in any environment.
Sadly we need to transpile them right now, since they are not yet natively supported yet. We use `babel` for this.

By running `babel-node` instead of `node` we'll run Node.js in a way so all files are parsed by Babel.
In reality there's more going on and more stuff that needs to happen, but for this assignment, this is what you need to know.
We can teach more about Babel, configuration and tooling per request.

You have to install babel-node by running:
```
npm install --global babel-node
```

## Task

0. Make sure you are in the right directory (`cd day1/task3b`).
1. Rewrite the CommonJS syntax to ES modules syntax. The functionality should stay unchanged.
2. Run the code by: `babel-node main.js`.

## Tips

### Exports syntax:

A default export:
```
export default 'something';
```

Multiple exports:
```
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;
```

### Import syntax

Import default:
```
import thing from './url/file'
```

Import everything in module:
```
import * as thing from './url/file'
```

Import some things in module:
```
import { add, multiply } from './url/file'
```
