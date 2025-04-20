import List
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        d = dict(zip(nums, range(len(nums))))
        print(d)
        for i in range(len(nums)):
            c = target - nums[i]
            if c in d and d[c] != i:
                return [i, d[c]]
        return -1