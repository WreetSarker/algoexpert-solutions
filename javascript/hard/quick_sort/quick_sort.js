function quickSort(array) {
    quickSortHelper(array, 0, array.length - 1);
    return array;
}

function quickSortHelper(array, startIdx, endIdx) {
    if (startIdx >= endIdx) {
        return;
    }

    let pivotIdx = startIdx;
    let leftIdx = startIdx + 1;
    let rightIdx = endIdx;

    while (rightIdx >= leftIdx) {
        if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
            swap(leftIdx, rightIdx, array);
        }
        if (array[leftIdx] <= array[pivotIdx]) {
            leftIdx++;
        }
        if (array[rightIdx] >= array[pivotIdx]) {
            rightIdx--;
        }
    }
    swap(pivotIdx, rightIdx, array);

    let leftSubArrayIsSmaller = (rightIdx - 1) - startIdx < endIdx - (rightIdx + 1);
    if (leftSubArrayIsSmaller) {
        quickSortHelper(array, startIdx, rightIdx - 1);
        quickSortHelper(array, rightIdx + 1, endIdx);
    } else {
        quickSortHelper(array, rightIdx + 1, endIdx);
        quickSortHelper(array, startIdx, rightIdx - 1);
    }
}

function swap(i, j, array) {
    [array[i], array[j]] = [array[j], array[i]];
}

console.log(quickSort([13, 1, 3, -12, 32, 15, -67,
    86, -120, 205, -120, -142, 362, -158]));