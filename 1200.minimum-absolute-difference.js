/*
 * @lc app=leetcode id=1200 lang=javascript
 *
 * [1200] Minimum Absolute Difference
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b);
    let minDiff = Infinity;
    let res = [];
    for (let i = 1; i < arr.length; i++) {
        minDiff = Math.min(minDiff, arr[i] - arr[i - 1]);
    }

    for (let j = 1; j < arr.length; j++) {
        if (arr[j] - arr[j - 1] === minDiff) {
            res.push([arr[j - 1], arr[j]]);
        }
    }
    return res
};
// @lc code=end

