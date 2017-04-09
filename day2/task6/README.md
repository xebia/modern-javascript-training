# Task 2: Bundling with webpack

We're going to bundle small javascript app, using webpack.

## Task

0. Init npm
1. Install `webpack`, `babel-core`, `babel-loader` as a dev dependencies
2. Create a npm script that will run `webpack`
3. Run the npm script

It should print this:
```
Hash: 36c85e083a8da1bd6a06
Version: webpack 2.3.3
Time: 801ms
   Asset     Size  Chunks             Chunk Names
index.js  6.24 kB       0  [emitted]  main
   [0] ./modules/lib-a.js 619 bytes {0} [built]
   [1] ./modules/lib-b.js 223 bytes {0} [built]
   [2] ./modules/lib-c.js 605 bytes {0} [built]
   [3] ./modules/log.js 672 bytes {0} [built]
   [4] ./index.js 1.15 kB {0} [built]
```

4. Check out the file inside the `dist` folder, webpack generated. This is the bundle.
5. You can run webpack in watch-mode: `npm run build -- --watch`.

## Tips

- run `npm init`
- run `npm install webpack babel-core babel-loader --save-dev`
- replace the test script with 'build'

---

- to run in node:
  - set target: 'node'
  - `node ./dist/index.js`

- to run in the browser:
  - set target: 'web'
  - enable html-webpack-plugin
  - `webpack-dev-server`
  - `http://localhost:8080/static/`
