// Implement a Queue class that exposes few methods: push, pop, size.
//  The data should pipe through the queue in FIFO order.

const fs = require('fs')

class Node {
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

	pushRight(value) {
		// O(1)+O(1)+O(1) = O(1) (constant time)
		const node = new Node(value)

		if (this.head) {
			this.tail.next = node
			this.tail = node
		} else {
			this.head = node
			this.tail = node
		}
		this.length++
		fs.writeFile(this.path, value, () => { })
	}

	// pushLeft(value) {
	// 	// O(1)+O(1)+O(1) = O(1) (constant time)
	// 	const node = new Node(value)

	// 	if (this.head) {
	// 		this.head = this.head.next
	// 		this.head = node
	// 	} else {
	// 		this.head = node
	// 		this.tail = node
	// 	}
	// 	this.length++
	// }

	popLeft() {
		// O(1)+O(1)+O(1) = O(1) (constant time)
		if (!this.length) { return }
		const current = this.head
		this.head = this.head.next
		this.length--

		return current.value
	}

	size() {
		// O(1) (constant time)
		return this.length
	}
}

const queue = new Queue("./queue.json")

queue.pushRight("A")
queue.pushRight("B")
queue.pushRight("C")

console.log(queue);

