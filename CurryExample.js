function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    }
}

// console.log(curry(a,b,c))
// console.log(curry(a)(b)(c));

function sum(a) {
    return function (b) {
        if (b) {
            return sum(a + b);
        }
        return a;
    }
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9)