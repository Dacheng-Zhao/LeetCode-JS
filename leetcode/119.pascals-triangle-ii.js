/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let res = [1];
    for (let i = 1; i < rowIndex + 1; i++) {
        for (let j = i; j >= 1; j--) {
            if (j === i) {
                res[j] = 1;
            } else {
                res[j] += res[j - 1];
            }
        }
    }
    return res
};
// @lc code=end

