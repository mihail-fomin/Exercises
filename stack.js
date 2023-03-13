// Implement a Stack class that exposes two methods: push and pop. 
// The data should pipe through the queue in LIFO order.

class Item {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class Stack {
	constructor() {
		this.head = null
		this.length = 0
	}

	lpush(value) {
		const item = new Item(value)
		if (this.head) {
			item.next = this.head
			this.head = item
		} else {
			this.head = item
		}
		this.length++

	}

	lpop() {
		if (!this.length) { return undefined }
		const current = this.head
		this.head = this.head.next
		this.length--
		return current.value
	}

	toArray() {
		const xs = []
		let item = this.head
		while (item) {
			xs.push(item.value)
			item = item.next
		}
		return xs
	}

	size() {
		// O(1) (constant time)
		return this.length
	}
}

const stack = new Stack()

stack.lpush('A')
console.log(stack.toArray()); // [ 'A' ]
stack.lpush('B')
console.log(stack.toArray()); // [ 'B', 'A' ]
stack.lpush('C')
console.log(stack.toArray()); // [ 'C', 'B', 'A' ]
stack.lpop()
console.log(stack.toArray()); // [ 'B', 'A' ]
stack.lpop()
console.log(stack.toArray()); // [ 'A' ]

