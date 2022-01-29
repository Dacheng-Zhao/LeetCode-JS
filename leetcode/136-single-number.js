/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hashMap = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (hashMap.hasOwnProperty(nums[i])) {
            hashMap[nums[i]] = -1;
        } else {
            hashMap[nums[i]] = i;
        }
    }
    
    let keys = Object.keys(hashMap);
    let res = null;
    
    for (let j = 0; j < keys.length; j++) {
        if (hashMap[keys[j]] !== -1) {
            res = keys[j];
        }
    }
    return res
};