/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums === undefined || nums === null || nums.length === 0) {
        return null
    }
    
    let start = 0;
    let end = nums.length - 1;
    
    while (start + 1 < end) {
        let mid = start + Number.parseInt((end - start) / 2);
        if (nums[mid] >= nums[end]) {
            start = mid;
        } else {
            end = mid;
        }
    }
    return Math.min(nums[end], nums[start])
};