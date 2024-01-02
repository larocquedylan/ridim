/* 

write a function called maxSubArraySum which accepts an array of integers and a number called n.
The function should calculate the maximum sum of n consecutive elements in the array.

maxSubArraySum([1,2,5,2,8,1,5], 2) // 10
maxSubArraySum([1,2,5,2,8,1,5], 4) // 17
maxSubArraySum([], 4) // null

*/

export function maxSubArraySum(arr, num) {
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

