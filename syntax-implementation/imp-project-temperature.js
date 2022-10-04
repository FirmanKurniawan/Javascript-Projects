/* Kelvin Weather Project - Dea Ananda Gunawan
A project that convert Kelvin to Celcius and Fahrenheit */

// Creating a variable kelvin that stay constant in value 293.
const kelvin = 0;

// Celcius is similar to Kelvin, but Celcius is 273 degrees less than Kelvin
let celcius = kelvin - 273;

// Fahrenheit = Celcius * (9/5) + 32
let fahrenheit = celcius * (9 / 5) + 32;
fahrenheit = Math.floor(fahrenheit);

// Printing temperature to the console
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

// XTRA practice! - converting Celcius to Newton : Newton = Celcius * (33/100)
let newton = celcius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton`);
