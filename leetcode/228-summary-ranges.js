/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (nums === null || nums === undefined || nums.length === 0) {
        return []
    }
    
    let count = 1;
    let result  = [];
    let start = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i-1] === 1) {
            count += 1;
        } else {
            if (count >= 2) {
                result.push(start + '->' + nums[i-1]);
                start = nums[i];
                count = 1;
            } else {
                result.push('' + start);
                start = nums[i];
                count = 1;
            }
        }
    }
    if (count === 1) {
        result.push('' + start);
    } else {
        result.push(start + '->' + nums[nums.length-1])
    }
    return result
};