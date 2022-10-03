"use strict";
/**
 * Function
 */
function getEmailAdress() {
    return "johndoe@example.com";
}
console.log(getEmailAdress());
function getCurrentAge() {
    const currentAge = 18;
    return currentAge;
}
console.log(getCurrentAge());
function isGettingMarried() {
    return true;
}
console.log(isGettingMarried());
/**
 * Function with arguments type
 */
function isTheCountryCorrupt(decision) {
    if (decision === true) {
        console.log("Don't ask me, i don't wanna die right now.");
    }
    else {
        console.log("Maybe i was thinking wrong.");
    }
}
isTheCountryCorrupt(true);
function sumTwoNumbers(num1, num2) {
    return num1 + num2;
}
const result = sumTwoNumbers(10, 90);
console.log(result);
let age = 18;
const handleSum = (a, b) => a + b;
const result2 = handleSum(12, 12);
console.log(result2);
/**
 * Default parameter on function
 */
const handleGreeting = (sayHello, name = "John Doe") => {
    console.log(`${sayHello}, ${name}`);
};
handleGreeting("Assalamualaikum");
/**
 * Optional parameter
 */
const areYouHappy = (isHappy = true, yourWord) => {
    if (isHappy) {
        console.log("I am happy");
    }
    else {
        console.log("I am not happy");
    }
    if (yourWord) {
        console.log(yourWord);
    }
};
areYouHappy(true);
