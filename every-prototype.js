function every(array, action){
	for(var i = 0; i < array.length; i++)
		if(!action(array[i])) return false;
	return true;
}

console.log(every([NaN, NaN, NaN], isNaN));
// => true
console.log(every([NaN, NaN, 4], isNaN));
// => false
