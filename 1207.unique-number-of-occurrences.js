/*
 * @lc app=leetcode id=1207 lang=javascript
 *
 * [1207] Unique Number of Occurrences
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let hashMap = {};
    let uniqueMap = {};
    for (let i = 0; i < arr.length; i++) {
        if (!hashMap.hasOwnProperty(arr[i])) {
            hashMap[arr[i]] = 1;
        } else {
            hashMap[arr[i]] += 1;
        }
    }

    for (let [key, value] of Object.entries(hashMap)) {
        if (uniqueMap.hasOwnProperty(value)) {
            return false
        } else {
            uniqueMap[value] = 0;
        }
    }
    return true
};
// @lc code=end

