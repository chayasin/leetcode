import List

class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        sol = ""
        for i in range(len(strs[0])):
            check = False
            for str in strs[1:]:
                if i > len(str)-1 or strs[0][i] != str[i]:
                    check = True
                    break
            if check:
                return sol
            sol = sol + strs[0][i]
        return sol