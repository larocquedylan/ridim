/* 
Write a recursive function called isPalindrome 
which returns true if the string passed to it is a palindrome (reads the same forward and backward). 
Otherwise it returns false.

isPalindrome('awesome') // false
isPalindrome('foobar') // false
isPalindrome('tacocat') // true
isPalindrome('amanaplanacanalpanama') // true
isPalindrome('amanaplanacanalpandemonium') // false

*/

export function isPalindrome(string){

    let og = string;
    let reverseStr = ''

    function reverse(str){
        if (str.length === 0) return '';

        let popped = str.substring(str.length - 1)
        reverseStr += popped

        return reverse(str.slice(0,-1))
    }
    
    reverse(string)

    if (og === reverseStr) {
        return true;
    } else return false;
}


export function check(str){
    if (str.length <= 1) return true;

    if (str[0] === str[str.length -1]){
        return check(str.substring(1,-1))
    } else return false;
}

// let x = check('lol')
// console.log(x)

export function lol(str){
    let string = str.split('').reverse().join('');

    if (string === str) return true;
    else return false;
}

// console.log(x[x.length-1])
// console.log(x[0])
