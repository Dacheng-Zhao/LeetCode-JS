/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let left = 0;
    let right = chars.length;
    let count = 0;
    let index = 0;
    
    while (left < right) {
        let count = 0;
        let currentChar = chars[left];
        while (left < right && chars[left] === currentChar) {
            left += 1;
            count += 1;
        }
        chars[index] = currentChar;
        index += 1;
        
        if (count > 1) {
            let temp = count.toString();
            for (let i = 0; i < temp.length; i++) {
                chars[index + i] = temp[i];
            }
            index += temp.length;
        }
    }
    return index
};
