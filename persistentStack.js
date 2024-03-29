// Store information in JSON file(s). Use node:fs module.
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
		const xs = str ? JSON.parse(str) : []
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

	async lpop() {
		if (!this.head) {
			return undefined
		}
		const current = this.head
		this.head = this.head.next
		this.length--
		const str = JSON.stringify(this.toArray(), null, 2)
		await fs.writeFile("db.json", str, { flag: "w" })
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
await stack.lpush(1)
console.log(stack.toArray()); // [ 1 ]
await stack.lpush(2)
console.log(stack.toArray()); // [ 2, 1 ]
await stack.lpop()
console.log(stack.toArray()); // [ 1 ]
