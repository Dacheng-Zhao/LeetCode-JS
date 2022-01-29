/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n <= 0) {
        return ""
    }

    let currVal = "1";
    while (n > 1) {
        let temp = "";
        let preVal = currVal[0];
        let count = 0;
        for (let i = 0; i < currVal.length; i++) {
            if (currVal[i] === preVal) {
                count += 1;
            } else {
                temp += count.toString() + preVal.toString();
                count = 1;
                preVal = currVal[i];
            }
        }
        if (count >= 1) {
            temp += count.toString() + preVal.toString();
        }
        n -= 1;
        currVal = temp;
    }
    return currVal
};
// @lc code=end

