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


// AI solution:

function replaceChars(str) {
  let output = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) { // A-Z
      output += (charCode - 64) + " ";
    } else if (charCode >= 97 && charCode <= 122) { // a-z
      output += (charCode - 96) + " ";
    } else {
      output += "- "; // symbol niether belongs to A-Z nor a-z
    }
  }
  return output.trim(); // убираем лишние пробелы в начале и конце строки
}


console.log(replaceChars("Hello, world!")); // 8 5 12 12 15 - 23 15 18 12 4 - 
