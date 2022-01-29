/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    let patternHashMap = {};
    let patterCount = 1;
    let patterNum = '';
    let res = [];
    for (let i = 0; i < pattern.length; i++) {
        if (!patternHashMap.hasOwnProperty(pattern[i])) {
            patterNum += patterCount;
            patternHashMap[pattern[i]] = patterCount;
            patterCount += 1;
        } else {
            patterNum += patternHashMap[pattern[i]];
        }
    }

    words.forEach(word => {
         if (convertToNum(word) === patterNum) {
             res.push(word)
         }
    });
    
    return res
    
    function convertToNum(word) {
        if (word.length !== pattern.length) {
            return false
        }
        let wordMap = {};
        let wordCount = 1;
        let wordPattern = '';
        for (let i = 0; i < word.length; i++) {
            if (!wordMap.hasOwnProperty(word[i])) {
                wordPattern += wordCount;
                wordMap[word[i]] = wordCount;
                wordCount += 1;
            } else {
                wordPattern += wordMap[word[i]];
            }
        }
        return wordPattern
    }
};