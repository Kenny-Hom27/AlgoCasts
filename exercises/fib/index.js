// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  let cache = {}

  return function(...args) {
    if (cache[args]) {
      return cache[args]
    }

    const result = fn.apply(this, args)
    cache[args] = result
    return result
  }
}

function fib(n) {
  if (n<2) {
    return n
  }

  return fib(n-1) + fib(n-2)
}

fib = memoize(fib)

// function fib(n, fibArray=[0,1]) {
//   if (fibArray.length > n) {
//     return fibArray[n]
//   }
//   fibArray.push(fibArray[fibArray.length-1] + fibArray[fibArray.length-2])
//   return fib(n, fibArray)
// }

// function fib(n) {
//   let fib = [0,1]
//
//   while (fib.length <= n) {
//     fib.push(fib[fib.length-1] + fib[fib.length-2])
//   }
//
//   return fib[n]
// }


module.exports = fib;
