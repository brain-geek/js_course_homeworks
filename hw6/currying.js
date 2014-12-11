// # Task

// In this challenge, we're going to implement a 'curry' function for an arbitrary number of arguments.

// curryN will take two parameters:

//   * fn: The function we want to curry.
//   * n: Optional number of arguments to curry. If not supplied, `curryN` should use the fn's arity as the value for `n`.

// ## Example

//     function add3(one, two, three) {
//       return one + two + three
//     }

//     var curryC = curryN(add3)
//     var curryB = curryC(1)
//     var curryA = curryB(2)
//     console.log(curryA(3)) // => 6
//     console.log(curryA(10)) // => 13

//     console.log(curryN(add3)(1)(2)(3)) // => 6

// ## Conditions

//   * Do not use any for/while loops or Array#forEach.

// ## Hint

//   * You can detect the number of expected arguments to a function (it's arity) by checking a function's .length property.


    function curryN(fn, n) {
      if (n == null) {
        n = fn.length
      }

      return function(arg){
        if (n == 1) return fn(arg);

        return curryN(fn.bind(null, arg), n-1);
      }
    }

    module.exports = curryN

