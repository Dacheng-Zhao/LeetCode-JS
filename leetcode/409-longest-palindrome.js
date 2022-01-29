/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if (s === null || s.length === 0) {
        return 0
    }
    
    let hashSet = new Set();
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (hashSet.has(s[i])) {
            count += 1;
            hashSet.delete(s[i]);
        } else {
            hashSet.add(s[i]);
        }
    }
    
    let res = count * 2;
    
    if (hashSet.size) {
        res += 1;
    }
    
    return res
};