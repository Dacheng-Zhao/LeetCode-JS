/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (nums === null || nums === undefined || nums.length === 0) {
        return []
    }
    
    let hashMap = {};
    
    for (let i = 0; i < nums.length; i++) {
        let temp = target - nums[i];
        if (hashMap.hasOwnProperty(temp)) {
            return [hashMap[temp], i]
        } else {
            hashMap[nums[i]] = i;
        }
    }
    return []
};