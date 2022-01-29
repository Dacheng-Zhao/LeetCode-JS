/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if (numerator === 0) {
        return '0'
    }
    let res = '';
    if (numerator > 0 && denominator < 0 || numerator < 0 && denominator > 0) {
        res = '-' + res;
    }
    let divisor = Math.abs(numerator);
    let divident = Math.abs(denominator);
    let remainder = divisor % divident;
    
    if (remainder === 0) {
        res += divisor / divident;
        return res
    } 
    
    let hashMap = {};
    if (divisor < divident) {
        res += '0';
    } else {
        res += Number.parseInt(divisor / divident);
    }
    res += '.';
    while (remainder !== 0) {
        if (hashMap.hasOwnProperty(remainder)) {
            res = res.slice(0, hashMap[remainder]) + '(' + res.slice(hashMap[remainder]) + ')';
            break
        }
        hashMap[remainder] = res.length;
        remainder *= 10;
        if (remainder / divident < 1) {
            res += 0;
        } else {
            // note:  4.134234e-8 parseInt will return 4
            res += Number.parseInt(remainder / divident); 
        }
        remainder %= divident;
    }
    
    return res
};