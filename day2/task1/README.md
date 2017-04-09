# Task 1: Refactor to Promises

We're going to rewrite a piece of asynchronous code from using callbacks to a promise chain.
Provided is a piece of code that:
- Reads a file from disk
- Parses the file contents as JSON
- Performs a HTTP GET request for each URL provided in the JSON
- Logs the first line of content from each response to the console

## Task

0. Make sure you are in the right directory (cd day2/task1).
1. Run the script using `node main.js`. This should return the list of tasks from day 1.
2. Make a copy of the JavaScript file so you can keep them side-by-side.
3. Rewrite or refactor the script to do the same thing, but using Promises.
4. Use the Promise constructor to wrap callback-based operations into a Promise.

Your final script should look something like:
```js
readFile(path)
  .then(parseJSON)
  .then(getURLs)
  .then(waitForAllResponses)
  .then(logFirstLineOfEachResponse)
```

### Bonus task:

By default the results will come back in random order. See if you can return (log) them in alphabetical order.
