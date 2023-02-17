// Find max and min values in given arrays:

const ns = [2, 1, 3, -1]
const ss = ["c", "a", "w"]
const es = []

// Expected answers:

// ns
//   min: -1
//   max: 1

// ss:
//   min: "a"
//   max: "w"

// es:
//   min: Error("Input array must be non-empty")
//   max: Error("Input array must be non-empty")

/*===============================================================================*/

function findMinValue(arr) {
	if (!arr.length) {
		throw new Error("Input array must be non-empty")
	}
	return arr.reduce((acc, elem) => acc < elem ? acc : elem)
}

function findMaxValue(arr) {
	if (!arr.length) {
		throw new Error("Input array must be non-empty")
	}
	return arr.reduce((acc, elem) => acc > elem ? acc : elem)
}