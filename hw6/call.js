// # Task:

// Write a function duckCount that returns the number of arguments passed to it which have a property 'quack' defined directly on them. Do not match values inherited from prototypes.

// Example:

//     var notDuck = Object.create({quack: true})
//     var duck = {quack: true}
//     duckCount(duck, notDuck) // 1

// ## Arguments

//   * You will be passed 0-20 arguments. Each argument could be of any type with any properties. Some of these items will have a 'quack' property.

// ## Conditions

//   * Do not use any for/while loops or Array#forEach.
//   * Do not create any counter/accumulator variables.
//   * Do not create any unecessary functions e.g. helpers.

// ## Hint

//   * The `arguments` variable, available in every function, is an *Object* that quacks like an *Array*:

//     {
//       0: 'argument0',
//       1: 'argument1', // etc
//       length: 2
//     }

// ## Resources

//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#Array-like
//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments

function duckCount() {
  return Array.prototype.slice.call(arguments, 0).filter(function(a){
    return Object.prototype.hasOwnProperty.call(a,'quack');
  }).length
  // SOLUTION GOES HERE
}

module.exports = duckCount