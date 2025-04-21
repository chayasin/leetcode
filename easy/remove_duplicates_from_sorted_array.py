import List

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        idx = 1
        for i, num in enumerate(nums[1:]):
            if nums[i] != num:
                nums[idx] = num
                idx = idx+1
        return idx