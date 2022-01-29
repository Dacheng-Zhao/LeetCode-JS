/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (root === null) {
        return null
    }
    
    let DFS = function(left, right) {
        if (left === null && right === null) {
            return true
        } else if (left === null || right === null) {
            return false
        } else if (left.val !== right.val) {
            return false
        } else {
            return DFS(left.left, right.right) && DFS(left.right, right.left)
        }
    }
    
    return DFS(root.left, root.right);
};