// Implement a replica of builtin Promise.race static method.
// `Promise.race` replica

function racePolyfill(arr) {
	return new Promise((resolve, reject) => {
		arr.forEach(p => {
			Promise.resolve(p)
				.then(resolve, reject)
				.catch(reject)
		})
	})
}

function race(arr) {
	return Promise.race(arr)
}

function anyPolyfill(arr) {
	return new Promise((resolve) => arr.forEach(p => p.then(resolve)))
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

// racePolyfill([p1, p2, p3]).then(value => {
// 	console.log(`racePolyfill: ${value}`)
// })

// race([p1, p2, p3]).then(value => {
// 	console.log(`Promise.race: ${value}`)
// })

anyPolyfill([p1, p2, p3]).then(value => {
	console.log(`anyPolyfill: ${value}`)
})
