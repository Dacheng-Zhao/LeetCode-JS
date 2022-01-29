/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let curr = new ListNode(0);
    let dummy = curr;
    dummy.next = head;
    
    while (curr.next && curr.next.next) {
        let temp = curr.next.val;
        curr.next.val = curr.next.next.val;
        curr.next.next.val = temp;
        curr = curr.next.next
    }
    return dummy.next
};
