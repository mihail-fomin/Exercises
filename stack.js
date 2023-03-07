// Implement a Stack class that exposes two methods: push and pop. 
// The data should pipe through the queue in LIFO order.
// class Node {
// 	constructor(value) {
// 		this.value = value
// 		this.next = null
// 	}
// }

// class Stack {
// 	constructor() {
// 		this.head = null
// 		this.tail = null
// 		this.length = 0
// 	}

// 	push(value) {

// 		const node = new Node(value)

// 		if (this.head) {
// 			this.head.next = this.head
// 			this.head = node

// 		} else {
// 			this.head = node
// 			this.tail = node
// 		}
// 		this.length++
// 	}

// 	pop() {
// 		if (!this.length) { return }
// 		const current = this.head
// 		this.head = this.head.next
// 		this.length--

// 		return current.value
// 	}

// 	size() {
// 		// O(1) (constant time)
// 		return this.length
// 	}
// }

// const stack = new Stack()

// stack.push('A') // head -> A, tail -> A
// stack.push('B') // head -> B, tail -> A
// stack.push('C') // head -> C, tail -> A
// stack.pop()     // head -> null, tail -> A
// console.log(stack);

const fs = require('fs')

class Stack {
	constructor(path) {
		this.items = []
		this.path = path
	}

	push(value) {
		// O(1) (constant time)
		this.items.push(value)
		let string = JSON.stringify(this.items)
		fs.writeFile(this.path, string, () => { })
	}

	pop() {
		// O(1)+O(1) = O(1) (constant time)
		if (!this.items.length) { return "Underflow" }
		let deletedItem = this.items.pop()
		fs.truncate(this.path, err => {
			if (err) throw err; // Didn't manage to clean the file
			console.log(`The file "${this.path}" has been cleaned`);
		});
		let string = JSON.stringify(this.items)
		fs.writeFile(this.path, string, () => { })
		return deletedItem
	}

	isEmpty() {
		return this.items.length === 0
	}

	clear() {
		return this.items = []
	}
}

const stack = new Stack('./stack.json')

stack.push('A')
stack.push('B')
stack.push('C')

// console.log(stack) // -> ['A', 'B', 'C']

stack.pop()
// console.log(stack);  // -> ['A', 'B']

// console.log(stack.clear());  // -> []
// stack.push('A')
// console.log(stack) //  -> ['A']
