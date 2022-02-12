// O(nlog(n)) time | O(n) space
// function sortedSquaredArray(array) {
//     const sortedArray = new Array(array.length).fill(0);
//     for (let i = 0; i < array.length; i++) {
//         let value = array[i];
//         sortedArray[i] = value * value;
//     }
//     sortedArray.sort((a, b) => a - b);
//     return sortedArray;
// }

function sortedSquaredArray(array) {
    const sortedArray = new Array(array.length).fill(0);
    let leftIdx = 0;
    let rightIdx = array.length - 1;
    while (leftIdx <= rightIdx) {
        let leftValue = array[leftIdx];
        let rightValue = array[rightIdx];
        if (Math.abs(leftValue) < Math.abs(rightValue)) {
            sortedArray[rightIdx - leftIdx] = rightValue * rightValue;
            rightIdx--;
        } else {
            sortedArray[rightIdx - leftIdx] = leftValue * leftValue;
            leftIdx++;
        }
    }
    return sortedArray;
}

console.log(sortedSquaredArray([-7, -6, -5, -4, -2, 1, 2, 3, 5, 6]));