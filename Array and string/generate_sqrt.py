def generate_first_k_a_b_sqrt2(k: int) -> List[float]:

    # Initial for 0 + 0 * sqrt(2).
    candidates = bintrees.RBTree([(Number(0, 0), None)])

    result: List[float] = []
    while len(result) < k:
        next_smallest = candidates.pop_min()[0]
        result.append(next_smallest.val)
        # Adds the next two numbers derived from next_smallest.
        candidates[Number(next_smallest.a + 1, next_smallest.b)] = None
        candidates[Number(next_smallest.a, next_smallest.b + 1)] = None
    return result
