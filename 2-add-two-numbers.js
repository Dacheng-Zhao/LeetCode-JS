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
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let head = new ListNode(0);
    let dummy = head;
    
    
    while (l1 || l2) {
        let subSum = 0;
        if (l1 && l2) {
            subSum = carry + l1.val + l2.val;
            l1 = l1.next;
            l2 = l2.next;
        } else if (l1) {
            subSum = l1.val + carry;
            l1 = l1.next;
        } else if (l2) {
            subSum = l2.val + carry;
            l2 = l2.next;
        }
        head.next = new ListNode(subSum % 10);
        head = head.next;
        carry = Number.parseInt(subSum / 10);
    }
    
    if (carry === 1) {
        head.next = new ListNode(1);
    }
    return dummy.next
};
