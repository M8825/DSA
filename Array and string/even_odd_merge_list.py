def even_odd_merge(L: ListNode) -> Optional[ListNode]:
    if L is None:
        return L
    even_dummy, odd_dummy = ListNode(0), ListNode(0)
    tails, turn = [even_dummy, odd_dummy], 0
    while L:
        tails[turn].next = L
        L = L.next
        tails[turn] = tails[turn].next
        turn ^= 1

    tails[1].next = None
    tails[0].next = odd_dummy.next

    return even_dummy.next
