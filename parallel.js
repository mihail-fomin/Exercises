// Implement an async.parallel replica. Feel free to simplify the original API
// to the bare minimum. Skip error handling completely. Refer to the task 2.2
// for a structural hint. You'll need a loop to solve this task and it may feel
// easier than 3.1, feel free to solve them in any order.

function parallel(arr, next) {
	const results = []
	for (let i = 0; i < arr.length; i++) {
		const fn = arr[i]
		fn((str) => {
			results[i] = str
			if (results.filter(x => typeof (x) === 'string').length === arr.length) {
				next(results)
			}
		})
	}
}


parallel([
	(callback) => {
		setTimeout(() => {
			callback('one')
		}, 2000)
	},
	(callback) => {
		setTimeout(() => {
			callback('two')
		}, 1000)
	}
], (results) => {
	console.log(results) // => ['one','two'] after ~2000 ms
})

