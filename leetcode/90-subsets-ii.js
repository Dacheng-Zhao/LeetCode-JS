/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 const subsetsWithDup = function(nums) {
    if (!nums || nums.length === 0) {
        return [];
    }
    nums.sort((num1, num2) => num1 - num2);
    subsetsWithDupResult = [];
    subsetsWithDupHelper(nums, 0, [], subsetsWithDupResult);
    return subsetsWithDupResult;
};

const subsetsWithDupHelper = function(nums, currentIndex, tempResult, subsetsWithDupResult) {
    subsetsWithDupResult.push(tempResult.slice());
    for (let index = currentIndex; index < nums.length; index++) {
        if (index !== currentIndex && nums[index] === nums[index - 1]) {
            continue;
        }
        tempResult.push(nums[index]);
        subsetsWithDupHelper(nums, index + 1, tempResult, subsetsWithDupResult);
        tempResult.pop();
    }
}
