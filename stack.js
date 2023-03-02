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

class Stack {
	constructor() {
		this.items = []
	}

	push(value) {
		// O(1) (constant time)
		this.items.push(value)
	}

	pop() {
		// O(1)+O(1) = O(1) (constant time)
		if (!this.items.length) { return "Underflow" }
		return this.items.pop()
	}
}

const stack = new Stack()

stack.push('A')
stack.push('B')
stack.push('C')

stack.pop()

console.log(stack);
