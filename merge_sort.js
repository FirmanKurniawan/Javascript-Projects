function merge(array, left, m, right){
	let l = left, r = m + 1;
	let tmp = [];

	while(l <= m && r <= right){
		if(array[l] < array[r]) tmp.push(array[l++]);
		else tmp.push(array[r++]);
	}

	while(l <= m) tmp.push(array[l++]);
	while(r <= right) tmp.push(array[r++]);

	for(let i = 0; i < tmp.length; i++)
		array[i + left] = tmp[i];
}

function mergeSort(array, left, right){
	if(left < right){
		let m = Math.floor((left + right) / 2);
		mergeSort(array, left, m);
		mergeSort(array, m + 1, right);
		merge(array, left, m, right);
	}
}
