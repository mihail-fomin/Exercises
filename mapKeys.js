// Implement a function mapKeys to map over object keys:

// export function mapKeys(mapFn: (k: string) => string, obj: Dict<string>): Dict<string> {

// }

// mapKeys(k => k.toUpperCase(), {php: 2, python: 3, javascript: 4})
// {PHP: 2, PYTHON: 3, JAVASCRIPT: 4}

// mapKeys(k => k.toUpperCase(), {})
// {}

let obj = { php: 2, python: 3, javascript: 4 }

function mapKey(obj, fn) {
	let arr = Object.entries(obj).reduce((acc, [key, value]) => {
		acc.push([fn(key), value])
		return acc
	}, [])
	return (Object.fromEntries(arr))
}

console.log(mapKey(obj, x => x.toUpperCase()))