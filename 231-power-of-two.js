/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let power = 0;
    
    while (power < 31) {
        if (n === 1 << power) {
            return true
        }
        power += 1;
    }
    return false
};