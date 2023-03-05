// Implement a Logger class that accepts a log level value 
// and exposes 4 logging methods.

class Logger {
	constructor(logLevel) {
		this.logLevel = logLevel
	}

	getNumber() {
		let level;
		switch (this.logLevel) {
			case 'error':
				level = 0
				break;
			case 'warn':
				level = 1
				break;
			case 'info':
				level = 2
				break;
			case 'debug':
				level = 3
				break;
		}
		return level
	}

	debug(message) {
		this.getNumber() === 3 ?
			console.log(`${message} is logged`)
			: console.log(`nothing is logged`)
	}

	info(message) {
		this.getNumber() >= 2 ?
			console.log(`${message} is logged`)
			: console.log(`nothing is logged`)
	}

	warn(message) {
		this.getNumber() >= 1 ?
			console.log(`${message} is logged`)
			: console.log(`nothing is logged`)
	}

	error(message) {
		this.getNumber() >= 0 ?
			console.log(`${message} is logged`)
			: console.log(`nothing is logged`)
	}
}

const logger1 = new Logger("warn")


logger1.warn("Some warning message") // => "Some warning message" is logged
logger1.error("Some error message")  // => "Some error message" is logged
logger1.info("Some info message")    // => nothing is logged
logger1.debug("Some debug message")  // => nothing is logged

const logger2 = new Logger("debug")
logger2.warn("Some warning message") // => "Some warning message" is logged
logger2.error("Some error message")  // => "Some error message" is logged
logger2.info("Some info message")    // => "Some info message" is logged
logger2.debug("Some debug message")  // => "Some debug message" is logged 