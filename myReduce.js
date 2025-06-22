const arr = [1, 2, 3, 4, 5];

// acc , curr, currentIndex, arr 


Array.prototype.myReduce = function (callback, initialValue) {
    let acc = initialValue;
    for (let i = 0; i < this.length; i++) {
        if (Object.hasOwn(this, i)) {
            acc = callback(acc, this[i], i, this);
        }
    }
    return acc;
};

const myReducedArr = [].myReduce((acc, curr) => { return acc + curr });

console.log(myReducedArr)

const a = [].reduce((a, c) => { return a + c });
console.log(a)