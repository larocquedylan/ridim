/*
Write a function called linearSearch which accepts an array and a value, 
and returns the index at which the value exists. 
If the value does not exist in the array, return -1.

Don't use indexOf to implement this function!
*/

// first draft
export function linearSearch(array, value){
    let indexOf = -1;
    let none = -1;
    for (let i = 0; i < array.length; i++){
        if (array[i] === value) {
            indexOf = i;
        } else {
            none = -1;
        }
    }

    if (indexOf > none) return indexOf
    else return none;
}

let a  = linearSearch([1,2,3], 3)
let c  = linearSearch([10, 15, 20, 25, 30], 15)


// now with recursion
export function linear(array, value){
    if (array.length === 0) return -1;
    if (array[array.length - 1] === value) return array.length -1;
    return linear(array.slice(0,-1), value);
}

let d = linear([10, 15, 20, 25, 30], 1);
console.log('d',d);



