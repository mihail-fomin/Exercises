// Write a function that returns Greatest common divisor

// Returns memoized version of f.
// Works only if all f args are differ from each other
function memoize(f) {
	const cache = new Map() // cache stores in closure

	return function (...args) {
		// Creates string version of args to use as a cache key
		let key = args.length + args.join('+')
		if (cache.has(key)) {
			return cache.get(key)
		} else {
			let result = f.apply(this, args)
			cache.set(key, result)
			return result
		}
	}
}

// Frunction to search Greatest common divisor using Evklid algorithm
function gcd(a, b) {
	if (a < b) {
		[a, b] = [b, a]
	}
	while (b !== 0) {
		[a, b] = [b, a % b]
	}
	return a
}

const gcdmemo = memoize(gcd)
console.log(gcdmemo(85, 187)); // 17

// AI solution

function gcd(a, b) {
  if (b == 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

console.log(gcd(60, 48)); // 12
console.log(gcd(84, 45)); // 3
