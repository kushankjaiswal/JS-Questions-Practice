var reverse = function (n) {
    var reverseN = 0;
    var sign = n < 0;
    n = Math.abs(n);
    // while (n) {
    reverseN = +String(n).split('').reverse().join('');
    // reverseN = reverseN*10 + (n % 10);
    // n = Math.floor(n/10);
    // }

    return reverseN > 0x7FFFFFFF ? 0 : sign ? -reverseN : reverseN;
};

console.log(reverse(-123.45484))


const isValid = function (s) {
    let tempArray = [];
    for (let i = 0; i < s.length; i++) {
        let character = s.charAt(i);

        if (character == "(" || character == "{" || character == "[") {
            tempArray.push(character);
        }
        else if ((character == ")" && tempArray[tempArray.length - 1] == "(") ||
            (character == "}" && tempArray[tempArray.length - 1] == "{") ||
            (character == "]" && tempArray[tempArray.length - 1] == "[")) {
            tempArray.pop();
        } else {
            return false;
        }
    }

    return tempArray.length ? false : true
}

console.log(isValid('(]'))




