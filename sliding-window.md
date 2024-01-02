## What is the Sliding Window Pattern?
Primarily to handle problems involving a sequence of data items, such as an array or a string. Imagine a window that slides over your data – this 'window' defines a subset of data at any given time. As the window slides, it considers a new element from the remaining data and discards an element from the start.

This pattern is incredibly useful in scenarios where you need to track or compute something among a subset of items like finding the maximum sum of any consecutive subarray of a fixed size or locating the longest substring with unique characters.

## How Does it Work?

1. **Initialize a Window**: Start with an initial subset of your data. This could be the first 'n' elements of an array, where 'n' is the size of your window.
2. **Slide the Window**: Move your window one element at a time. In each move, add a new element to the window and remove the element that falls out of the window scope.
3. **Compute as You Slide**: Perform the necessary calculations or checks as the window moves. This could involve summing elements, checking for duplicates, etc.
4. **Optimize the Process**: Instead of recalculating everything from scratch in each window position, intelligently update the calculation based on the change in the window's contents.

Applications

- **String Manipulation**: Finding the longest substring without repeating characters.
- **Data Stream Analysis**: Calculating moving averages in a stream of real-time data.
- **Optimization Problems**: Identifying the smallest/largest sum of a consecutive subsequence in an array.

## Example in Action
Consider the problem of finding the maximum sum of a subarray of size 'num' in a given array. Without the sliding window, you might resort to nested loops like follows, leading to a time complexity of O(n^2). 


### here is an inefficient example
```
/* 

write a function called maxSubArraySum which accepts an array of integers and a number called n.
The function should calculate the maximum sum of n consecutive elements in the array.

maxSubArraySum([1,2,5,2,8,1,5], 2) // 10
maxSubArraySum([1,2,5,2,8,1,5], 4) // 17
maxSubArraySum([], 4) // null

*/

function maxSubArraySum(arr, num) {
    if (arr.length < num) return null;

    let max = -Infinity;

    for (let i = 0; i < arr.length - num + 1; i++) {
        console.log(`---------------------- ${i} loop i ----------------------------`)
        console.log('')
        console.log('i =', i, `; arr[i] = ${arr[i]}`)
        console.log('')
        
        let temp = 0;
        for (let j = 0; j < num; j++) {
            console.log(`---------- ${j} loop j where arr[i] = ${arr[i]}  -------------`)
            console.log('')
            console.log('j = ', j, '; arr[i + j] =', arr[i + j]);
            temp += arr[i + j];
            console.log('adding arr[i + j] i.e.',arr[i + j], 'to temp', '..temp is now', temp)

            if (temp > max) {
                max = temp;
            }

            console.log('')
            console.log('max is currently', max);
            console.log('')
        }
    }

    console.log('max', max)
    return max;
}

```

### here it is refactored using the sliding window

By applying the sliding window pattern, you can reduce the complexity to O(n).

```
function maxSubArraySumRefactor(arr, num) {
    // max and temp set to 0
    let maxSum = 0;
    let tempSum = 0;

    // if the array is less than the number return null
    if (arr.length < num) return null;

    // loop through the array for length of elements we are adding up
    // this establishes the window
    for (let i = 0; i < num; i++){
        maxSum += arr[i];
    }

    // set the tempSum to the maxSum
    // this is what we just set for the first window
    tempSum = maxSum;

    // start at the end of the window and go to the end of the array
    for (let i = num; i < arr.length; i++){
        // subtract the first element in the window and add the next element in the array
        tempSum = tempSum - arr[i - num] + arr[i];
        // pick the max of the global maxSum we established outside the function
        // compare it to the max tempSum we just calculated
        maxSum = Math.max(tempSum, maxSum)
    }

    return maxSum
}
```