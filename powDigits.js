// We need a function to collect these numbers, that may receive two integers a, b
// that defines the range [a,b] (inclusive) and outputs a list of the sorted
// numbers in the range that fulfills the property described bellow.
// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

function numToArr(x) {
	x = ('' + x).split('')
	return x.map(Number)
}

function sumArr(arr) {
	return arr.reduce((acc, elem) => acc + elem)
}

function powDigits(arr) {
	let newArr = []
	for (let i = 0; i < arr.length; i++) {
		newArr.push(Math.pow(arr[i], i + 1))
	}
	return sumArr(newArr)
}

function sumDigPow(a, b) {
	let results = []
	for (a; a <= b; a++) {
		if (a < 10) {
			results.push(a)
		} else {
			if (a == powDigits(numToArr(a))) { results.push(a) }
		}
	}
	return results
}

console.log(sumDigPow(0, 136)); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 89, 135]