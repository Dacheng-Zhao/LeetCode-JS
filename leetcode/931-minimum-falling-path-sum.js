/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function(A) {
    let len = A.length;
    let dp = new Array(len).fill().map(() => new Array(len).fill(0));
    
    for (let i = 0; i < len; i++) {
        dp[0][i] = A[0][i];
    }
    
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < len; j++) {
            let temp = [];
            if (dp[i-1][j-1]) {
                temp.push(dp[i-1][j-1] + A[i][j]);
            }
            temp.push(dp[i-1][j] + A[i][j]);
            if (dp[i-1][j+1]) {
                temp.push(dp[i-1][j+1] + A[i][j]);
            }
            dp[i][j] = Math.min(...temp);
        }
    }
    return Math.min(...dp[len-1]);
};