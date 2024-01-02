// given two strings - write a loop that measures if string1 is an anagram of string2.

export function anagram(str1, str2){
    // check if the lengths of the strings are the same.
    if (str1.length !== str2.length){
        return false;
    }
    
    let str1Counter = {};
    let str2Counter = {};

    for (let val of str1){      
        str1Counter[val] = (str1Counter[val] || 0) + 1;
    }

    for (let letter of str2){
        str2Counter[letter] = (str2Counter[letter] || 0) + 1;
    }

    for (let key in str1Counter){
        if (!(key in str2Counter)){
            return false;
        }
        if (str2Counter[key] !== str1Counter[key]){
            return false;
        }
    }

    return true;

}

export function anagramRefactor(str1, str2){
    if (str1.length !== str2.length){
        return false;
    }

    let check = {};

    for (let letter in str1){
        check[letter] = (str1[letter] || 0) + 1; 
    }

    for (let letter in str2){
        if (!(letter in check)){
            return false;
        } else {
            check[letter] -= 1;
        }
    }

    return true;

}
