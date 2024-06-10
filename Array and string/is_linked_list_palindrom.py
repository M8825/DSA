def reverse_list(node: ListNode):
    prev = None
    curr = node

    while curr:
        temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    return prev


def is_linked_list_a_palindrome(L: ListNode) -> bool:
    slow = fast = L
    while fast and fast.next:
        slow, fast = slow.next, fast.next.next

    half_iter = reverse_list(slow)
    while half_iter:
        if half_iter.data != L.data:
            return False
        half_iter = half_iter.next
        L = L.next

    return True
