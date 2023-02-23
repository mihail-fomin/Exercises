// Implement a makeFibonacciSequence function with no arguments that returns 
// an object with a single next method. The method takes no arguments and
// returns a next fibonacci number when called.

//FP
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

// OOP
class FibonacciSequence {
	constructor(n = 0) {
		this.n = n
	}
	next() {
		this.n++
		let a = 1;
		let b = 1;
		for (let i = 3; i <= this.n; i++) {
			let c = a + b;
			a = b;
			b = c;
		}
		return b
	}
}

const fibonacciSequence1 = new FibonacciSequence()
console.log(fibonacciSequence1.next()) // 1
console.log(fibonacciSequence1.next()) // 1
console.log(fibonacciSequence1.next()) // 2
console.log(fibonacciSequence1.next()) // 3
console.log(fibonacciSequence1.next()) // 5

const fibonacciSequence1 = makeFibonacciSequence()
console.log(fibonacciSequence1.next()) // 1
console.log(fibonacciSequence1.next()) // 1
console.log(fibonacciSequence1.next()) // 2
console.log(fibonacciSequence1.next()) // 3
console.log(fibonacciSequence1.next()) // 5
