/*

Write a function factorial which accepts a number and returns the factorial of that number.
A factorial is the product of an integer and all the integers below it; e.g., 
factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  
factorial zero (0!) is always 1.

*/

export function factorial(num){
    if (num === 0) return 1;
    return num * factorial(num - 1)
}

// let fac = factorial(5);
// console.log(fac)

export function factorialLoop(num){
    let total = 1;
    for (let i = num; i > 0; i--){
        total *= i;
    }
    return total
}

// let facLoop = factorialLoop(5)

// console.log(facLoop)


