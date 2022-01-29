/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if (m === 0) {
        nums1.splice(0, nums2.length, nums2);
    }
    
    if (n === 0) {
        return
    }
    
    let nums1Len = m - 1;
    let nums2Len = n - 1;
    let totalLen = m + n - 1;
    
    while (nums1Len >= 0 && nums2Len >= 0) {
        if (nums1[nums1Len] > nums2[nums2Len]) {
            nums1[totalLen] = nums1[nums1Len];
            nums1Len -= 1;
            totalLen -= 1;
        } else {
            nums1[totalLen] = nums2[nums2Len];
            nums2Len -= 1;
            totalLen -= 1;
        }
    }
    while (nums2Len >= 0) {
        nums1[totalLen] = nums2[nums2Len];
        nums2Len -= 1;
        totalLen -= 1;
    }
    return nums1
};