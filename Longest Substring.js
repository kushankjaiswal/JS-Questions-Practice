const lengthOfLongestSubstring = (s) => {
    let arr = [];
    let brr = [];
    const f1 = (i, s) => {
        for (let i in s) {
            if (!arr.length) {
                // console.log(s.charAt(0))
                arr.push(s.charAt(i))
            }
            if (!arr.includes(s.charAt(i))) {
                arr.push(s.charAt(i));
                console.log(i)
                break;
            }
            console.log(i)
            return i;
        }
        f1(i++);
    }
    f1(i = 0, s);

    return arr;

};

console.log(lengthOfLongestSubstring("pwwkew"))