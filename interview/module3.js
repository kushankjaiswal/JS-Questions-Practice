// function getDataWithCallback(url, callback) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Fetching data...");
//       resolve("Data from " + url);
//     }, 1000);
//   });
// }

// const urls = [
//   "https://api.example.com/data",
//   "https://api.example.com/data2",
//   "https://api.example.com/data3",
// ];

// async function fetchData() {
//   const data = await getDataWithCallback(
//     "[https://api.example.com/data](https://api.example.com/data)"
//   );
//   console.log(data);
// }

// fetchData();

// Promise.all(urls.map((url) => getDataWithCallback(url)))
//   .then((results) => {
//     console.log(`All Results Fetched: ${results}`);
//   })
//   .catch((error) => {
//     console.error(`Error: ${error}`);
//   });

//

function memoize(fn) {
  const cache = {}; // map object[5: 2500, 7: 49,]

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("Returning from Cache", key);
      return cache[key];
    }
    console.log("Not from Cache Logic");
    const res = fn(...args);
    cache[key] = res;

    return res;
  };
}

// heavy computation function
function multiply(n) {
  return n * n;
}

const memoizeResult = memoize(multiply);

console.log(memoizeResult(50));
console.log(memoizeResult(50));
console.log(memoizeResult(7));
console.log(memoizeResult(7));

var a = 1;

function outer() {
  var b = 2;

  function inner() {
    var c = 3;
    console.log(a);
    console.log(b);
    console.log(c);
  }

  inner();
  console.log(c); // what is the expected output?
}

outer();

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
