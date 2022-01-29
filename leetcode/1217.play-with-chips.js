/*
 * @lc app=leetcode id=1217 lang=javascript
 *
 * [1217] Play with Chips
 */

// @lc code=start
/**
 * @param {number[]} chips
 * @return {number}
 */
var minCostToMoveChips = function(chips) {
    let even = 0;
    let odd = 0;

    for (let i = 0; i < chips.length; i++) {
        if (chips[i] % 2 === 0) {
            even += 1;
        } else {
            odd += 1;
        }
    }
    return Math.min(even, odd)
};
// @lc code=end

