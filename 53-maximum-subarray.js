export class Solution {

    /**
     * maxSubArray
     *
     * @param nums: A list of integers
     * @return: A integer indicate the sum of max subarray
     */
    maxSubArray(nums) {
      // write your code here
      let currentMax = nums[0];
      let result = nums[0];
  
      for (let index = 1; index < nums.length; index++) {
          currentMax = Math.max(currentMax + nums[index], nums[index]);
          result = Math.max(result, currentMax);
      }
      return result
    }
  
  }

// DP solution
  export class Solution {

    /**
     * maxSubArray
     *
     * @param nums: A list of integers
     * @return: A integer indicate the sum of max subarray
     */
    maxSubArray(nums) {
      // write your code here
      const positionMax = [nums[0]];
      let result = nums[0];
  
      for (let index = 1; index < nums.length; index++) {
          positionMax[index] = Math.max(positionMax[index - 1] + nums[index], nums[index]);
          result = Math.max(result, positionMax[index]);
      }
  
      return result;
    }
  
  }