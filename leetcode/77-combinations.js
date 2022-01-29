/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = [];
    DFS(1, [], n, k);
    return res
    
    function DFS(start ,temp, maxNum, len) {
        if (temp.length === len) {
            res.push(temp.slice());
            return
        }
        for (let i = start; i <= maxNum; i++) {
            temp.push(i);
            DFS(i+1, temp, maxNum, len);
            temp.pop();
        }
    }
};