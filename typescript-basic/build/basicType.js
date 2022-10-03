"use strict";
/**
 * String datatype
 */
let firstName = "Agus"; // first way (auto-detect value type)
let jobDescription = "Web Developer"; // second way (manual-define type)
firstName = "Asep";
/**
 * Number datatype
 */
let currentAge = 23;
currentAge = 18;
/**
 * Boolean datatype
 */
let isMarried = false;
/**
 * Any datatype
 */
let weapons = "AK-47";
weapons = ["Glock", "M4", "M16"];
weapons = {
    name: "AK-47",
    damage: 50,
    price: "50 USD"
};
weapons = true || false || 47;
/**
 * Union datatype: kombinasi dari beberapa tipe data pada satu variabel
 */
/**
 *  Example union datatype
 *
 *  629878767899 - valid as a number
 *  082123456765 - 0 akan dihilangkan jika dia number, jadi diharuskan string
 */
let phoneNumber;
phoneNumber = 629878767899;
phoneNumber = "082123456765";
console.log(firstName, currentAge);
console.log(jobDescription);
console.log(isMarried);
console.log(phoneNumber);
