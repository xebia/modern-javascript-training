const testFailure = false;

const getData = (options, callback) => {
  const error = testFailure ? new Error('getData failed') : undefined;
  setTimeout(() => callback(error, options), 100);
};

getData({ a: 42 }, (error, firstData) => {
  if (error) {
    console.error(error);
  } else {
    getData({ b: 12 }, (error, secondData) => {
      if (error) {
        console.error(error);
      } else {
        console.log({
          ...firstData,
          ...secondData
        });
      }
    });
  }
});
