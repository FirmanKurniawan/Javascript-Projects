function findUniq(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  if (arr[0] == arr[1]) {
    return arr[arr.length - 1];
  } else {
    return arr[0];
  }
}

const test1 = findUniq([1, 1, 1, 2, 1, 1]); //2
const test2 = findUniq([0, 0, 0.55, 0, 0]); // 0.55;

console.log(test1);
console.log(test2);
