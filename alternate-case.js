/***
 * Alternate Case
 * Alternate each case of each of string given 
 */

function alternateCase(strArg) {
  // parse the argument, string to array
  const strToArr = [...strArg];

  // do a loop strToArr with .map method and chain it with .join() method
  const alternate = strToArr.map((char) => {
    // if the char is lowercase and then change it to uppercase 
    if (char === char.toLowerCase()) return char.toUpperCase();
    // if the char is uppercase and then change it to lowercase 
    if (char === char.toUpperCase()) return char.toLowerCase();
  // using join() method to make it as string
  }).join('');
  
  // return the alternate variable
  return alternate;
}

// log
console.log(alternateCase("abc"));            // "ABC"
console.log(alternateCase("ABC"));            // "abc"
console.log(alternateCase("Hello World"));    // "hELLO wORLD"
