/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }
    
    let tempS = s.split('').sort().join('');
    let tempT = t.split('').sort().join('');
    return tempS === tempT
};