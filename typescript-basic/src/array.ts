/**
 * Array datatype
 */

let myArr: string[] = [ "Agus", "Asep", "Iqbal" ]; // array with string value
// myArr = [1, 2, 3]; // error, because the array is not string value

let arrayNumbers: number[] = [1, 2, 3]; // array with number value

let arrayAny: any[] = [1, "Asep", true]; // array with any value

console.log(myArr);
console.log(arrayNumbers);
console.log(arrayAny);

/**
 * Tuple datatype
 */

let biodata: [string, number, boolean]; 
biodata = ["Agus", 23, false];
console.log(biodata);