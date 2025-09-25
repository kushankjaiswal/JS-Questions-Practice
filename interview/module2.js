// const nestedObject = {
//   a: {
//     b: {
//       c: 1,
//     },
//   },
//   d: 2,
// };

// const expectedOutput = { "a.b.c": 1, d: 2 };

// // flatten the nested object to have the expected output as dot concatenated strings
// const flattenObject = (obj, parentKey = "", result = {}) => {
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       const newKey = parentKey ? `${parentKey}.${key}` : key;

//       if (typeof obj[key] === "object" && obj[key] !== null) {
//         flattenObject(obj[key], newKey, result);
//       } else {
//         result[newKey] = obj[key];
//       }
//     }
//   }

//   return result;
// };

// console.log(flattenObject(nestedObject));

// myArray.reduce((acc, prev) => (acc += prev), 0);

// // myArray.myReduce(callback, initial_value);

// Array.prototype.myReduce = function (callback, initialValue) {
//   if (typeof callback !== "function") {
//     throw new Error("Callback Needed");
//   }
//   const arr = this;
//   let accumulator = initialValue;
//   let startIndex = 0;

//   if (accumulator === undefined) {
//     if (arr.length === 0) {
//       throw new Error("Reduce of empty array");
//     }

//     accumulator = arr[0];
//     startIndex = 1;
//   }

//   for (let i = startIndex; i < arr.length; i++) {
//     accumulator = callback(accumulator, arr[i], i, arr);
//   }

//   return accumulator;
// };

// const myArray = [1, 2, 3, 4, 5];
// const sum = myArray.myReduce((acc, curr) => {
//   return acc + curr;
// }, 0);

// console.log(sum);

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Argument must be an array"));
    }

    let results = [];
    let completed = 0;

    if (promises.length === 0) {
      return resolve([]);
    }

    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then((value) => {
          results[index] = value;
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject); // reject immediately on first error
    });
  });
}
