// Implement a function intersections to find common set elements across multiple sets:

const set1 = new Set(["foo", "bar"])
const set2 = new Set(["foo"])
const set3 = new Set(["bar", "foo"])
const set4 = new Set(["spam", "foo"])
const set5 = new Set(["spam"])

// function intersections<T>(sets: (Set<T>)[]): Set<T> {

// }

// intersections([set1, set3])
// new Set(["bar", "foo"])

// intersections([set1, set5])
// new Set([])

// intersections([set1, set2, set3, set4])
// new Set(["foo"])

function uniteSets(set1, set2) {
	return new Set([...set1, ...set2])
}

function intersection(set1, setRight) {
	const setLeft = new Set(set1)
	for (const x of setLeft) {
		if (!setRight.has(x)) {
			setLeft.delete(x)
		}
	}
	return setLeft
}

function difference(set1, setRight) {
	// Version-1 | complexity: O(n)
	// return new Set([...set1].filter(element => !setRight.has(element)))

	// Version-2 | complexity: O(n)
	const setLeft = new Set(set1)
	for (const x of setRight) {
		setLeft.delete(x)
	}
	return setLeft
}

function reduce1(arr, reduceFn) {
	if (!arr.length) {
		throw new Error("`arr` must not be empty")
	}
	const [elem, ...rest] = arr
	return rest.reduce(reduceFn, elem)
}

console.log(reduce1([set4, set5], intersection))
