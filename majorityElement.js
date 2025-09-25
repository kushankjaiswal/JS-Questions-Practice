var majorityElement = function (nums) {
  let count = 0,
    candidate = null;
  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }

    if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }
  return candidate;
};

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// var majorityElement = function (nums) {
//   let count = 0;
//   let el;

//   for (const i in nums) {
//     if (count == 0) {
//       count = 1;
//       el = nums[i];
//     } else if (nums[i] == el) {
//       count++;
//     } else {
//       count--;
//     }
//   }

//   let count1 = 0;

//   for (const i in nums) {
//     if (nums[i] == el) count1++;
//   }
//   if (count1 > nums.length / 2) {
//     return el;
//   }
//   return -1;
// };
