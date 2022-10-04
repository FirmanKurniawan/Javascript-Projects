// Binary Search
// Author : Kereh
// Github : https://github.com/kereh

function binary(arr, target) {
	
	let low = 0
	let high = arr.length

	while (true) {

		let mid = Math.floor((high + low) / 2)

		if (arr[mid] == target) {
			return mid
		} else if (arr[mid] < target) {
			low = mid + 1
		} else {
			high = mid - 1
		}
	}

	return -1
}

let data = [29,11,23,1,5,10,200]
console.log(binary(data, 10))
