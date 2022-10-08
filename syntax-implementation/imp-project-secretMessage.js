let secretMessage = ["Learning", "is", "not", "about", "what", "you", "get", "easily", "the", "first", "time,", "it", "is", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

secretMessage.pop();
console.log(secretMessage.length);

secretMessage.push("to", "program");

easilyIndex = secretMessage.indexOf("easily");
console.log(easilyIndex);

secretMessage[7] = "right";

secretMessage.shift();

console.log(secretMessage);

secretMessage.unshift("Programming");
console.log(secretMessage);

// secretMessage.slice(6, 11);
// secretMessage[6] = 'know';

secretMessage.splice(6, 5, "know");

console.log(secretMessage.join());
