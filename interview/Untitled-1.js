//Debounce Function

const debounce = (func, delay) => {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

function sum(a) {
  return (b) => {
    if (b !== undefined) return sum(a + b);
    return a;
  };
}

console.log(sum(1)(2)(3)(4)(5)(6)());

// let FlatArray = [1, 2, 3, [4, [5, [6]]]].reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
const ary = [1, 2, 3, [4, [5, [6]]]];

// const res = [];
// function flat(ary) {
//     if(!Array.isArray(ary)) {
//         res.push(ary);
//         return;
//     }

//     for(let a of ary) {
//         flat(a)
//     }

//     return res;
// }

console.log(ary.flat(Infinity));

// const debounce = (func, delay) => {
//   let timeoutId;
//   return (...args) => {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// };
