/* Sleep Debt Calculator - Dea Ananda Gunawan 
A program to determine the actual and ideal hours of sleep for each night of the last week and how far we are from our weekly sleep goal.
*/

// Determingin how many hours of sleep we got each night of the week
function getSleepHours(day) {
  switch (day) {
    case "Monday":
      return 8;
      break;
    case "Tuesday":
      return 8;
      break;
    case "Wednesday":
      return 7;
      break;
    case "Thursday":
      return 8;
      break;
    case "Friday":
      return 8;
      break;
    case "Saturday":
      return 9;
      break;
    case "Sunday":
      return 8;
      break;
    default:
      return "Error!";
      break;
  }
}

//   const getActualSleepHours = () => getSleepHours("Monday") + getSleepHours("Tuesday") + getSleepHours("Wednesday") + getSleepHours("Thursday") + getSleepHours("Friday") + getSleepHours("Saturday") + getSleepHours("Sunday");

function getActualSleepHours() {
  return getSleepHours("Monday") + getSleepHours("Tuesday") + getSleepHours("Wednesday") + getSleepHours("Thursday") + getSleepHours("Friday") + getSleepHours("Saturday") + getSleepHours("Sunday");
}

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

// console.log(getIdealSleepHours());

// Calculate the Sleep Debt
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log(`Your Actual Sleep Hours : ${actualSleepHours}`);
    console.log(`Your Ideal Sleep Hours : ${idealSleepHours}`);
    console.log("You got the PERFECT amount of sleep!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`Your Actual Sleep Hours : ${actualSleepHours}`);
    console.log(`Your Ideal Sleep Hours : ${idealSleepHours}`);
    console.log("You got more SLEEP than you needed!");
  } else if (actualSleepHours < idealSleepHours) {
    console.log(`Your Actual Sleep Hours : ${actualSleepHours}`);
    console.log(`Your Ideal Sleep Hours : ${idealSleepHours}`);
    console.log("You should get more sleep.");
  } else {
    console.log("Error!");
  }
};

console.log(calculateSleepDebt());
