/* Magic 8 Ball Tarrot - Dea Ananda Gunawan
A project to tell someone's fortune */

let userName = "Dea";
userName ? console.log(`Hello ${userName}!`) : console.log("Hello!");

let userQuestion = "Will my crush be my boyfriend?";
console.log(`Your Question: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

switch (randomNumber) {
  case 1:
    eightBall = "It is certain";
    console.log(`Magic ball\'s answer: ${eightBall}`);
    break;
  case 2:
    eightBall = "It is decidedly so";
    console.log(`Magic ball\'s answer: ${eightBall}`);
    break;
  case 3:
    eightBall = "Reply hazy try again";
    console.log(`Magic ball\'s answer: ${eightBall}`);
    break;
  case 4:
    eightBall = "Cannot predict now";
    console.log(`Magic ball\'s answer: ${eightBall}`);
    break;
  case 5:
    eightBall = "Do not count on it";
    console.log(`Magic ball\'s answer: ${eightBall}`);
    break;
  case 6:
    eightBall = "My sources say no";
    console.log(`Magic ball\'s answer: ${eightBall}`);
    break;
  case 7:
    eightBall = "Outlook not so good";
    console.log(`Magic ball\'s answer: ${eightBall}`);
    break;
  case 8:
    console.log(8);
    eightBall = "Signs point to yes";
    console.log(`Magic ball\'s answer: ${eightBall}`);
    break;
  default:
    eightBall = "Sorry the magic ball isn't responding. Try again!";
    console.log(`Magic ball\'s answer: ${eightBall}`);
    break;
}

/**Do not count on it
 * Outlook not so good
 */
