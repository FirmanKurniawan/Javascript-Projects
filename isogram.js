// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// An isogram is a string that contains only letters . Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {

  var newStr = str.toLowerCase();
  if (newStr == "") {
    return true;
  }

  var isSame = "";
  for (var i = 0; i < newStr.length; i++) {
    for (var j = 0; j < newStr.length; j++) {
      //console.log(i, j);
      if (newStr[i] === newStr[j] && i !== j) {
        isSame += newStr[i];
      }
    }
  }
  if (isSame != "") {
    return "It is not an isogram";
  } else {
    return "Wow, that is isogram. Wkwkwk";
  }
}

console.log(isIsogram("Hacktoberfest"));
console.log(isIsogram("abcdef"));
