/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let slow = 0;
    let fast = 0;
    let sum = 0;
    let res = Infinity;
    
    while (fast < nums.length) {
        sum += nums[fast];
        fast += 1;
        
        while (sum >= s) {
            res = Math.min(res, fast - slow);
            sum -= nums[slow];
            slow += 1;
        }
    }
    if (res === Infinity) {
        return 0
    } else {
        return res
    }
};
