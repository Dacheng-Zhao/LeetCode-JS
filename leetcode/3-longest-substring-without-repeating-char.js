/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s === null || s === undefined || s.length === 0) {
        return 0
    }
    
    let left = 0;
    let right = 0;
    let seen = {};
    let res = 0;
    
    while (right < s.length) {
        // if left is bigger than hashMap value, ignore since left already moved ahead
        if (seen.hasOwnProperty(s[right]) && seen[s[right]] >= left) {
            left = seen[s[right]] + 1;
        } else {
            res = Math.max(res, right - left + 1);
        }
        seen[s[right]] = right;
        right += 1;
    }
    return res
};
