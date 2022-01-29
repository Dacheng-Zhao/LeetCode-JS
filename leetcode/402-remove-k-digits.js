/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */

var removeKdigits = function(num, k) {

    let i = 0;
    while (i < num.length - 1 && k > 0) {
        if (i === 0 && num[i] === '0') {
            num = num.slice(0, i) + num.slice(i + 1);
        } else if (num[i] > num[i + 1]) {
            num = num.slice(0, i) + num.slice(i + 1);
            i--; k--;
        } else
            i++;
    }

    num = num.replace(/^0+/, '');
    return num.slice(0, num.length - k) || '0';
};
