/*
 * @lc app=leetcode id=697 lang=javascript
 *
 * [697] Degree of an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let res = 1;
    let hashMap = {};

    for (let i = 0; i < nums.length; i++) {
        if (hashMap.hasOwnProperty(nums[i])) {
            hashMap[nums[i]] += 1;
            res = Math.max(res, hashMap[nums[i]]);
        } else {
            hashMap[nums[i]] = 1;
        }
    }
    console.log(hashMap);
    return res
};
// @lc code=end

