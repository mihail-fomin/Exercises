// Given a string, replace every letter with its position in the alphabet.

function alphabetPosition(text) {
	let result = text
		.toLowerCase()
		.replace(/[^a-z-]/g, '')
		.split('')
		.map(el => {
			return el.charCodeAt(0) - 96
		})
		.join(' ')
	return result;
}

console.log(alphabetPosition("The sunset sets at twelve o' clock.")); // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"