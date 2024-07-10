# Write a program which takes as input an array and finds the distance between a closest pair of equal
# entries. For example, if s = ['All', 'work', 'and', 'no', 'play', 'makes', 'for', 'no', 'work', 'no'
# 'fun', 'and', 'no', 'results'], then the second and third occurrences of 'no' is the closest pair.
#

def find_nearest_repetition(paragraph: List[str]) -> int:
    word_last_idx = {}
    min_distance = float('inf')

    for i,word in enumerate(paragraph):
        if word in word_last_idx:
            last_idx = word_last_idx[word]
            min_distance = min(min_distance, i - last_idx)

        word_last_idx[word] = i

    return typing.cast(int, min_distance) if min_distance != float('inf') else -1
