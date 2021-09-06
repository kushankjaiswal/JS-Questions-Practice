const arr = [13, 2, 0, 1, 23, 0, 0, 34, 42, 0, 12, 0, 12, 0, 2, 0, 5, 6];

function abc(arr) {
    let b = [];
    let i = 0;
    while (i < arr.length) {
        if (arr[i] == 0) {
            arr.splice(i, 1);
            b.push(0);
        } 
        else {
            i++;
        }
        // i++;
    }

    return [...arr, ...b];

    let b = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            arr.splice(i, 1);
            b.push(0);
        }
    }
    return [...arr, ...b];
}

console.log(abc(arr))


// Remove Duplicates

// function newArray(arr) {
//     let b = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!b.includes(arr[i])) {
//             b.push(arr[i]);
//         }

//     }
//     return b;
// }

// console.log(newArray(arr))

// const duplicatesRemoved = arr.filter((val, index) => arr.indexOf(val) === index)

// console.log(duplicatesRemoved)

const fruits = ['guava', 'mango', 'kiwi'];

for (let fruit of fruits) {
    console.log(fruit);
}

//Counting instances(frequency) of values in an object
const numbers = [13, 2, 0, 1, 23, 0, 0, 34, 42, 0, 12, 0, 12, 0, 2, 0, 5, 6]
const string = 'kushank'

const frequency = numbers.reduce((accumulator, currentValue) => {
    if (currentValue in accumulator) {
        accumulator[currentValue]++
    }
    else {
        accumulator[currentValue] = 1
    }
    return accumulator
}, {})

frequency

function factorial(n){
    //base case
    if(n == 0 || n == 1){
        return 1;
    //recursive case
    }else{
        return n * factorial(n-1);
    }
}

factorial(4)

function getFrequency(arr) {
    let freq = {};
    for (let i = 0; i < arr.length; i++) {
        let character = arr[i];
        if (freq[character]) {
            freq[character]++;
        } else {
            freq[character] = 1;
        }
    }

    return freq;
};

const output = getFrequency([0, 4, 0, 3, 0, 2, 0, 1, 4, 2, 4, 0]);