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