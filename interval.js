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


// AI solution 

function interval(func, time) {
  setTimeout(() => {
    func();
    interval(func, time);
  }, time);
}

let count = 0;

const increment = () => {
  count++;
  console.log(count);
}

interval(increment, 1000);

This function will call 'function every 'time' ms, until clearInterval is called or on script stopping.
