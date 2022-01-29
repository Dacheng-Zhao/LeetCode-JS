export class Solution {

    /**
     * searchRange
     *
     * @param A: an integer sorted array
     * @param target: an integer to be inserted
     * @return: a list of length 2, [index1, index2]
     */
    searchRange(A, target) {
      // write your code here
      let leftBound = -1;
      let rightBound = -1;
  
      const start = 0;
      const end = A.length;
      
      let left = start;
      let right = end;
  
      while (left + 1 < right) {
          const mid = Math.floor((left + right) / 2);
  
          if (A[mid] >= target) {
              right = mid;
          } else {
              left = mid;
          }
      }
      if (A[left] === target) {
          leftBound = left;
      }
      else if (A[right] === target) {
          leftBound = right;
      } else {
          return [-1, -1]
      }
  
      left = start;
      right = end;
  
      while (left + 1 < right) {
          const mid = Math.floor((left + right) / 2);
  
          if (A[mid] > target) {
              right = mid;
          } else {
              left = mid;
          }
      }
      if (A[right] === target) {
          rightBound = right;
      }
      else if (A[left] === target) {
          rightBound = left;
      }
  
      return [leftBound, rightBound]
    }
  
  }