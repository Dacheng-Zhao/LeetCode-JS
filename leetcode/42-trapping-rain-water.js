/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (height === null || height === undefined || height.length === 0) {
        return 0
    }
    
    let left = 0;
    let right = height.length - 1;
    let maxLeft = height[left];
    let maxRight = height[right];
    let water = 0;
    
    while (left < right) {
        if (maxLeft < maxRight) {
            left += 1;
            if (maxLeft > height[left]) {
                water += maxLeft - height[left];
            } else {
                maxLeft = height[left]
            }
        } else {
            right -= 1;
            if (maxRight > height[right]) {
                water += maxRight - height[right];
            } else {
                maxRight = height[right]
            }
        }
    }
    return water
};