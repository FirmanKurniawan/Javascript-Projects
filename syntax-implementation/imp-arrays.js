// Nested loop and array
// To check the same number
const myArray = [1, 2, 3];
const yourArray = [3, 4, 5];

for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log(`Both arrays have the number: ${yourArray[j]}`);
    }
  }
}

// To print backwards
for (let i = 3; i >= 0; i--) {
  console.log(i);
}

//   To find mutual followers
const bobsFollowers = ["Gloria", "Lily", "Alex", "Claire"];
const tinasFollowers = ["Phill", "Claire", "Gloria"];

const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

console.log(mutualFollowers);
