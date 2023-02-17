// Count a number of each letter in a given string. Ignore letter casing and punctuation:

// Algo complexity: 4* O(n) * O(n * log n) -- think how to reduce it

const str = "To be, or not to be."

// Expected answer:

// {
//   b: 2,
//   e: 2,
//   n: 1,
//   o: 4,
//   r: 1,
//   t: 3,
// }

/*===============================================================================*/


function countAndSortLetters(text) {
	const chars = text
		.toLowerCase()
		.replace(/[^a-zа-я0-9]/g, '')
		.split('')
	let arr = Object.entries(chars.reduce((acc, el) => {
		acc[el] = (acc[el] || 0) + 1;
		return acc;
	}, {}));
	return Object.fromEntries(arr.sort((a, b) => a > b ? 1 : -1))
}

console.log(countAndSortLetters(str))
