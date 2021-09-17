// /**
//  * @param {number[]} candidates
//  * @param {number} target
//  * @return {number[][]}
//  */

const combinationSum = function(candidates, target) {
    if (!candidates || candidates.length === 0) {
        return combinationSumResult
    }
    const combinationSumResult = [];
    candidates.sort((candidate1, candidate2)  => candidate1 - candidate2);
    combinationSumHelper(candidates, target, 0, [], combinationSumResult);
    return combinationSumResult
};

const combinationSumHelper = function(candidates, numSumToTarget, currentIndex, tempResult, combinationSumResult) {
     if (numSumToTarget <= 0) {
         return
     }
    
    for (let i = currentIndex; i < candidates.length; i++) {
        tempResult.push(candidates[i]);
        const newSum = numSumToTarget - candidates[i];
        if (newSum === 0) {
        combinationSumResult.push(tempResult.slice())
    }
        combinationSumHelper(candidates, newSum, i, tempResult, combinationSumResult);
        tempResult.pop();
    }
}
