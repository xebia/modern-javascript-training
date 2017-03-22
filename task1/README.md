# Task 1: Running a script in NodeJS

We're going to install a few global dependencies to get going:

- NodeJS (7.7.4)
- NPM (4.4.1)

If you already have these things installed (at a last major version) you can skip this step.

## install instructions:

### NodeJS
If you're on linux, you can use your favorite package manager.
If you're on macOS, you can use brew.

If this fails for whatever reason or you're on windows, you can download from here:
https://nodejs.org/en/download/current/

You can validate your install by opening a terminal and run this command:
`node --version` - this should return `7.7.4` or similar.

### NPM
NodeJS will also install npm for you, but it's likely an oldish version.
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

1. Open `main.js` in your editor, and have a look.
2. Open a terminal and change directory to the `task1` folder.
3. Run `main.js` in NodeJS by running `node main.js` in the terminal.

You'll know you've succesfully run the script if this is printed:
```
You have completed Task #1
```
