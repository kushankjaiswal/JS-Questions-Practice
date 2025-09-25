// function waitForFewSeconds() {
//   let d = Date.now();
//   while (Date.now() - d >= 3000) {}
// }

// function myPromise(str) {
//   return new Promise((r) => r(str));
// }

// function main() {
//   console.log("Ant");

//   setTimeout(() => {
//     console.log("Bat");
//   }, 0);

//   myPromise("Cat")
//     .then((result) => {
//       console.log(result); //Cat
//       return myPromise("Dog");
//     })
//     .then((result) => {
//       console.log(result); //Dog
//     });

//   waitForFewSeconds();
//   console.log("Elephant");
// }

// main();

// //Ant

// const x = {
//   a: "Hello",
//   b: () => {
//     console.log(this.a);
//   },
//   c: function () {
//     console.log(this.a);
//   },
// };

// // What will be the output of the following? and the reason?
// x.b(); // undefined
// x.c(); // Hello

// console.log(sum(1)(2)(3)(4)(5)(6)()); //21

function sum(a) {
  let currentSum = a;
  function innerSum(b) {
    if (b !== undefined) {
      currentSum += b;
      return innerSum;
    } else {
      return currentSum;
    }
  }

  return innerSum;
}

// function sum(a) {
//   return function (b) {
//     if (b == undefined) {
//       return a;
//     }
//     return sum(a + b);
//   };
// }

console.log(sum(1)(2)(3)(4)(5)(6)());
