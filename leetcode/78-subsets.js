/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 const subsets = function(nums) {
    if (!nums || nums.length === 0) {
       return []
    } 
    const subsetsResult = [];
    subsetsHelper(nums, 0, [], subsetsResult);
    return subsetsResult;
};

const subsetsHelper = function(nums, currentIndex, tempResult, subsetsResult) {
    subsetsResult.push(tempResult.slice());
    
    for (let index = currentIndex; index < nums.length; index++) {
        tempResult.push(nums[index]);
        subsetsHelper(nums, index + 1, tempResult, subsetsResult);
        tempResult.pop();
    }
}

// second solution, loop all numbers and choose/not choose

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 const subsets = function(nums) {
    if (!nums || nums.length === 0) {
        return [];
    }  
    const subsetsResult = [];
    subsetsHelper(nums, 0, [], subsetsResult);
    return subsetsResult;
};

const subsetsHelper = function(nums, currentIndex, tempResult, subsetsResult) {
    if (currentIndex === nums.length) {
        subsetsResult.push(tempResult.slice())
    } else {
        subsetsHelper(nums, currentIndex + 1, tempResult, subsetsResult);
        tempResult.push(nums[currentIndex]);
        subsetsHelper(nums, currentIndex + 1, tempResult, subsetsResult);
        tempResult.pop();   
    }
}

