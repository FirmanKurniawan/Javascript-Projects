function bubbleSort(array){
	for(let i = 0; i < array.length - 1; i++){
		for(let j = array.length - 1; j > i; j--){
			if(array[j] < array[j-1]){
				let t = array[j];
				array[j] = array[j - 1];
				array[j - 1] = t;
		    }
		}
	}
}
