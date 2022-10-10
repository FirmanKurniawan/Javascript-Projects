function some(array, action){
	for(var i = 0; i < array.length; i++)
		if(action(array[i])) return true;
	return false;
}

console.log(some([NaN, 3, 4], isNaN));
// => true
console.log(some([2, 3, 4], isNaN));
// => false
