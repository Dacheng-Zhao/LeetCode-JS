/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        if (hashMap.hasOwnProperty(nums[i])) {
            hashMap[nums[i]] += 1;
        } else {
            hashMap[nums[i]] = 1;
        }
    }
    let orderMap = {};
    let hashKeys = Object.keys(hashMap);
    let maxFreq = 0;
    let res = [];
    for (let j = 0; j < hashKeys.length; j++) {
        maxFreq = Math.max(maxFreq, hashMap[hashKeys[j]]);
        if (orderMap.hasOwnProperty(hashMap[hashKeys[j]])) {
            orderMap[hashMap[hashKeys[j]]].push(hashKeys[j]);
            } else {
            orderMap[hashMap[hashKeys[j]]] = [hashKeys[j]];
            }
    }
    
    while (maxFreq > 0) {
        let tempArr = orderMap[maxFreq];
        while (tempArr && tempArr.length && res.length < k) {
            let temp = tempArr.pop();
            res.push(temp);
        }
        maxFreq -= 1;
    }
    return res
};