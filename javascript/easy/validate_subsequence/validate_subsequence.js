function validateSubsequence(array, sequence) {
    let arrIdx = 0;
    let seqIdx = 0;
    while (arrIdx < array.length && seqIdx < sequence.length) {
        if (array[arrIdx] === sequence[seqIdx]) {
            seqIdx++;
        }
        arrIdx++;
    }
    return seqIdx === sequence.length;
}

console.log(validateSubsequence(
    [1, 3, 5, 1, 4, 6, 82, 23, 543, 74, 24, 143], [4, 543, 24, 142]));