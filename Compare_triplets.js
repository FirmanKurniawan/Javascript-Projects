function compareTriplets(a, b) {
  // Write your code here
  // TODO: answer here
  var aScore = 0;
  var bScore = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      aScore++;
    } else if (a[i] < b[i]) {
      bScore++;
    }
  }
  return [aScore, bScore];
}
function main() {

  const a = [5, 6, 7] // override input
  const b = [3, 6, 10] // override input

  const result = compareTriplets(a, b);

  console.log(result)
}

main()
