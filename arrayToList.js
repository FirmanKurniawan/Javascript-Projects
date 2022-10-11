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

var array = [1, 2, 3, 4, 5, 6];
var list = arrayToList(array);

//test
function printList(list){
	if(list){
		console.log(list.value);
		printList(list.rest);	
	}else{
		console.log('null');
	}
}
printList(list);
// result:
// 1
// 2
// 3
// 4
// 5
// 6
// null
