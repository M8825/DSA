def add_two_numbers(L1: ListNode, L2: ListNode) -> Optional[ListNode]:
    place_iter = dummy = ListNode(0)
    carry = 0
    while L1 or L2 or carry:
        val = carry + (L1.data if L1 else 0) + (L2.data if L2 else 0)
        L1 = L1.next if L1 else None
        L2 = L2.next if L2 else None
        place_iter.next = ListNode(val % 10)
        place_iter, carry = place_iter.next, val // 10
    return dummy.next

