/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    words.sort();
    const wordSet = new Set(words);
    let res = '';
    
    for (let i = words.length - 1; i >= 0; i--) {
        let word = words[i];
        let valid = true;
        if (word.length >= res.length) {
            for (let j = word.length - 1; j >= 1; j--) {
                if (!wordSet.has(word.slice(0, j))) {
                    valid = false;
                    break;
                }
            }
        }
        if (valid && word.length >= res.length) {
            res = word
        }
    }
    return res
};
