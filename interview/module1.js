console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("C");
    return Promise.resolve("D");
  })
  .then((res) => {
    console.log(res);
  });

queueMicrotask(() => {
  console.log("E");
});

(async () => {
  console.log("F");
  await null;
  console.log("G");
})();

setTimeout(() => {
  console.log("H");
  Promise.resolve().then(() => console.log("I"));
}, 0);

console.log("J");

// A
// F
// J
// C
// E
// G
// D
// B
// H
// I

const str1 = "{{(]])}}";
const str2 = "{{[[()]]}}";

function isBalanced(str) {
  const stack = [];
  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of str) {
    if (["(", "{", "["].includes(char)) {
      stack.push(char);
    } else if ([")", "}", "]"].includes(char)) {
      if (stack.pop() !== bracketMap[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isBalanced(str1));

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true
// Example 2:
// Input: s = "()[]{}"
// Output: true
// Example 3:
// Input: s = "(]"
// Output: false
// Example 4:
// Input: s = "([])"
// Output: true

// Constraints:
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

function isValid(s) {
  const arr = [];
  const mapBracket = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of s) {
    if (char in mapBracket) {
      const top = arr.length ? arr.pop() : "#";

      if (mapBracket[char] !== top) {
        return false;
      }
    } else {
      arr.push(char);
    }
  }

  return arr.length === 0; // true
}

const s = "(]";
console.log(isValid(s));
