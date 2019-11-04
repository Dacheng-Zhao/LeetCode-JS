/*
 * @lc app=leetcode id=1189 lang=javascript
 *
 * [1189] Maximum Number of Balloons
 */

// @lc code=start
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let hashMap = {};
    let res = Infinity;
    for (let i = 0; i < text.length; i++) {
        if ("balloon".indexOf(text[i]) !== -1) {
            if (!hashMap.hasOwnProperty(text[i])) {
                hashMap[text[i]] = 1;
            } else {
                hashMap[text[i]] += 1;
            }
        }
    }

    if (Object.keys(hashMap).length < 5) {
        return 0
    }

    for (let [key, val] of Object.entries(hashMap)) {
        if (key === "l" || key === "o") {
            val = Number.parseInt(val / 2);
        }
        res = Math.min(res, val);
    }

    if (res === Infinity) {
        return 0
    }

    return res
};
// @lc code=end

