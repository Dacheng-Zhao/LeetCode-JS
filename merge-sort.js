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
      const temp = [];
  
      this.mergeSort(A, start, end, temp);
    }
  
    mergeSort(A, start, end, temp) {
        if (start >= end) {
            return 
        }
  
        const mid = Math.floor((start + end) / 2);
  
        this.mergeSort(A, start, mid, temp);
        this.mergeSort(A, mid + 1, end, temp);
        this.merge(A, start, mid, end, temp);
    }
  
    merge(A, start, mid, end, temp) {
        let left = start;
        let right = mid + 1;
        let index = start;
  
        while (left <= mid && right <= end) {
            if (A[left] < A[right]) {
                temp[index] = A[left];
                index += 1;
                left += 1;
            } else {
                temp[index] = A[right];
                right += 1;
                index += 1;
            }
        }
  
        while (left <= mid) {
            temp[index] = A[left];
            left += 1;
            index += 1;
        }
  
        while (right <= end) {
            temp[index] = A[right];
            right += 1;
            index += 1;
        }
  
        for (let index = start; index <= end; index++) {
            A[index] = temp[index];
        }
    }
  
  }