/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 const permute = function(nums) {
    if (!nums || nums.length === 0) {
        return []
    }
    const permuteResult = [];
    permutHelper(nums, [], permuteResult);
    return permuteResult;
}

const permutHelper = function(remainNums, tempResult, permuteResult) {
    if (remainNums.length === 0) {
        permuteResult.push(tempResult.slice());
    }
    
    for (let index = 0; index < remainNums.length; index++) {
        tempResult.push(remainNums[index]);
        const newRemainNums = remainNums.slice(0, index).concat(remainNums.slice(index + 1));
        permutHelper(newRemainNums, tempResult, permuteResult);
        tempResult.pop();
    }
}