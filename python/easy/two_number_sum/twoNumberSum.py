# O(n^2) time | O(1) space
# def twoNumberSum(array, target):
#     for i in range(len(array) - 1):
#         firstNum = array[i]
#         for j in range(i+1, len(array)):
#             secondNum = array[j]
#             if firstNum + secondNum == target:
#                 return [firstNum, secondNum]
#     return []

# O(n) time | O(n) space
def twoNumberSum(array, target):
    nums = {}
    for num in array:
        potentialMatch = target - num
        if potentialMatch in nums:
            return [potentialMatch, num]
        else:
            nums[num] = True
    return []

# O(nlog(n)) time | O(1) space
# def twoNumberSum(array, target):
#     array.sort()
#     left = 0
#     right = len(array) - 1
#     while left < right:
#         currentSum = array[left] + array[right]
#         if target == currentSum:
#             return [array[left], array[right]]
#         elif currentSum < target:
#             left += 1
#         elif currentSum > target:
#             right -= 1
#     return []


print(twoNumberSum([-3, -5, -1, 0, 12, 13, 19, 23], 18))
