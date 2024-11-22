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
