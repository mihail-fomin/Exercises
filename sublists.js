// Given an array return all the subarrays when sum of elemets is 0.


function printAllSublists(arr) {
	let result = 0
	for (let i = 0; i < arr.length; i++) {
		let total = 0
		for (let j = i; j < arr.length; j++) {
			total += arr[j]
			if (total == 0) {
				result++
				console.log(`Subarray [${i}...${j}]`)
			}
		}
	}
	return result
}

let arr = [-1, 1, 2, -3, 6] // 2 subarrays
// let arr = [1, 2, 3, -6] // 1 subarray
// let arr = [42, -42, 42] // 2 subarrays
console.log(printAllSublists(arr));