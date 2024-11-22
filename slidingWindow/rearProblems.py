from collections import defaultdict

def leastBricks(wall):
    edge_count = defaultdict(int)

    for row in wall:
        edge_position = 0
        for brick in row[:-1]:  # skip the last brick to avoid counting the edge
            edge_position += brick
            edge_count[edge_position] += 1

    # Minimum bricks cut will be total rows minus the maximum number of aligned edges
    return len(wall) - max(edge_count.values(), default=0)


from bisect import bisect_right

def numMatchingSubseq(s, words):
    char_indices = defaultdict(list)
    for idx, char in enumerate(s):
        char_indices[char].append(idx)

    def is_subsequence(word):
        prev_index = -1
        for char in word:
            if char not in char_indices:
                return False
            pos = bisect_right(char_indices[char], prev_index)
            if pos == len(char_indices[char]):
                return False
            prev_index = char_indices[char][pos]
        return True

    return sum(is_subsequence(word) for word in words)
