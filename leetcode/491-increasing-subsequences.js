/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// use seen = new Set();  is better
var findSubsequences = function(nums) {
    let res = [];
    let len = nums.length;
    let seen = {};
    DFS(0, [], nums);
    console.log(seen);
    Object.keys(seen).forEach(val => {
       res.push(seen[val]); 
    });
    return res
    
    function DFS(index, temp, nums) {
        if (temp.length >= 2) {
            let key = '';
            temp.forEach(val => { key += val + '.' });
            seen[key] = temp.slice();
        }
        for (let i = index; i < len; i++) {
            if (temp.length === 0 || nums[i] >= temp[temp.length - 1]) {
                temp.push(nums[i]);
                DFS(i+1, temp, nums);
                temp.pop();
            }
        }
    }
};
