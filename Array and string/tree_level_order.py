def binary_tree_depth_order(tree: BinaryTreeNode) -> List[List[int]]:
    if not tree:
        return []

    res: List[List[int]] = []
    queue = [tree]
    while queue:
        res.append([node.data for node in queue])
        next_level = []
        for node in queue:
            if node.left:
                next_level.append(node.left)
            if node.right:
                next_level.append(node.right)
        queue = next_level

    return res
