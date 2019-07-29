/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix === null || matrix === undefined || matrix.length === 0 || matrix[0].length === 0) {
        return false
    }
    let rowStart = 0;
    let rowEnd = matrix.length - 1;
    let colLen = matrix[0].length - 1;
    let endOfCol = matrix[0].length - 1;
    let row = -1;
    
    while (rowStart + 1 < rowEnd) {
        let mid = rowStart + Number.parseInt((rowEnd - rowStart) / 2);
        if (matrix[mid][endOfCol] < target) {
                rowStart = mid;
            } else {
                rowEnd = mid;   
            }
    }
    
    if (matrix[rowStart][endOfCol] >= target) {
        row = rowStart;
    } else if (matrix[rowEnd][endOfCol] >= target) {
        row = rowEnd;
    } else {
        return false
    }
    
    let start = 0;
    let rowEnd2 = matrix[row].length - 1;
    
    while (start + 1 < rowEnd2) {
        let mid = start + Number.parseInt((rowEnd2 - start) / 2);
        if (matrix[row][mid] < target) {
            start = mid;
        } else {
            rowEnd2 = mid;
        }
    }

    if (matrix[row][start] === target) {
        return true
    } else if (matrix[row][rowEnd2] === target) {
        return true
    } else {
        return false
    }   
};