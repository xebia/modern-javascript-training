const fs = require('fs')
const https = require('https');
const path = require('path')

// Read urls.json.
fs.readFile(path.join(__dirname, 'urls.json'), (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    return;
  }

  // Safely parse the JSON data.
  let json;
  try {
    json = JSON.parse(data.toString())
  } catch (e) {
    console.error(`Failed to parse JSON: ${e.message}`)
  }

  // Load each URL and log the first line in each response.
  json.urls.forEach(url => {
    https.get(url, res => {
      if (res.statusCode !== 200) {
        console.error(`Received invalid status code: ${res.statusCode}`);
        return;
      }

      let rawData = '';
      res.on('data', (chunk) => rawData += chunk);
      res.on('end', () => {
        console.log(rawData.split('\n')[0]);
      });
    });
  });
});
