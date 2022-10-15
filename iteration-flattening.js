var arrays = [[1, 2, 3], [4, 5], [6]];
var newArray = arrays.reduce(function(a, b){
	return a.concat(b);
});
console.log(newArray);
// => [1, 2, 3, 4, 5, 6]
