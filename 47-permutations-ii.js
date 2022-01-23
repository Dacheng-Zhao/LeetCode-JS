/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function(nums) {
    if (!nums || nums.length === 0) {
        return [];
    }
    
    const permuteUniqueResult = [];
    nums.sort((num1, num2) => num1 - num2);
    permuteUniqueHelper(nums, [], permuteUniqueResult);
    return permuteUniqueResult;
};

const permuteUniqueHelper = function(remainNums, tempResult, permuteUniqueResult) {
    if (remainNums.length === 0) {
        permuteUniqueResult.push(tempResult.slice());
    }
    
    for (let index = 0; index < remainNums.length; index++) {
        if (index !== 0 && remainNums[index] === remainNums[index - 1]) {
            continue;
            }
        tempResult.push(remainNums[index]);
        const newRemain = remainNums.slice(0, index).concat(remainNums.slice(index + 1));
        permuteUniqueHelper(newRemain, tempResult, permuteUniqueResult);
        tempResult.pop();
    }
}
