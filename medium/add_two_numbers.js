var addTwoNumbers = function(l1, l2) {
    let digit
    let carry = 0
    let node = new ListNode()
    let start = node

    while (l1 || l2) {
        digit = carry
        if (l1) { 
            digit = digit + l1.val
            l1 = l1.next
        }
        if (l2) {
            digit = digit + l2.val
            l2 = l2.next
        }
        node.next = new ListNode(digit%10)
        carry = (digit/10)>>0
        node = node.next
    }

    if (carry) {
        node.next = new ListNode(carry);
    }

    return start.next
};