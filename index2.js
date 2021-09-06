// var x= 1;
// a();
// b();
// console.log(x);

// function a() {
//     var x = 10;
//     console.log(x);
// }

// function b() { 
//     var x = 100;
//     console.log(x);
// }

// for (let i = 1; i < 5; i++) {
//     setTimeout(() => console.log(i), 0)
//     // console.log(i);
// }

// var a = "Kushank";
// var a
// console.log(a);

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let c;
// c = a.filter(x => x % 2 == 0);

// console.log(c);


// function getFrequency(string) {
//     let freq = {};
//     for (let i = 0; i < string.length; i++) {
//         let character = string.charAt(i);
//         if (freq[character]) {
//             freq[character]++;
//         } else {
//             freq[character] = 1;
//         }
//     }

//     return freq;
// };

// getFrequency('kushank');

// console.log(getFrequency('kushank'));

// function getFunc() {
//     var a = 7;
//     return function(b) {
//         alert(a+b);
//     }
// }
// var f = getFunc();
// f(5);


// (((abc)) {abc[feddd]})

// ((abc)}{def})

// (((abc)){abc[feddd)]}

// const string = '((()'

// Output
// ()

// const arr = ['(', ')']

// function parenthesis(string) {
//     for (let i = 0; i < string.length; i++) {
//         if (arr[0] == string.charAt(i)) {

//         }
//     }
// }


// var a = 'hello'
// var b = a;
// b = 'hello world'

// console.log('a', a);

// function test1() {
//     var a = 1;
//     alert(a);

//     if (true) {
//         var a;
//         alert(a);
//         a = 2;
//     }
//     alert(a);
// }

// test1();

// let j;
// for (j = 0; j < 3; j++) {
//     setTimeout(() => {
//         console.log(j);
//     }, 1000);
// }

// function getFrequency(arr) {
//     let freq = {};
//     for (let i = 0; i < arr.length; i++) {
//         let character = arr[i];
//         if (freq[character]) {
//             freq[character]++;
//         } else {
//             freq[character] = 1;
//         }
//     }

//     return freq;
// };

// const output = getFrequency([0, 4, 0, 3, 0, 2, 0, 1, 4, 2, 4, 0]);

// console.log(output);

// 1st Method

function sortByFrequency(array) {
    var frequency = {};
    var sortAble = [];
    var newArr = [];

    array.forEach((value) => {
        if (value in frequency)
            frequency[value] = frequency[value] + 1;
        else
            frequency[value] = 1;
    });

    // console.log('frequency', frequency);

    for (var key in frequency) {
        sortAble.push([key, frequency[key]])
    }

    // console.log('sortAble', sortAble);

    sortAble.sort((a, b) => {
        return a[1] - b[1]
    })

    sortAble.forEach((obj) => {
        for (var i = 0; i < obj[1]; i++) {
            newArr.push(obj[0]);
        }
    })




    return newArr;
}

// 2nd Method


// function sortByFrequency(arr) {
//     const frequency = {};
//     arr.forEach(item => {
//         frequency[item] = (frequency[item] || 0) + 1;
//     });
//     const sortable = arr.map(item => [item, frequency[item]]);
//     sortable.sort((a, b) => {
//         if (a[1] === b[1]) return b[0] - a[0];
//         return a[1] - b[1];
//     });
//     return sortable.map(s => s[0]);
// }
const output = sortByFrequency([8, 7, 8, 3, 8, 2, 8, 1, 7, 2, 7, 8]);

// console.log('Answer---->>> ', output)


// Comparison of two objects
const obj1 = {
    1: 'Kushank',
    2: 'Jaiswal',
    3: 'aws'
}

const obj2 = {
    1: 'Kushank',
    2: 'Jaiswal',
    3: 'def'
}

const isEqual = (obj1, obj2) => {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }

    for (let i of Object.keys(obj1)) {
        if (obj1[i] !== obj2[i]) {
            return false;
        }
    }

    return true;
}

// isEqual(obj1, obj2)

// console.log(isEqual(obj1, obj2))

// console.log(Object.keys(obj1)[0]);

// const a = [1, 2, 3, 4]

// Array.prototype.mymap = function (callback) {
//     const resultArray = [];
//     for (let index = 0; index < this.length; index++) {
//         resultArray.push(callback(this[index], index, this));
//     }
//     return resultArray;
// }

// const c = a.myMap(el => el);

// console.log(c);

// (function () {
//     b = 3;
//     var a = b;
// })();

// console.log("a defined ? " + (typeof a !== 'undefined') + typeof a);
// console.log("b defined ? " + (typeof b !== 'undefined') + typeof b); 


var a = 'hello!';

first();

function first() {

    var b = 'Hi!';

    second();

    function second() {

        var c = 'hey!';
        console.log(b);
        third();

    }
}

function third() {
    var d = 'suhas';
    console.log(a + b + c + d);
}