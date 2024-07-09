g and a set of strings, and return
# the indices of the starting and ending index of a shortest subarray of the given array
# that 'covers' the set, i.e., contains all strings in the set
#
# Hint: What is the maximum number of minimal subbarays that can cover the query?
Subarray = collections.namedtuple('Subarray', ('start', 'end'))
def find_smallest_subarray_covering_set(paragraph: List[str],
                                        keywords: Set[str]) -> Subarray:
    keywords_to_cover = collections.Counter(keywords)
    remaining = len(keywords)
    result = Subarray(-1, -1)
    left = 0
    for right,ele in enumerate(paragraph):
        # Expansion phase
        if ele in keywords_to_cover:
            keywords_to_cover[ele] -= 1
            if keywords_to_cover[ele] >= 0:
                remaining -= 1

        # Contraction phase
        while remaining == 0:
            if result == Subarray(-1, -1) or right - left < result.end - result.start:
                result = Subarray(left, right)

            left_pointer = paragraph[left]
            if left_pointer in keywords:
                keywords_to_cover[left_pointer] += 1
                if keywords_to_cover[left_pointer] > 0:
                    remaining += 1

            left += 1

    return result

