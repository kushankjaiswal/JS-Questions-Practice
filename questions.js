function createBase(x) {
    function inner(y) {
        return x + y
    }
    return inner;
}

var addSix = createBase(6); 
console.log(addSix(21));

const arr = [4, 10, 2, 6, 3];

function rangeFinder(arr) {
    let temp = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
        for (let j = arr[2]; j <= arr[3]; j++) {
            if (i === j) {
                temp.push(i);
            }
        }
    }
    return temp.length === arr[4] ? true : false;
}

console.log(rangeFinder(arr))