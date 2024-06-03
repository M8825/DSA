def overlapping_no_cycle(l0: ListNode, l1:ListNode):
    def length(head: ListNode):
        length = 0
        while head:
            length += 1
            head = head.next

        return length

    l0_len, l1_len = length(l0), length(l1)

    if l0_len > l1_len:
        l0, l1 = l1, l0

    for _ in range(abs(l1_len - l0_len)):
        l1 = l1.next

    while l0 and l1 and l0 is not l1:
        l0, l1 = l0.next, l1.next
    return l0
