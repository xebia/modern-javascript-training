<<<<<<< HEAD
const fs = require('fs');
const https = require('https');
const path = require('path');

const readFile = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, (err, data) => {
    if (err) reject(new Error(err));
    else resolve(data);
  });
});

const parseJSON = (data) => new Promise((resolve, reject) => {
  try {
    resolve(JSON.parse(data.toString()));
  } catch (ex) {
    reject(ex);
  }
});

const getURL = (url) => new Promise((resolve, reject) => {
  https.get(url, res => {
    if (res.statusCode !== 200) {
      reject(new Error(`Received invalid status code: ${res.statusCode}`));
    } else {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }
  });
});

readFile(path.join(__dirname, '../urls.json'))
  .then(data => parseJSON(data), err => console.error(`Error reading file: ${err}`))
  .then(json => json.urls)
  .then(urls => urls.map(getURL))
  .then(promises => Promise.all(promises))
  .then(contents => contents.map(content => content.split('\n')[0]))
  .then(lines => lines.sort().forEach(line => console.log(line)))
  .catch(e => console.error(`Something went wrong: ${e}`))
=======
const testFailure = false;

const getData = (options, callback) => new Promise((resolve, reject) => {
  if (testFailure) {
    setTimeout(() => reject(new Error('getData failed')), 1000);
  }
  setTimeout(() => resolve(options), 1000);
});


getData({ a: 42 })
  .then(firstData => getData({ b: 14 }).then(secondData => ({ ...firstData, ...secondData }))
  .then(data => console.log(data);)
  .catch(error => console.error(error));


// OR

Promise.all([getData({ a: 42 }), getData({ b: 14 })])
  .then([firstData, secondData] => ({ ...firstData, ...secondData }))
  .then(data => console.log(data);)
  .catch(error => console.error(error));
>>>>>>> fe52d8e7f4484ed236d94de5ae7c68a645f31411