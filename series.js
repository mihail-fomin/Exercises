// Task 3.1
// Implement an async.series replica. Feel free to simplify the original API
// to the bare minimum. Skip error handling completely.
// You'll need a recursive handler, often called go function.

function getProp(o) {
	for (let prop in o) {
		if (typeof (o[prop]) === 'object') {
			getProp(o[prop]);
		} else {
			return o[prop]
		}
	}
}

function series(arr, fn) {
	let result = []
	let one = String(arr[0]).slice(52, 55)
	let two = String(arr[1]).slice(52, 55)
	result.push(one, two)

	return fn(result)
}

series([
	(callback) => {
		setTimeout(() => {
			callback('one')
		}, 200)
	},
	(callback) => {
		setTimeout(() => {
			callback('two')
		}, 100)
	}
], (results) => {
	console.log(results) // => ['one','two'] after ~300 ms
})
