/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d) {
    if (d === 1) {
        let newNode = new TreeNode(v);
        newNode.left = root;
        return newNode
    }
    
    let depth = 1;
    let queue = [root];
    
    while (queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            if (depth === d - 1) {
                let left = new TreeNode(v);
                let right = new TreeNode(v);
                if (node.left) {
                    left.left = node.left;
                }
                if (node.right) {
                    right.right = node.right;
                }
                node.left = left;
                node.right = right;
                continue;
            }
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        } 
        depth += 1;
    }
    return root
};