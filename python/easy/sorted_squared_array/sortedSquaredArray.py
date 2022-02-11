# O(nlog(n)) time | O(n) space
# def sortedSquaredArray(array):
#     sortedArray = [0 for _ in array]
#     for idx in range(len(array)):
#         value = array[idx]
#         sortedArray[idx] = value*value
#     sortedArray.sort()
#     return sortedArray

# O(n) time | O(n) space
def sortedSquaredArray(array):
    sortedSquares = [0 for _ in array]
    leftIdx = 0
    rightIdx = len(array) - 1

    while leftIdx <= rightIdx:
        leftValue = array[leftIdx]
        rightValue = array[rightIdx]
        if abs(leftValue) < abs(rightValue):
            sortedSquares[rightIdx-leftIdx] = rightValue * rightValue
            rightIdx -= 1
        else:
            sortedSquares[rightIdx-leftIdx] = leftValue * leftValue
            leftIdx += 1
    return sortedSquares


print(sortedSquaredArray([-7, -6, -5, -4, -2, 0, 0, 1, 2, 3, 5, 6]))
