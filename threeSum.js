const threeSum = function (nums) {
    let found = false;
    let arr = [];
    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length; j++) {

            for (let k = j + 1; k < nums.length; k++) {

                if (nums[i] + nums[j] + nums[k] == 0) {
                    found = true;
                    arr.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }
    if (!found) {
        return 'Not found'
    } else {
        return arr;
    }
};

threeSum([-1, 0, 1, 2, -1, -4])

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

