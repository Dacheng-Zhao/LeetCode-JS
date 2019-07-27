/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
    if (root === null) {
        return 0
    }
    
    let maxNum = 0;
    DFS(root);
    return maxNum
    
    function DFS(root) {
        if (root === null) {
            return 0
        }
        
        let left = DFS(root.left);
        let right = DFS(root.right);
        
        if (root.left) {
            left += root.left.val === root.val ? 1 : -left;
        }
        if (root.right) {
            right += root.right.val === root.val ? 1 : -right;
        }
        
        maxNum = Math.max(maxNum, left + right);
        return Math.max(left, right)
    }
};
