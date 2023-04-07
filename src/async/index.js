// * ASYNC
function fnAsync() {
  return new Promise((resolve, reject) => {
    console.log("First");
    true
      ? setTimeout(() => resolve("Async"), 2000)
      : reject(new Error("Error!"));
    console.log("second");
  });
}
// ? async sintax means that a function always return a promise
async function anotherFn() {
  // ? The process pauses until the promise is resolved
  const something = await fnAsync();
  console.log(something);
  console.log("Hello");
}

console.log("Before");
anotherFn();
console.log("After");
