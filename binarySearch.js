/*
Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

This algorithm should be more efficient than linearSearch - you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

Examples:

binarySearch([1,2,3,4,5],2) // 1
binarySearch([1,2,3,4,5],3) // 2
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],6) // -1
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10) // 2
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95) // 16
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100) // -1
*/

export function binarySearch(arr, input, start = 0, end = arr.length - 1) {
    if (start > end) {
        return -1; 
    }

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === input) {
        return mid; 
    } else if (arr[mid] > input) {
        return binarySearch(arr, input, start, mid - 1); 
    } else {
        return binarySearch(arr, input, mid + 1, end); 
    }
}

export function refactorBinarySearch(arr, element){
  let start = 0; // the zero index
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  // while mid != change the recalculate the mid
  // keep in the while look until the start is 
  // is less than or equal to the end so it will
  // return -1 if start <= end
  while (element !== arr[mid]){
    if(element < arr[mid]){
      end = mid -1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor(start + end / 2)
    // if the mid == to the element return the elemenet
    if (element === arr[mid]){
      return element
    } return -1; // if it isn't after the while loop return -1
  }
}

const x = refactorBinarySearch([1,2,3], 4);
console.log(x);