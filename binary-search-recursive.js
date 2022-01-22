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
      const start = 0;
      const end = nums.length - 1;
  
      return this.binarySearch(nums, start, end, target);
    }
  
    binarySearch(nums, start, end, target) {
        if (start > end) {
            return -1;
        }
  
        const mid =Math.floor((start + end) / 2);
  
        if (nums[mid] === target) {
            return mid;
        }
  
        if (nums[mid] < target) {
            return this.binarySearch(nums, mid + 1, end, target);
        }
        return this.binarySearch(nums, start, mid - 1, target);
    }
  
  }