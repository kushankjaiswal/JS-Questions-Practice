// function outer() {
//     var a = 10;
//     function inner() {
//         console.log(a);
//     }
//     return inner;
// }
// var close = outer();
// close();


// function adderFn(x) {
//     return function(y) {
//         return x + y;
//     };
// }

// var add5 = adderFn(5);
// var add10 = adderFn(10);

// console.log(add5(5));
// console.log(add10(10));

// foo();

// var foo = function() {
//     console.log("bar");
// }

// bar();

// function bar() {
//     console.log("foo");
// }

var i = 0;
for (i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100)
}

// var a = 10;
// var b = 20;
// var c = 30; 
// {   
//     let a = 50;
//     const b = 60;
//     var c = 70;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
    console.log("document is ready");
  });
  
  
  $(window).load(function() {
    // executes when complete page is fully loaded, including all frames, objects and images
    console.log("window is loaded");
  });