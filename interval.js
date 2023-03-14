// Implement a builtin setInterval replica with setTimeout. Feel free to simplify the original API to the bare minimum:

function mySetInterval(callback, delay) {
	const timerRef = { id: null };
	let timer = () => {
		timerRef.id = setTimeout(() => {
			callback()
			timer()
		}, delay)
	}
	timer()
	return timerRef
}

const interval = mySetInterval(() =>
	console.log(new Date())
	, 1000)

setTimeout(() => {
	interval.clearInterval()
}, 5500)


/*====================================================
*/

// Here's a broken implementation of setInterval based on setTimeout:

// function setInterval(callback, delay) {
// 	const t = setTimeout(() => {
// 		callback()
// 		t = setTimeout(callback, delay)
// 	}, delay)
// 	return {
// 		clearInterval: () => clearTimeout(t)
// 	}
// }

// const interval = setInterval(console.log, 1000, console);

// clearInterval(interval);

