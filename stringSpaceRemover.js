const noSpace = (str) => {
  const result = [];
  for (let i = 0; i < str.split("").length; i++) {
    if (str.split("")[i] !== " ") {
      result.push(str.split("")[i]);
    }
  }
  return result.join("");
};

console.log(noSpace("Good Morning People!"));
console.log(noSpace("Good Night                                  Stars!"));
