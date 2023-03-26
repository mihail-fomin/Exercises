// Implement an waterfall.series replica.


function waterfall(arr, next) {
	let result
	function go(arr) {
		console.log('@go | result: ', result);

		if (!arr.length) {
			return next(result)
		}
		const [fn, ...restFns] = arr
		if (result === undefined) {
			fn((r) => {
				result = r
				go(restFns)
			})
		} else {
			fn(result, (r) => {
				result = r
				go(restFns)
			})
		}
	}
	go(arr)
}

waterfall([
	(next) => {
		setTimeout(() => {
			next('A')
		}, 3000)
	},
	(r1, next) => {
		next(r1 + '-B')
	},
	(r1_r2, next) => {
		setTimeout(() => {
			next(r1_r2 + '-C')
		}, 2000)
	}
], (r1_r2_r3) => {
	console.log(r1_r2_r3) // => "A-B-C" after ~5000 ms
})
