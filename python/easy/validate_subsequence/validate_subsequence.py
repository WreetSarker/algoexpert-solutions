# O(n) time | O(1) space
def validateSubsequence(array, sequence):
    arrIdx = 0
    seqIdx = 0
    while arrIdx < len(array) and seqIdx < len(sequence):
        if array[arrIdx] == sequence[seqIdx]:
            seqIdx += 1
        arrIdx += 1
    return seqIdx == len(sequence)

# Alternate solution with a for loop

# def validateSubsequence(array, sequence):
#     seqIdx = 0
#     for value in array:
#         if seqIdx == len(sequence):
#             break
#         if sequence[seqIdx] == value:
#             seqIdx += 1
#     return seqIdx == len(sequence)


print(validateSubsequence(
    [1, 3, 5, 1, 4, 6, 82, 23, 543, 74, 24, 143], [4, 543, 24, 143]))
