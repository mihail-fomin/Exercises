// Implement a Queue class that exposes few methods: push, pop, size.
//  The data should pipe through the queue in FIFO order.
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(value) {
		const node = new Node(value);

		if (this.head) {
			this.tail.next = node
			this.tail = node
		} else {
			this.head = node
			this.tail = node
		}
		this.length++
	}

	pop() {
		if (!this.length) { return }
		const current = this.head;
		this.head = this.head.next;
		this.length--

		return current.value
	}

	size() {
		return this.length
	}
}

const queue = new Queue()

console.log(queue.size());  // 0

queue.push("A")
console.log(queue.size()); // 1

queue.push("B")
console.log(queue.size()); // 2

queue.pop() // => "A"
console.log(queue.size()); // 1

queue.pop() // => "B"
console.log(queue.size()); // 0

queue.pop() // => An error does not appear 