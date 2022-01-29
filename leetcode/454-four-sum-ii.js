/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
 const fourSumCount = function(nums1, nums2, nums3, nums4) {
    const firstTwoSum = {};
    let result = 0;
    
    for (let num1 of nums1) {
        for (let num2 of nums2) {
            const total = num1 + num2;
            if (firstTwoSum.hasOwnProperty(total)) {
                firstTwoSum[total] += 1;
            } else {
                firstTwoSum[total] = 1;
            }
        }
    }
    
    for (let num3 of nums3) {
        for (let num4 of nums4) {
            const minsTotal = -num3 - num4;
            if (firstTwoSum.hasOwnProperty(minsTotal)) {
                result += firstTwoSum[minsTotal];
            }
        }
    }
    
    return result
};