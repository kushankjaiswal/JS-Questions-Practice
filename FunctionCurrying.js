// Currying is a technique of evaluating function with multiple arguments, 
// into sequence of functions with single argument.In other words, when a function, 
// instead of taking all arguments at one time, takes the first one 
// and return a new function that takes the second one and returns a new function which takes the third 

//Function Currying by bind method

let multiply = function (x,y) {
    console.log(x*y);
}

let multiplyByTwo = multiply.bind(this, 2)
multiplyByTwo(3)

//Function Currying by Closures

let multiply = function (x) {
    return function (y) {
        console.log(x * y)
    }
}

let multiplyByThree = multiply(10)
multiplyByThree(5);