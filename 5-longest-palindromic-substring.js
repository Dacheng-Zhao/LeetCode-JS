/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s === null || s.length === 0) {
        return ''
    }
    let res = '';
    for (let i = 0; i < s.length; i++) {
        let sub1 = subPalindrome(s, i, i);
        if (sub1.length > res.length) {
            res = sub1;
        }
        let sub2 = subPalindrome(s, i, i+1);
        if (sub2.length > res.length) {
            res = sub2;
        }
    }
    return res
};

let subPalindrome = function(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left -= 1;
        right += 1;
    }
    return s.substring(left+1, right)
}






/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s === null || s.length === 0) {
        return ''
    }
    
    let res = '';
    let len = s.length;
    let dp = new Array(len).fill().map(val => val = new Array(len).fill(false));
    
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j >= 0; j--) {
            if (s[i] === s[j] && (i - j < 2 || dp[i-1][j+1])) {
                dp[i][j] = true
            }
            if (dp[i][j] && (i - j + 1) > res.length) {
                res = s.substring(j, i + 1);
            }
        }
    }
    return res
};
