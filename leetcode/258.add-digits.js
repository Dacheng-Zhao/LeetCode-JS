/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let numStr = num.toString();
    while (numStr.length > 1) {
        let temp = 0;
        for (let i = 0; i < numStr.length; i++) {
            let val = Number.parseInt(numStr[i]);
            temp += val;
        }
        numStr = '' + temp;
    }
    const res = Number.parseInt(numStr);
    return res
};
// @lc code=end

