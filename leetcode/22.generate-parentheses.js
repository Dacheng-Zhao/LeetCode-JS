/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];

    let DFS = function(n, temp, left, right) {
        if (temp.length === n * 2) {
            res.push(temp);
        }
        if (left < n) {
            DFS(n, temp + '(', left + 1, right);
        }
        if (right < left) {
            DFS(n, temp + ')', left, right + 1);
        }
    }
    DFS(n, '', 0, 0);
    return res
};
// @lc code=end

