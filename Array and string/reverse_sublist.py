def reverse_sublist(L: ListNode, start: int,
                    finish: int) -> Optional[ListNode]: # 1 -> 2 -> 3 -> 4 -> 5 # 2 -> 4
    dummy_head = sublist_head = ListNode(0, L)

    for _ in range(1, start):
        sublist_head = sublist_head.next

    sublist_iter = sublist_head.next
    for _ in range(finish - start):
        temp = sublist_iter.next
        sublist_iter.next = temp.next
        temp.next = sublist_head.next
        sublist_head.next = temp

    return dummy_head.next
