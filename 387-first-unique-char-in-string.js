/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if (s === null || s.length === 0) {
        return -1
    }
    
    let hashMap = {};
    
    for (let i = 0; i < s.length; i++) {
        if (hashMap.hasOwnProperty(s[i])) {
            hashMap[s[i]] = Infinity;
        } else {
            hashMap[s[i]] = i;
        }
    }
    
    let keysLen = Object.keys(hashMap).length;
    let res = Infinity;
    
    for (let i = 0; i < keysLen; i++) {
        res = Math.min(res, hashMap[Object.keys(hashMap)[i]]);
    }
    
    if (res === Infinity) {
        return -1
    } else {
        return res
    }
};