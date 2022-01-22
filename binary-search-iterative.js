export class Solution {

    /**
     * findPosition
     *
     * @param nums: An integer array sorted in ascending order
     * @param target: An integer
     * @return: An integer
     */
    findPosition(nums, target) {
      // Write your code here
      if (!nums || nums.length === 0) {
          return -1;
      }
  
      let start = 0;
      let end = nums.length - 1;
  
      while (start + 1 < end) {
          const mid = Math.floor((start + end) / 2);
  
          if (nums[mid] < target) {
              start = mid;
          } else {
              end = mid;
          }
      }
  
      if (nums[start] === target) {
          return start;
      }
      if (nums[end] === target) {
          return end;
      }
      return -1;
    }
  
  }