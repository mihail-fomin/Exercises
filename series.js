// Implement an async.series replica. Feel free to simplify the original API
// to the bare minimum. Skip error handling completely.
// Refer to tasks 2.1 and 1.1 for structural hints. 
// You'll need a recursive handler, often called go function.


function series(arr, next) {
	const results = []

	function go(arr) {
		if (!arr.length) {
			return next(results)
		}
		const [fn, ...restFns] = arr
		fn((r) => {
			results.push(r)
			go(restFns)
		})
	}
	go(arr)
}

series([
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
	console.log(results) // => ['one','two'] after ~3000 ms
})
