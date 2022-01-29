/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Quick select solution O(n), quickSort or mergeSort will give nLog(n)
 const findKthLargest = function(nums, k) {
    const start = 0;
    const end = nums.length - 1;
    
    return quickSelect(nums, start, end, k);
};

const quickSelect = function(nums, start, end, k) {
    if (start === end) {
        return nums[start]
    }
    
    let left = start;
    let right = end;
    
    const pivot = nums[Math.floor((start + end) / 2)];
    
    while (left <= right) {
        while (left <= right && nums[left] > pivot) {
            left += 1;
        }
        while (left <= right && nums[right] < pivot) {
            right -= 1;
        }
        if (left <= right) {
            const temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left += 1;
            right -= 1;
        }
    }
    
    if (start + k - 1 <= right) {
        return quickSelect(nums, start, right, k);
    }
    
    if (start + k - 1 >= left) {
        return quickSelect(nums, left, end, k - (left - start))
    }
    
    return nums[right + 1]
}