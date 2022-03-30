// O(n) time | O(1) space
function subArraySort(array) {
    let minOutOfOrder = Infinity;
    let maxOutOfOrder = -Infinity;

    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        if (isOutOfOrder(i, num, array)) {
            minOutOfOrder = Math.min(minOutOfOrder, num);
            maxOutOfOrder = Math.max(maxOutOfOrder, num);
        }
    }

    if (minOutOfOrder === Infinity) {
        return [-1, -1];
    }
    let leftSubArrayIdx = 0;
    while (minOutOfOrder >= array[leftSubArrayIdx]) {
        leftSubArrayIdx++;
    }
    let rightSubArrayIdx = array.length - 1;
    while (maxOutOfOrder <= array[rightSubArrayIdx]) {
        rightSubArrayIdx -= 1;
    }
    return [leftSubArrayIdx, rightSubArrayIdx];
}

function isOutOfOrder(i, num, array) {
    if (i === 0) {
        return num > array[i + 1];
    }
    if (i === array.length - 1) {
        return num < array[i - 1];
    }
    return num > array[i + 1] || num < array[i - 1];
}

console.log(subArraySort([1, 2, 3, 4, -1, 5, 6, 2, 9]));