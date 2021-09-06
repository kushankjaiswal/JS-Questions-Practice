function getGrouped(words) {
    const arr = words.split('');
    let index;
    const freq = arr.reduce((accumulator, currentValue) => {
        if (currentValue in accumulator) {
            accumulator[currentValue] = accumulator[currentValue] + 1
        }
        else {
            accumulator[currentValue] = 1
        }
        // console.log(accumulator)
        return accumulator
    }, {});

    for (let i of Object.keys(freq)) {
        let temp = [];
        if (freq[i] === 1) {
            temp.push(i);
            // return temp;
            return temp.length ? arr.indexOf(temp[0]) + 1 : -1;
        }

        
    }
}

console.log(getGrouped('statistics'))