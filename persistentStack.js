// Implement a Stack class that exposes two methods: push and pop. 
// The data should pipe through the queue in LIFO order.
export { };
import * as fs from "fs/promises"

function makeItem(value) {
	return { value, next: null }
}

class PersistentStack {
	constructor(dbFile) {
		this.head = null
		this.length = 0
		this.dbFile = dbFile
	}

	async init() {
		const str = (await fs.readFile("db.json")).toString()
		const xs = JSON.parse(str)
		for (const x of xs.reverse()) {
			await this.lpush(x)
		}
		return this
	}

	async lpush(value) {
		const item = makeItem(value)
		if (this.head) {
			item.next = this.head
			this.head = item
		} else {
			this.head = item
		}
		const str = JSON.stringify(this.toArray(), null, 2)
		await fs.writeFile("db.json", str, { flag: "w" })
		this.length++
	}

	lpop() {
		if (!this.head) {
			return undefined
		}
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


	static fromArray(xs) {
		const stack = new PersistentStack()
		for (const x of [...xs].reverse()) {
			stack.lpush(x)
		}
		return stack
	}

	size() {
		// O(1) (constant time)
		return this.length
	}
}

const stack = new PersistentStack("./db.json")
await stack.init()
await stack.lpush(5)
console.log(stack);

// await stack.init()

// await stack.lpush(1)
// await stack.lpush(2)
// await stack.lpush(3)
// console.log(stack.toArray()); // [ 'A' ]
// await stack.lpush('B')
// console.log(stack.toArray()); // [ 'B', 'A' ]
// await stack.lpush('C')
// console.log(stack.toArray()); // [ 'C', 'B', 'A' ]
// await stack.lpop()
// console.log(stack.toArray()); // [ 'B', 'A' ]
// await stack.lpop()
// console.log(stack.toArray()); // [ 'A' ]

