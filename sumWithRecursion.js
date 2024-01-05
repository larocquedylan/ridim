/* 
sum with recursion...

iteration is faster, but recursive is much more clear and easier to define. 
*/

export function sumWithRecursion(num){
    if (num === 1) {
        console.log('BASE CASE: returning 1')
        return 1;
    }
    console.log(`num: ${num} + sumWithRecurstion(${num -1})`)
    console.log('changing input now from')
    return num + sumWithRecursion(num - 1);
}

export function sumWithIteration(num) {
    if (num <= 0) {
		return;
	}
	num--;
	sumWithIteration(num);
}

sumWithRecursion(5)
sumWithIteration(5)