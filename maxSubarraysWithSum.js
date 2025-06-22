function maxSubarraysWithSum(arr, x) {
    let prefixSum = 0;
    let sumIndex = { 0: -1 };  // initialize base case
    let result = [];
    let lastUsedIndex = -1;

    for (let i = 0; i < arr.length; i++) {
        prefixSum += arr[i];

        const target = prefixSum - x;
        if (target in sumIndex) {
            const start = sumIndex[target] + 1;
            if (start > lastUsedIndex) {
                result.push(arr.slice(start, i + 1));
                lastUsedIndex = i;
            }
        }

        // Always update prefix sum position
        sumIndex[prefixSum] = i;
    }

    // Output
    console.log(`Total subarrays: ${result.length}`);
    result.forEach(sub => console.log(sub));
    return result;
}

// Example:
const arr = [1, 2, 3, 0, 3, 2, 1, 1];
const x = 6;
maxSubarraysWithSum(arr, x);
