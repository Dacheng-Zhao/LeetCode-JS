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


/**
 * @param {string} s
 * @return {string}
 */
 const longestPalindrome = function(s) {
    let longestCount = 0;
    let result = '';
    for (let index = 0; index < s.length; index++) {
        const oddSubstring = findPalindrom(s, index, index);
        const evenSubstring = findPalindrom(s, index, index + 1);
        if (oddSubstring.length > longestCount) {
            longestCount = oddSubstring.length;
            result = oddSubstring;
        }
        if (evenSubstring.length > longestCount) {
            longestCount = evenSubstring.length;
            result = evenSubstring;
        }
    }
    return result;
};
    
const findPalindrom = function(s, start, next) {
    while (start >= 0 && next < s.length) {
        if (s[start] === s[next]) {
            start -= 1;
            next += 1;
        } else {
            break;
        }
    }
    return s.substring(start + 1, next);
}   


/**
 * @param {string} s
 * @return {string}
 */
 const longestPalindrome = function(s) {
    const dp = new Array(s.length).fill().map(val => new Array(s.length).fill(false));
    let maxSubstringStart = 0;
    let maxSubstringLen = 1;
    let maxSubstring = '';
    for (let index = 0; index < s.length; index++) {
        dp[index][index] = true;
    } 
    
    for (let end = 0; end < s.length; end++) {
        for (let start = end - 1; start >= 0; start--) {
            if (s[start] === s[end]) {
                if (end - start <= 1 || dp[start + 1][end - 1]) {
                    dp[start][end] = true;
                    if (end - start + 1 > maxSubstringLen) {
                        maxSubstringLen = end - start + 1;
                        maxSubstringStart = start;  
                    }
                }
            }
           
        }
    }
    maxSubstring = s.substring(maxSubstringStart, maxSubstringStart + maxSubstringLen);
    return maxSubstring;
};
