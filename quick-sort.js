export class Solution {

    /**
     * sortIntegers2
     *
     * @param A: an integer array
     * @return: 
     */
    sortIntegers2(A) {
      // write your code here
      const start = 0;
      const end = A.length - 1;
  
      this.quickSort(A, start, end);
    }
  
    quickSort(A, start, end) {
        if (start >= end) {
            return
        }
  
        const pivot = A[Math.floor((start + end) / 2)];
        
        let left = start;
        let right = end;
  
        while (left <= right) {
            while (left <= right && A[left] < pivot) {
                left += 1;
            }
            while (left <= right && A[right] > pivot) {
                right -= 1;
            }
            if (left <= right) {
                const temp = A[left];
                A[left] = A[right];
                A[right] = temp;
                left += 1;
                right -= 1;
            }
        }
  
        this.quickSort(A, start, right);
        this.quickSort(A, left, end);
    }
  
  }