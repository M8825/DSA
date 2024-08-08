# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        NumTargetNodesWithAncestor = collections.namedtuple('NumTargetNodesWithAncestor',
                                                            ('num_target_nodes', 'ancestor'))

        def lca(tree, node0, node1):
            if not tree:
                return NumTargetNodesWithAncestor(0, None)

            # scan left subtree
            left_res = lca(tree.left, node0, node1)
            if left_res.num_target_nodes == 2:
                return left_res

            # scan right subtree
            right_res = lca(tree.right, node0, node1)
            if right_res.num_target_nodes == 2:
                return right_res

            num_target_node = (left_res.num_target_nodes +
                                right_res.num_target_nodes +
                                (node0, node1).count(tree))
            # determin
            ancestor = tree if num_target_node == 2 else None

            return NumTargetNodesWithAncestor(num_target_node, ancestor)


        return lca(root, p, q).ancestor
