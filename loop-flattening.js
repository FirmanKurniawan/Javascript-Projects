var arrays = [[1, 2, 3], [4, 5], [6]];
var newArray = [];
for(var i = 0; i < arrays.length; i++){
	var subArray = arrays[i];
	for(var j = 0; j < subArray.length; j++)
		newArray.push(subArray[j]);
}
console.log(newArray);
// => [1, 2, 3, 4, 5, 6]
