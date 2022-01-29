/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = Array(amount + 1).fill(amount + 1);
    coins = coins.sort((a, b) => a - b);
    dp[0] = 0;
    
    for (let i = 0; i <= amount; i++) {
        for(let j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
                dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]);
            } else {
                break
            }
        }
    }
    
    return dp[amount] > amount ? -1 : dp[amount]
};