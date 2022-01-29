from heapq import heappop, heappush
class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        heap = []
        count = 0
        
        for singleList in lists:
            while singleList:
                heappush(heap, (singleList.val, count, singleList))
                count += 1
                singleList = singleList.next
        
        curr = dummy = ListNode(0)
        while heap:
            curr.next = heappop(heap)[2]
            curr = curr.next
        return dummy.next

## javascript does not support priority queue