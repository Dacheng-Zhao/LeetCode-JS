/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums === null || nums === undefined || nums.length === 0) {
        return 0
    }
    
    let maxToCurrent = nums[0];
    let minToCurrent = nums[0];
    let maxResult = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        let tempMax = maxToCurrent * nums[i];
        let tempMin = minToCurrent * nums[i];
        maxToCurrent = Math.max(tempMax, tempMin, nums[i]);
        minToCurrent = Math.min(tempMin, tempMax, nums[i]);
        maxResult = Math.max(maxToCurrent, minToCurrent, maxResult);
    }
    return maxResult
};