/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    if (s === null || s === undefined) {
        return false
    }
    
    if (sameTree(s, t)) {
        return true
    }
    
    return isSubtree(s.left, t) || isSubtree(s.right, t)
    
    function sameTree(first, second) {
        if (first === null && second === null) {
            return true
        }
        if (first === null || second === null) {
            return false
        }
        if (first.val !== second.val) {
            return false
        }
        if (first.val === second.val && sameTree(first.left, second.left) && sameTree(first.right, second.right)) {
            return true
        }
    }
};