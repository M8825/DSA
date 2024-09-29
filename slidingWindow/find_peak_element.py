class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        n = len(nums)
        low, high = 0, n-1
        while low <= high:
            mid = ((high-low)//2) + low
            # Peak element is present in right side
            if mid < n-1 and nums[mid] < nums[mid+1]:
                low = mid+1
            # remember this part
            # Peak element is present in left side
            elif mid > 0 and nums[mid] < nums[mid-1]:
                high = mid-1
            else:
                return mid
