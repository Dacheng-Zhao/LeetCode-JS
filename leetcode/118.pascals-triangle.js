/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [];

    for (let i = 0; i < numRows; i++) {
        res[i] = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                res[i][j] = 1;
            } else {
                res[i][j] = res[i - 1][j - 1] + res[i - 1][j]
            }
        }
    }
    return res
};
// @lc code=end

