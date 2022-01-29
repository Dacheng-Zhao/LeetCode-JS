/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if (nums === undefined || nums === null || nums.length < 4) {
        return []
    }
    
    nums.sort((a, b) => a - b);
    let res = [];
    
    for (let i = 0; i < nums.length-3; i++) {
        if (i !== 0 && nums[i] === nums[i-1]) {
            continue
        }
        for (let j = i + 1; j < nums.length-2; j++) {
            if (j !== i + 1 && nums[j] === nums[j-1]) {
                continue
            }
            let left = j + 1;
            let right = nums.length - 1;
            let temp = target - nums[i] - nums[j];
            while (left < right) {
                if (nums[left] + nums[right] === temp) {
                    res.push([nums[i], nums[j], nums[left], nums[right]]);
                    left += 1;
                    right -= 1;
                    while (left < right && nums[left] === nums[left-1]) {
                        left += 1;
                    }
                    while (left < right && nums[right] === nums[right+1]) {
                        right -= 1;
                    }
                } else if (nums[left] + nums[right] > temp) {
                    right -= 1;
                } else {
                    left += 1;
                }
            }
        }
    }
    return res
};