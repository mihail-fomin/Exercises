// .bind example
function greet(greeting, name) {
  console.log(greeting + ', ' + name)
}

const sayHelloTo = greet.bind(null, 'Hello')
sayHelloTo('John') // "Hello, John"

// POLYFILL
function bindPolyfill(context, ...args) {
  const fn = this

  return function (...newArgs) {
    return fn.apply(
      context, // bind context
      args.concat(newArgs) // join args
    )
  }
}
