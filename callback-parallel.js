
function afn(x, fn) {
	setTimeout(() => {
		fn(x)
	}, Math.random() * 1000 + 1000)
}

let xs = ["A", "B", "C"]

// Parallel callback composition
let rs = []
for (let x of xs) {
	afn(x, (r) => {
		rs.push(r)
		console.log(`${r} - ${new Date}`);

		if (rs.length == xs.length) {
			console.log(rs) // Should log "A B C" in any order with random delays
		}
	})
}
