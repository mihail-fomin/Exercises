// Implement a Logger class that accepts a log level value 
// and exposes 4 logging methods.

const logLevels = {
	error: 0,
	warn: 1,
	info: 2,
	debug: 3,
}

class Logger {
	constructor(logLevel) {
		this.logLevel = logLevels[logLevel]
	}

	// getNumber() {
	// 	switch (this.logLevel) {
	// 		case 'error': return 0
	// 		case 'warn': return 1
	// 		case 'info': return 2
	// 		case 'debug': return 3
	// 	}
	// }

	debug(message) {
		if (this.logLevel === 3) {
			console.log(message)
		}
	}

	info(message) {
		if (this.logLevel >= 2) {
			console.log(message)
		}
	}

	warn(message) {
		if (this.logLevel >= 1) {
			console.log(message)
		}
	}

	error(message) {
		if (this.logLevel >= 0) {
			console.log(message)
		}
	}
}

let logger1 = new Logger("warn")
logger1.warn("Some warning message") // => "Some warning message" is logged
logger1.error("Some error message")  // => "Some error message" is logged
logger1.info("Some info message")    // => nothing is logged
logger1.debug("Some debug message")  // => nothing is logged
console.log("----")
let logger2 = new Logger("debug")
logger2.warn("Some warning message") // => "Some warning message" is logged
logger2.error("Some error message")  // => "Some error message" is logged
logger2.info("Some info message")    // => "Some info message" is logged
logger2.debug("Some debug message")  // => "Some debug message" is logged
