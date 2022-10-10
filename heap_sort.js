function heapify(array, N, i){
    let left = 2*i + 1, right = 2*i + 2, largest;
		 
    if(left < N && array[left] > array[i]) largest = left;
    else largest = i;
		 
    if(right < N && array[right] > array[largest]) largest = right;
		 
    if(largest != i)    {
        let t = array[i];
        array[i] = array[largest];
        array[largest] = t;
        heapify(array, N, largest);
    }
}
		     
function buildHeap(array){
	let m = Math.floor(array.length / 2 - 1);
    for(let i = m; i >= 0; i--)
        heapify(array, array.length, i);
}
		     
function heapSort(array){
    buildHeap(array);
		     
    for(let i = array.length - 1; i >= 0; i--)    {
        let t = array[0];
        array[0] = array[i];
        array[i] = t;

        heapify(array, i, 0);
    }
}
