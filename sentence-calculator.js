// Sentence Calculator
// Calculate the total score (sum of the individual character scores)
//  of a sentence given the following score rules for each allowed
// group of characters:

// Lower case [a - z]: 'a' = 1, 'b' = 2, 'c' = 3, ..., 'z' = 26
// Upper case [A - Z]: 'A' = 2, 'B' = 4, 'C' = 6, ..., 'Z' = 52
// Digits[0 - 9] their numeric value: '0' = 0, '1' = 1, '2' = 2, ..., '9' = 9
// Other characters: 0 value

function lettersToNumbers(s) {
	let lwrString = s
		.replace(/[^a-z-]/g, '')
		.split('')
		.map(el => {
			return el.charCodeAt(0) - 96
		})
		.reduce((acc, el) => acc + el, 0)

	let uprString = s
		.replace(/[^A-Z-]/g, '')
		.toLowerCase()
		.split('')
		.map(el => {
			return 2 * (el.charCodeAt(0) - 96)
		})
		.reduce((acc, el) => acc + el, 0)
	let arr = []
	let numbers = s.replace(/\D/g, "")

	if (numbers.length) {
		numbers = ('' + numbers).split('')
		arr = numbers.map(Number)
			.reduce((acc, el) => acc + el)
	}

	return Number(lwrString + uprString + arr)
}

console.log(lettersToNumbers("ARE YOU HUNGRY?")) // 356
console.log(lettersToNumbers("oops, i did it again!")) // 152
console.log(lettersToNumbers("Give me 5!")) // 73
console.log(lettersToNumbers("Give me five!")) // 110


