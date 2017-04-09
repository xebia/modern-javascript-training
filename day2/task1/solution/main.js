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
  } catch (e) {
    reject(e);
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
