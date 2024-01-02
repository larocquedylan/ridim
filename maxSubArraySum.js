/* 

write a function called maxSubArraySum which accepts an array of integers and a number called n.
The function should calculate the maximum sum of n consecutive elements in the array.

maxSubArraySum([1,2,5,2,8,1,5], 2) // 10
maxSubArraySum([1,2,5,2,8,1,5], 4) // 17
maxSubArraySum([], 4) // null

*/

export function maxSubArraySum(arr, num) {
    let i = 0;

    for (i; i < arr.length; i++) {
        console.log('i', i, arr[i])
        for (let j = 0; j < num; j++) {
            console.log('j', j, arr[j])
        }
    }
}