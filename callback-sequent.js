// Implement afn1, afn2, afn3 functions to log the desired output:

function afn1(fn1) {
	fn1('A')
}

function afn2(x, fn2) {
	fn2(x + '-B')
}

function afn3(x, y, fn3) {
	fn3(y + '-C')
}

// Sequential callback composition
afn1(x1 => {
	afn2(x1, (x2) => {
		afn3(x1, x2, (x3) => {
			console.log(x1, x2, x3) // Should log "A A-B A-B-C" !!!
		})
	})
})
