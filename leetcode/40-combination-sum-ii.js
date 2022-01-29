/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = function(candidates, target) {
    if (!candidates || candidates.length === 0) {
        return []
    }
    const combinationResult = [];
    candidates.sort((candidate1, candidate2) => candidate1 - candidate2);
    combinationSum2Helper(candidates, target, 0, [], combinationResult);
    return combinationResult;
};

const combinationSum2Helper = function(candidates, numSumToTarget, currentIndex, tempResult, combinationResult) {
    if (numSumToTarget === 0) {
        combinationResult.push(tempResult.slice());
    }
    if (numSumToTarget <= 0) {
        return
    }
    
    for (let index = currentIndex; index < candidates.length; index++) {
        if (index !== currentIndex && candidates[index] === candidates[index - 1]) {
            continue
        }
        tempResult.push(candidates[index]);
        combinationSum2Helper(candidates, numSumToTarget - candidates[index], index + 1, tempResult, combinationResult);
        tempResult.pop();
    }
};