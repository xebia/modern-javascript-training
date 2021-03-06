# Task 1: Running a script in Node.js

We're going to install a few global dependencies to get going:

- Node.js (7.7.4)
- npm (4.4.1)

If you already have these things installed (at a last major version) you can skip this step.

## Install instructions

### Node.js

If you're on linux, you can use your favorite package manager.
If you're on macOS, you can use brew.

If this fails for whatever reason or you're on windows, you can download from here:
https://nodejs.org/en/download/current/

You can validate your install by opening a terminal and run this command:
`node --version` - this should return `7.7.4` or similar.

### npm

Node.js will also install npm for you, but it's likely an oldish version.
To update npm, we can use npm. Run this command:
`npm install npm --global`

If this command requires root access and you find this annoying, you can fix this with:
https://docs.npmjs.com/getting-started/fixing-npm-permissions,
but time is short and this is the only time we'll be installing globally.
So I suggest you do that later.

You can validate your npm installation by running this in a terminal:
`npm --version`

---

## Task

0. Make sure you are in the right directory (`cd day1/task1`).
1. Open `main.js` in your editor, and have a look.
2. Open a terminal and change directory to the `task1` folder.
3. Run `main.js` in NodeJS by running `node main.js` in the terminal.

You'll know you've succesfully run the script if this is printed:
```
You have completed Task #1
```
