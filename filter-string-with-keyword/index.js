const data = {
  animalList: ["bebek", "mentok", "sapi", "kambing", "biri-biri"],
};

let stringToMatch = "bi";

let filteredList = data.animalList.filter(
  (animal) => animal.indexOf(stringToMatch) !== -1
);

console.log(filteredList);
