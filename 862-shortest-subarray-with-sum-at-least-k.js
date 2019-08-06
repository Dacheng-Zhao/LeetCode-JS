/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var shortestSubarray = function(A, K) {
    let ALen = A.length;
    let sumArray = Array(ALen).fill(0);
    
    for (let i = 0; i < ALen; i++) {
        sumArray[i+1] = sumArray[i] + A[i];
    }
    
    let queue = [];
    let res = ALen + 1;
    
    for (let j = 0; j < ALen + 1; j++) {
        while (queue.length && sumArray[j] - sumArray[queue[0]] >= K) {
            res = Math.min(res, j - queue.shift());
        }
        while (queue.length && sumArray[j] < sumArray[queue[queue.length - 1]]) {
            queue.pop();
        }
        queue.push(j);
    }
    if (res === ALen + 1) {
        return -1
    } else {
        return res
    }
};
