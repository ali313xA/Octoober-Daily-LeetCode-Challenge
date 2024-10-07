/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
// 
var canArrange = function(arr, k) {
    const remainderCount = new Array(k).fill(0);

    // Step 1: Count the frequency of each remainder when divided by k
    for (let num of arr) {
        let remainder = ((num % k) + k) % k; // To handle negative numbers
        remainderCount[remainder]++;
    }

    // Step 2: Check if each remainder can form valid pairs
    // Remainder 0 case: must have an even count
    if (remainderCount[0] % 2 !== 0) {
        return false;
    }

    // Other remainders: check if count of remainder i matches remainder (k - i)
    for (let i = 1; i <= Math.floor(k / 2); i++) {
        if (remainderCount[i] !== remainderCount[k - i]) {
            return false;
        }
    }
    return true;
};
