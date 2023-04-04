// * CALLBACKS
/*A callback function is a function passed into another function as an argument, 
which is then invoked inside the outer function to complete some kind of routine or action. */

function sum(firstVal, secondVal) {
  return firstVal + secondVal;
}

function calc(firstVal, secondVal, callback) {
  return callback(firstVal, secondVal);
}

console.log(calc(2, 2, sum)); //! () Are not required on the callback, otherwise, it would return the value and not the function

// * SETTIMEOUT
/* The setTimeout runs a function after the specified period expires.
Times are declared in milliseconds. */

// ? setTimeout accepts a callback function and the time in milisecs
setTimeout(() => {
  console.log("Hola Mundo"); //! Is shown after 2s
}, 2000);

function getName(name) {
  console.log(`Hola ${name}`);
}

setTimeout(getName, 1000, "Daniel");
