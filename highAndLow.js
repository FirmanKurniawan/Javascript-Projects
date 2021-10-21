function highAndLow(numbers) {
  var arr = numbers.split(" ");
  arrNum = [];

  for (var i = 0; i < arr.length; i++) {
    arrNum.push(Number(arr[i]));
  }
  arrNum.sort(function (val1, val2) {
    return val1 - val2;
  });
  return arrNum[arrNum.length - 1] + " and " + arrNum[0];
}

console.log(highAndLow("1 4 3 4 5")); // return "5 and 1"
console.log(highAndLow("1 8 2 -3 4 5")); // return "8 and -3"
console.log(highAndLow("1 10 3 4 -5")); // return "10 and -5"
