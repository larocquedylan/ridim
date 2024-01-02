// write a function called zumZero which accepts a sorted array of integers. 
// The functions should find the first pair where the sum is zero. 
// Return an array that includes both values that sum to zero or undefined if a pair does not exist.

export function sumZero(arr){
// what to do if the array isn't sorted?
    // what to do if it isn't?
    // what to do if the array is empty? -> return undefined

// loop through the array
// compare each element to the next element to the next element
    // check if the sum of the two elements === 0
    // if it does, return the pair
    // if the loop ends, return undefined

    for (let i = 0; i < arr.length; i++){
        console.log(arr[i], 'i')
        for (let j = i+ 1; j < arr.length; j++){
            console.log(arr[j], 'j')
            if (arr[i] + arr[j] === 0){
                console.log('true', [arr[i], arr[j]])
                return [arr[i], arr[j]];
            }
        } 
    }
}

export function zeroSumRefeactored(arr){
    let left = arr[0];
    let right = arr[arr.length - 1];

    while (left < right){
        let sum = left + right;
        if (sum === 0){
            return [left, right];
        } else if (sum > 0){
            right--;
        } else {
            left++;
        }
    }
}