/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if (grid === null || grid === undefined || grid.length === 0 || grid[0].length === 0) {
        return null
    }
    
    let rowLen = grid.length;
    let colLen = grid[0].length;
    let dp = Array(rowLen).fill().map(() => Array(colLen).fill(0));
    dp[0][0] = grid[0][0];
    
    for (let i = 1; i < colLen; i++) {
        dp[0][i] = grid[0][i] + dp[0][i-1];
    }
    
    for (let i = 1; i < rowLen; i++) {
        dp[i][0] = grid[i][0] + dp[i-1][0];
    }
    
    for (let i = 1; i < rowLen; i++) {
        for (let j = 1; j < colLen; j++) {
            dp[i][j] = grid[i][j] + Math.min(dp[i-1][j], dp[i][j-1])
        }
    }
    return dp[rowLen-1][colLen-1]
};