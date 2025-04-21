
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let idx = 0
    for (let i=0; i < nums.length; i++) {
        if (nums[i]!==nums[i-1]) {
            nums[idx] = nums[i]
            idx++
        }
    }
    return idx
};