/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if (wordList.length === 0 || wordList.indexOf(endWord) === -1) {
        return 0
    }
    let visited = { beginWord: 1 };
    let queue = [beginWord];
    let count = 0;
    let wordListMap = {};
    
    for (let i = 0; i < wordList.length; i++) {
        wordListMap[wordList[i]] = 1;
    }
    
    while (queue.length) {
        count += 1;
        let queueLen = queue.length;
        for (let i = 0; i < queueLen; i++) {
            let nextNode = queue.shift();
            if (nextNode === endWord) {
                return count
            }
            let valid = validSet(nextNode, wordListMap);
            for (let j = 0; j < valid.length; j++) {
                if (visited[valid[j]] !== 1) {
                    queue.push(valid[j]);
                    visited[valid[j]] = 1;
                }
            }
        }  
    }
    return 0
};

let validSet = function(transWord, wordListMap) {
    let validList = [];
    let transWordLen = transWord.length;
    for (let i = 0; i < transWordLen; i++) {
        let charCode = transWord.charCodeAt(i);
        let firstPart = transWord.slice(0, i);
        let secondPart = transWord.slice(i+1);
        for (let j = 97; j < 123; j++) {
            if (j === charCode) {
                continue
            }
            let midPart = String.fromCharCode(j);
            let newWord = firstPart + midPart + secondPart;
            if (wordListMap[newWord] === 1) {
                validList.push(newWord);
            }
        }
    }
    return validList
}

