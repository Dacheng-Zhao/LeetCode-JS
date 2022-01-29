/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left  = 0;
    let right = height.length - 1;
    let maxWater = 0;
    let tempMin = 0;
    
    while (left < right) {
        if (height[left] > height[right]) {
            tempMin = height[right];
            maxWater = Math.max(maxWater, tempMin * (right - left));
            right -= 1;
        } else {
            tempMin = height[left];
            maxWater = Math.max(maxWater, tempMin * (right - left));
            left += 1;
        }
    }
    return maxWater
};