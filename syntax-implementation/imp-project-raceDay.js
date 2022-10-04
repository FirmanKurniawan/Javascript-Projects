/* Race Day - Dea Ananda Gunawan
A project to manage registration and rules for a Race Day */

/*
Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
 */

// To set random number as the race number for others than early adults registrants
let raceNumber = Math.floor(Math.random() * 1000);

// To check if a runner registered early or not
let isEarly = false;

// To check runner's age
let runnerAge = 16;

// To check wether the runner is adult and registered early: add 1000 to their race number
if (runnerAge > 18 && isEarly) {
  raceNumber = raceNumber += 1000;
}

// To determine race time.
if (runnerAge > 18 && isEarly) {
  console.log(`Your race number is: ${raceNumber}
And you will race at 9:30 AM.`);
} else if (runnerAge > 18 && !isEarly) {
  console.log(`Your race number is: ${raceNumber}
And you will race at 11:00 AM.`);
} else if (runnerAge < 18) {
  console.log(`Your race number is: ${raceNumber}
And you will race at 12:30 PM.`);
} else {
  console.log("You should see the registration desk.");
}
