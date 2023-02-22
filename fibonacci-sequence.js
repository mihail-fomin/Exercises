// Implement a makeFibonacciSequence function with no arguments that returns 
// an object with a single next method. The method takes no arguments and
// returns a next fibonacci number when called.


function makeFibonacciSequence() {
	let n = 0;
	next = () => {
		n++
		let a = 1;
		let b = 1;
		for (let i = 3; i <= n; i++) {
			let c = a + b;
			a = b;
			b = c;
		}
		return b
	}
	return {
		next,
	};
}

const fibonacciSequence1 = makeFibonacciSequence()
console.log(fibonacciSequence1.next()) // 1
console.log(fibonacciSequence1.next()) // 1
console.log(fibonacciSequence1.next()) // 2
console.log(fibonacciSequence1.next()) // 3
console.log(fibonacciSequence1.next()) // 5