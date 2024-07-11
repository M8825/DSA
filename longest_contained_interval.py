def longest_contained_range(A: List[int]) -> int:
    unprocessed_entries = set(A)

    max_interval = 0
    while unprocessed_entries:
        ele = unprocessed_entries.pop()

        lower_bound = ele - 1
        while lower_bound in unprocessed_entries:
            unprocessed_entries.remove(lower_bound)
            lower_bound -= 1

        upper_bound = ele + 1
        while upper_bound in unprocessed_entries:
            unprocessed_entries.remove(upper_bound)
            upper_bound += 1

        max_interval = max(max_interval, upper_bound - lower_bound - 1)

    return max_interval
