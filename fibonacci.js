/*

Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, 
and where every number thereafter is equal to the sum of the previous two numbers.

fib(4) // 3
fib(10) // 55
fib(28) // 317811
fib(35) // 9227465

each number is a the sum of the two prior number sum
*/

export function fib(num){
    let fibArr = [1, 1];
    let lastIndex = num;

    function addToFib(element) {
        // add current number to arr
        if (element <= 1) return 1;
        if (element > 1 && element < lastIndex) {
            let sum = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
            fibArr.push(sum);
            return addToFib(element + 1)
        } if (lastIndex = element) {
            return fibArr;
        }
    }

    addToFib(2)

    return fibArr.pop([fibArr.length])
}

// the solution provided
// much higher time complexity than mine?
// think it is because it is waiting on more nested fibonacci return statements to return. 
// mine just adds something to externally scope array and asks for this element. 
export function fibonnaci(num) {
    if (num <= 2) return 1;
    return fibonnaci(num-1) + fibonnaci(num-2)
}

// let y = fibonnaci(6)

// console.log(y);


