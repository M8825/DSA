def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
    # keep track greatest_number so far.
    # initialize res = [false] * len(candies)
    # iterate over candis:
        # is current number of candies is greater than greatest update res array with True
        # and re-assign value ot greatest_number
    greatest = max(candies)
    res = []
    for i,num in enumerate(candies):
        if num + extraCandies >= greatest:
            res.append(True)
        else:
            res.append(False)

    return res
