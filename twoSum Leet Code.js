
// const secondMax =  (nums) => { 
//     const settedObj = new Set([...nums]);
//     settedObj

//     const newNums = [];
//     settedObj.forEach((x) => {
//         newNums.push(x);
//     })
//     newNums

//     const max = Math.max.apply(null, newNums); // get the max of the array
//     max
//     newNums.splice(newNums.indexOf(max), 1); // remove max from the array
//     return Math.max.apply(null, newNums); // get the 2nd max
// };

// console.log(secondMax([2,3,6,6,5]))



const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1 in nums) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
    return 'Not found'
}

const nums = [3, 2, 4]

const target = 6

console.log(twoSum(nums, target));


