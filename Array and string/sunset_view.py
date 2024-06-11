
# Question: 8.5
# You are given a series of buildings that have windows facing west.
# The buildings are in a straight line, and any building which is to the east
# of a building of equal or greater height cannot view the sunset.
# Design an algorithm that processes buildings in east-to-west order and returns
# the set of buildings which view the sunset. Each building is specified by its
# height

# [6, 3, 4]
# [4, 3, 6]
def examine_buildings_with_sunset(sequence: Iterator[int]) -> List[int]:
    BuildingWithMax = collections.namedtuple('BuildingWithMax',
                                             ('id', 'height'))
    stack = []
    for i, h in enumerate(sequence):
        while stack and h >= stack[-1].height:
            stack.pop()
        stack.append(BuildingWithMax(i, h))

    return [building.id for building in reversed(stack)]

