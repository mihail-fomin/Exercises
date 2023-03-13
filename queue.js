// Implement a Queue class that exposes few methods: push, pop, size.
//  The data should pipe through the queue in FIFO order.

class Item {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor(path) {
		this.head = null
		this.tail = null
		this.length = 0
		this.path = path
	}

	rpush(value) {
		// O(1) (constant time)
		const item = new Item(value)

		if (this.tail) {
			this.tail.next = item
			this.tail = item
		} else {
			this.head = item
			this.tail = item
		}
		this.length++
	}

	lpop() {
		// O(1) (constant time)
		if (!this.length) { return undefined }
		const current = this.head
		this.head = this.head.next
		this.length--

		return current.value
	}

	toArray() {
		// O(n)
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

const queue = new Queue()

queue.rpush("A")
console.log(queue.toArray()); // [ 'A' ]
queue.rpush("B")
console.log(queue.toArray()); // [ 'A', 'B' ]
queue.rpush("C")
console.log(queue.toArray()); // [ 'A', 'B', 'C' ]
queue.lpop()
console.log(queue.toArray()); // [ 'B', 'C' ]
queue.lpop()
console.log(queue.toArray()); // [ 'C' ]

