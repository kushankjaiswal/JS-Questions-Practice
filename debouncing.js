// Debouncing

// In the debouncing technique, no matter how many times the user fires the event, the attached function will be executed only after the specified time once the user stops firing the event.

function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}
function saveInput() {
    console.log('Saving data');
}
const processChange = debounce(() => saveInput());

// const debounce = (func, delay) => {
//   let timeoutId;
//   return (...args) => {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// };

  //It can be used on an input 
//   <input type="text" onkeyup="processChange()" />

  //or a button
//   <button onclick="processChange()">Click me</button>

// Throttling

// Throttling is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval.