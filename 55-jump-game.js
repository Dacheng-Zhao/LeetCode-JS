/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums === null || nums === undefined || nums.length === 0) {
        return false
    }
    
    let numsLen = nums.length;
    let maxReach = 0;
    for (let i = 0; i < numsLen; i++) {
        if (i <= maxReach) {
            maxReach = Math.max(maxReach, i + nums[i]);
        }
    }
    return maxReach >= numsLen - 1
};