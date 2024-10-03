def wordBreak(s: str, wordDict: List[str]) -> bool:
    word_set = set(wordDict)
    dp = [False] * (len(s) + 1)
    dp[0] = True

    for i in range(1, len(s) + 1):
        for j in range(i):
            if dp[j] and s[j:i] in word_set:
                dp[i] = True
                break

    return dp[-1]


def productExceptSelf(nums: List[int]) -> List[int]:
    n = len(nums)
    answer = [1] * n

    # Left products
    left_product = 1
    for i in range(n):
        answer[i] = left_product
        left_product *= nums[i]

    # Right products
    right_product = 1
    for i in range(n - 1, -1, -1):
        answer[i] *= right_product
        right_product *= nums[i]

    return answer
