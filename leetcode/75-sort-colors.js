/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 const sortColors = function(nums) {
    // 2 partitions
    
    const zeroPartitionIndex = partition(nums, 0, 0);
    partition(nums, zeroPartitionIndex, 1);
};

const partition = function(nums, index, target) {
    let left = index;
    let right = nums.length - 1;
    
    while (left <= right) {
        while (left <= right && nums[left] === target) {
            left += 1;
        }
        while (left <= right && nums[right] !== target) {
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
    return left
}




/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// example: [1,1,1,1,1,0,0,0,0,2,2,2,0,0,1], we will always be certain on left half, move 0 to left and 2 to the right
const sortColors = function(nums) {
    let moveCurr = 0;
    let start = 0;
    let end = nums.length - 1;
    
    while (moveCurr <= end) {
        if (nums[moveCurr] === 0) {
            nums[moveCurr] = nums[start];
            nums[start] = 0;
            start += 1;
            moveCurr += 1;
        }
        else if (nums[moveCurr] === 2) {
            nums[moveCurr] = nums[end];
            nums[end] = 2;
            end -= 1;
        } else {
            moveCurr += 1;
        }
    }
};