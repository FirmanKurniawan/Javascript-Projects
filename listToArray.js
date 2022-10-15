function listToArray(list){
	var p = list;
	var array = [];

	while(p){
		array.push(p.value);
		p = p.rest;
	}

	return array;
}

function arrayToList(array){
	var list = {};
	list.value = array[array.length - 1];
	list.rest = null;

	for(let i = array.length - 2; i >= 0; i--){
		var temp = {};
		temp.value = array[i];
		temp.rest = list;

		list = temp;
	}

	return list;
}

var a = [1, 2, 3, 4, 5, 6];
var list = arrayToList(array);
var array = listToArray(list);

console.log(array);
