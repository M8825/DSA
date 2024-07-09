def find_smallest_sequentially_covering_subset(paragraph: List[str],
                                               keywords: List[str]
                                               ) -> Subarray:
    keywords_to_idx = { k: i for i,k in enumerate(keywords)}
    shortest_subarray_length = [float('inf')] * len(keywords)
    last_occurrence = [-1] * len(keywords)
    shortest_distance = float('inf')
    res = Subarray(-1, -1)

    for i,ele in enumerate(paragraph):
        if ele in keywords_to_idx:
            ele_idx = keywords_to_idx[ele]
            if ele_idx == 0:
                shortest_subarray_length[ele_idx] = 1
            elif shortest_subarray_length[ele_idx - 1] != float('inf'):
                distance_to_prev_keyword = (
                    i - last_occurrence[ele_idx - 1]
                )

                shortest_subarray_length[ele_idx] = (
                    distance_to_prev_keyword +
                    shortest_subarray_length[ele_idx - 1]
                )
            last_occurrence[ele_idx] = i

            if (ele_idx == len(keywords) - 1 and
                shortest_subarray_length[-1] < shortest_distance):
                shortest_distance = shortest_subarray_length[-1]
                res = Subarray(i - shortest_distance + 1, i)
    return res
