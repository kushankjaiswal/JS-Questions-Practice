const iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);

for (const entry of iterable) {
    console.log(entry);
}

for (const [key, value] of iterable) {
    console.log(value);
}

const iterable1 = new Set([1, 1, 2, 2, 3, 3, 4, 5, 6, 6, 6]);
console.log(iterable1);
for (const value of iterable1) {
    console.log(value);
}

// Question 1
const person = {
    firstName: 'Syed',
    lastName: 'Sumair',
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

const abc = person.fullName;
console.log(abc)

// Question 2

// let b = a.map(el => el) //[1,2,3,4]

// let c = a.myMap(el => el)//[1,2,3,4]

//Solution
const a = [1, 2, 3, 4]

Array.prototype.mymap = function (callback) {
    const resultArray = [];
    for (let index = 0; index < this.length; index++) {
        resultArray.push(callback(this[index], index, this));
    }
    return resultArray;
}

const c = a.myMap(el => el);

console.log(c);

let count = 0;
function fn() {
  count++;
  if (count % 3 === 0) console.log('Hello World');
}
fn();
fn();
console.log('about to call for third time');
fn();







