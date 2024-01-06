/*
write a function using recursion that collects all of the odd numbers in a array.

---

Notes:

- both functions have a time complexity of o(n) as they only iterate through the array one time. 
- the first collect is more space efficient as it doesn't create a new array.
- the second function create a new array each recursion (due to the slice).
- when I measure the execution time of the, the second is significantly faster... Node engine could be optimizing the slice op?

*/

export function collectAllOdds(arr){
    // establish an array to push to
    let odd = [];

    // create a function modify
    function check(arr, i){
        // if array is empty return
        // need a base case as we are starting at zero
            // so we also return once the i + 1 is greater than the array length
        if (arr.length  === 0 || arr.length < i + 1) return 
        if (arr[i] % 2 !== 0) {
            odd.push(arr[i])
            // change the input for recursive call
            return check(arr, i+1);
        } else {
            // change the input
            return check(arr, i+1)
        }
    }

    // invoke the function
    check(arr, 0);

    // return the arr with odds collected
    console.log(odd)
    return odd
}

export function collectAllOddsSlice(arr){
    // establish an array to push to
    let odd = [];


    // create a function modify
    function check(arr){
        // base case is arr length is empty
        if (arr.length  === 0) return 

        // if element 0 is not even
        if (arr[0] % 2 !== 0) {
            // push element 0 to odd array
            odd.push(arr[0])
        }
        // this will change the inputs
        check(arr.slice(1))
    }

    // call the function again
    check(arr);

    // return the arr with odds collected
    console.log(odd)
    return odd
}


