import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        def parse_int(node):
            value = node.val
            x = 1
            while node.next:
                node = node.next
                x = x*10
                value = node.val*x + value
            return value
        def parse_node(node, value):
            if value==0:
                return
            node.val = value%10
            node.next = parse_node(ListNode(), value//10)
            return node
        sol = parse_int(l1) + parse_int(l2)
        if sol == 0:
            return ListNode()
        return parse_node(ListNode(), sol)