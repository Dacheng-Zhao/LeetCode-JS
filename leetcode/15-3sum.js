/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums === null || nums === undefined || nums.length < 3) {
        return []
    }
    let res = [];
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length; i++) {
        if (i !== 0 && nums[i] === nums[i-1]) {
            continue
        }
        let target = -nums[i];
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            if (nums[left] + nums[right] > target) {
                right -= 1;
            } else if (nums[left] + nums[right] < target) {
                left += 1;
            } else {
                res.push([nums[i], nums[left], nums[right]]);
                left += 1;
                right -= 1;
                while (left < right && nums[left] === nums[left-1]) {
                    left += 1;
                }
                while (left < right && nums[right] === nums[right+1]) {
                    right -= 1;
                }
            }
        }
    }
    return res
};
