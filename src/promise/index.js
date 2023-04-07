// * PROMISES

// ? Once the promise is create, the callback function is executed immediately
const promise = new Promise((resolve, reject) => {
  // * This will complete at some point
  console.log("SUS");
  setTimeout(() => resolve("Hey!"), 2000);
});

promise.then((response) => console.log(response));

const cows = 10;

const countCows = new Promise((resolve, reject) => {
  if (cows > 10) {
    // * Resolve is called if the async petition is completed
    resolve(`We have ${cows} cows!`);
  } else {
    // * Reject occurs if the async petition fails
    reject(`There are no enough cows :(`);
  }
});

countCows
  .then((result) => {
    //* If the promise succeded
    console.log(result);
  })
  .catch((error) => {
    // * If the promise failed
    console.error(error);
  })
  .finally(() => {
    // * After the promise
    console.log("Finally");
  });
