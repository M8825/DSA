def overlapping_lists(l0: ListNode, l1: ListNode) -> Optional[ListNode]:
    # No cycle
    # One cycle another not

    root0, root1 = has_cycle(l0), has_cycle(l1)

    if not root0 and not root1:
        return overlapping_no_cycle(l0, l1) # TODO: implement method
    elif (root0 and not root1) or (not root0 and root1):
        return None

    # Both cyclic
    temp = root1
    while temp:
        temp = temp.next
        if temp is root0 or temp is root1:
            break

    return root1 if temp is root0 else None
