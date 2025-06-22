const twoSum = (nums, target) => {
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1 ; j< nums.length; j++) {
    //         if (nums[i] + nums[j] == target) {
    //             return [i, j]
    //         }
    //     }
    // }
    // return 'Not found'
    const len = nums.length;
    const map = new Map();

    for (let i = 0; i < len; i++) {
        const more = target - nums[i];
        if (map.has(more)) {
            return [map.get(more), i];
        }
        map.set(nums[i], i);
    }

    return [nums[i], i]
}

const nums = [3, 2, 4]

const target = 6

console.log(twoSum(nums, target));


const sentence = "hello world hello map";
const wordMap = new Map();

for (const word of sentence.split(" ")) {
    wordMap.set(word, (wordMap.get(word) || 0) + 1);
}

wordMap.forEach((count, word) => {
    console.log(`${word}: ${count}`);
});
