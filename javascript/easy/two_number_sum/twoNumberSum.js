// O(n^2) time | O(1) space
// function twoNumberSum(array, target) {
//     for (let i = 0; i < array.length - 1; i++) {
//         let firstNum = array[i];
//         for (let j = i + 1; j < array.length; j++) {
//             let secondNum = array[j];
//             if ((firstNum + secondNum) === target) {
//                 return [firstNum, secondNum];
//             }
//         }
//     }
//     return [];
// }


// O(n) time | O(n) space
function twoNumberSum(array, target) {
    nums = {};
    for (let num of array) {
        let potentialMatch = target - num;
        if (nums[potentialMatch]) {
            return [potentialMatch, num];
        } else {
            nums[num] = true;
        }
    }
    return [];
}


// O(nlog(n)) time | O(1) space
// function twoNumberSum(array, target) {
//     array.sort();
//     let left = 0;
//     let right = array.length - 1;
//     while (left < right) {
//         let currentSum = array[left] + array[right];
//         if (currentSum === target) {
//             return [array[left], array[right]];
//         } else if (currentSum < target) {
//             left++;
//         } else if (currentSum > target) {
//             right--;
//         }
//     }
//     return [];
// }

console.log(twoNumberSum([-3, -5, -1, 0, 12, 13, 19, 23], 18));