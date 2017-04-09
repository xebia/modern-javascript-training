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
