/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let curr = new ListNode(0);
    dummy = curr;
    
    while(l1 || l2) {
        if (l1 && l2) {
            let temp = 0;
            if (l1.val > l2.val) {
                temp = l2;
                l2 = l2.next;
            } else {
                temp = l1;
                l1 = l1.next;
            }
            curr.next = temp;
            curr = curr.next;
        } else if (l1) {
            curr.next = l1;
            curr = curr.next;
            l1 = l1.next;
        } else if (l2) {
            curr.next = l2;
            curr = curr.next;
            l2 = l2.next;
        }
    }
    return dummy.next
};
// @lc code=end

