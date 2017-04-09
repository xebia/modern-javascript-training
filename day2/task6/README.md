# Task 6: Refactoring to modules

It's time to apply everything you've learned so far. We're going refactor an app. Right now this app is in a single file.

## Task

Take the code in `main.js` and split it up into ES modules. Try to find some chunks of code that can be extracted into
separate files. You'll have to eliminate some global variables to make everything work.

Once you've created modules and you have some time left, see if you can refactor some code to avoid mutation.

We've already taken care of the Babel and webpack setup for you, just start the application:

- `npm start`
- Open http://localhost:8080/static/
