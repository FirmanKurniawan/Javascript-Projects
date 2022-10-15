function insertionSort(array){
	let pos, x;
	for(let i = 1; i < array.length; i++){
		pos = i - 1;
		x = array[i];
		while(pos >= 0 && array[pos] > x){
			array[pos + 1] = array[pos];
			pos--; 
		}
		array[pos + 1] = x;
	}
}
