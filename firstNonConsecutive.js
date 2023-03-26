// Find the first element of an array that is not consecutive.

function firstNonConsecutive(arr) {
	for (let i = 1; i < arr.length; i++) {
		// console.log('i-1: ', i - 1)
		// console.log('i: ', i)
		if (arr[i - 1] !== arr[i] - 1) { return arr[i] }
	}
	return null
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); // 6