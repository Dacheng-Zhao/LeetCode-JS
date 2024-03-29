/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) {
        return null
    }
    
    DFS(root);
    return root
    
    function DFS(root) {
        if (root === null) {
            return
        }
        let temp = root.left;
        root.left = root.right;
        root.right = temp;
        DFS(root.left);
        DFS(root.right);
    }
};