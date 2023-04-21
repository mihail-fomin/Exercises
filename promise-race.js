// Implement a replica of builtin Promise.race static method.
// `Promise.race` replica

async function race(arr) {
	return new Promise((resolve, reject) => {
		arr.forEach(p => {
			Promise.resolve(p)
				.then(resolve, reject)
				.catch(reject)
		})
	})
}


const p1 = new Promise(resolve => {
	setTimeout(resolve, 3000, "A")
})

const p2 = new Promise(resolve => {
	setTimeout(resolve, 1000, "B")
})

const p3 = new Promise((resolve, reject) => {
	setTimeout(reject, 2000, "С")
})

race([p1, p2, p3]).then(value => {
	console.log(value)
	// => "B" after 1 second
})

