/**
 * Function
 */

function getEmailAdress(): string {
  return "johndoe@example.com";
}

console.log(getEmailAdress());

function getCurrentAge():number {
  const currentAge = 18;
  
  return currentAge;
}

console.log(getCurrentAge());

function isGettingMarried(): boolean {
  return true;
}

console.log(isGettingMarried());


/**
 * Function with arguments type
 */

function isTheCountryCorrupt(decision: boolean): void {
  if (decision === true) {
    console.log("Don't ask me, i don't wanna die right now.");
  } else {
    console.log("Maybe i was thinking wrong.");
  }
}

isTheCountryCorrupt(true);
  

function sumTwoNumbers(num1: number, num2: number): number {
  return num1 + num2;
}

const result = sumTwoNumbers(10, 90);
console.log(result);


/**
 * Function as type
 */

type AgeNumber = number;
let age: AgeNumber = 18;

type Summary = (value1: number, value2: number) => number;

const handleSum: Summary = (a: number, b: number): number => a + b;

const result2 = handleSum(12, 12);
console.log(result2);


/**
 * Default parameter on function
 */

const handleGreeting = (sayHello: string, name: string = "John Doe"): void => {
  console.log(`${sayHello}, ${name}`);
}

handleGreeting("Assalamualaikum");

/**
 * Optional parameter
 */

const areYouHappy = (isHappy: boolean = true, yourWord?: string): void => {
  if (isHappy) {
    console.log("I am happy");
  } else {
    console.log("I am not happy");
  }
  
  if (yourWord) {
    console.log(yourWord);
  }
}

areYouHappy(true);