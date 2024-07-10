def longest_subarray_with_distinct_entries(A: List[int]) -> int:
    seen: Dict[int, int] = {}
    start_idx = 0
    res = 0

    for i,ele in enumerate(A):
        if ele in seen:
            dup_idx = seen[ele]
            if dup_idx >= start_idx:
                res = max(res, i - start_idx)
                start_idx = dup_idx + 1

        seen[ele] = i

    return max(res, len(A) - start_idx)
