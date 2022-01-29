/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let res = '';
    let firstLen = num1.length - 1;
    let secondLen = num2.length - 1;
    let maxLen = Math.max(firstLen, secondLen);
    let carry = 0;
    
    while (maxLen >= 0) {
        let firstNum = 0;
        let secondNum = 0;
        if (firstLen >= 0) {
            firstNum = num1.charCodeAt(firstLen) - 48;
            firstLen -= 1;
        }
        if (secondLen >= 0) {
            secondNum = num2.charCodeAt(secondLen) - 48;
            secondLen -= 1;
        }
        let sum = firstNum + secondNum + carry;
        carry = Math.floor(sum / 10);
        let num = sum % 10;
        res = num + res;
        maxLen -= 1;
    }
    
    if (carry === 1) {
        res = 1 + res;
    }
    
    return res
};