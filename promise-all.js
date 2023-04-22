// `Promise.all` replica
function allPloyfill(arr) {
	const rs = []
	let count = 0

	return new Promise((resolve, reject) => {
		arr.forEach((promise, index) => {
			promise.then(result => {
				rs[index] = result
				count++
				if (count === arr.length) {
					resolve(rs)
				}
			})
				.catch(error => reject(error))
		});
	})
}

function allOrigin(arr) {
	return Promise.all(arr)
}

const p1 = new Promise(resolve => {
	setTimeout(() => resolve("A"), 5000)
})

const p2 = new Promise(resolve => {
	setTimeout(() => resolve("B"), 1000)
})

allPloyfill([p1, p2]).then(value => {
	console.log('allPloyfill: ', value);
	// => ["A", "B"] after 5 seconds
})

allOrigin([p1, p2]).then(value => {
	console.log('allOrigin: ', value);
	// => ["A", "B"] after 5 seconds
})