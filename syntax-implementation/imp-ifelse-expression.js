// Function to check if a number is positive or negative
function posOrNeg(a) {
  let result;
  if (a > 0) {
    result = `${a} is a positive number`;
  } else {
    result = `${a} is a negative number`;
  }
  return result;
}
console.log(posOrNeg(-3));
console.log(posOrNeg(-1));

// Function to check if a number is odd or even
function evenOrOdd(a) {
  let result;
  if (a % 2 == 0) {
    result = `<p>${a} is an Even number</p>`;
  } else {
    result = `<p>${a} is an Odd number</p>`;
  }
  return result;
}
console.log(evenOrOdd(100));

// Function to check if a is less than b: will return a boolean
function isLess(a, b) {
  return a < b;
}
console.log(isLess(4, 10)); //true
