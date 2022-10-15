function shakerSort(array){
	let left, right, k;
 
    left = 0;
    right = array.length - 1;
    k = array.length - 1;
            
    while(left < right)
    {       
        for(let j = right; j > left; j--)
        {
            if(array[j] < array[j - 1])
            { 
                let t = array[j];
                array[j] = array[j - 1];
                array[j - 1] = t;
                k = j;  
            }              
        }
        left = k;
 
        for (let j = left; j < right; j++)
        {  
            if (array[j] > array[j + 1])
            { 
                let t = array[j];
                array[j] = array[j + 1];
                array[j + 1] = t;
                k = j;
            }    
        } 
        right = k;
    }
}
