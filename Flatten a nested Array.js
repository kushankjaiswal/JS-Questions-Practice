const ary = [1, 2, 3, [4, [5, [6]]]];

function abc(arr) {
    const value = arr.flatMap(x => {
        let b = []
        if (Array.isArray(x)) {
            b = b.concat(abc(x))
        }
        else {
            b.push(x)
        }
        return b;
    })
    return value
}

console.log(abc(ary))

let FlatArray = [1, 2, 3, [4, [5, [6]]]].reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);

FlatArray

function FlattenArray(ary) {
    const FlatArray = ary.reduce((acc, item) => {
        if (Array.isArray(item)) {
            acc = acc.concat(FlattenArray(item));
        } else {
            acc.push(item);
        }
        return acc;
    }, []);

    return FlatArray;
}

console.log(FlattenArray(ary))

const numArr = [1, [2, [3], 4, [5, 6, [7]]]];

function flatten(numArr) {
    return numArr.flat(Infinity)
}


console.log(flatten(numArr))

const res = [];
function flat(arr) {
    if(!Array.isArray(arr)){
        res.push(arr);
        return;
    }

    for(const a of arr) {
        flat(a)
    }
    return res;
}

console.log(flat([1, 2, 3, [4, [5, [6]]]]))