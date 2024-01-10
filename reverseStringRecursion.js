/*
Write a recursive function called reverse which accepts a string and returns a new string in reverse.

reverse('awesome') // 'emosewa'
reverse('rithmschool') // 'loohcsmhtir'
*/

// str.substr(str.length)

export function reverse(string){
    let reverse = '';

    function popPush(str){
        if (str.length === 0) return '';

        let popped = str.slice(str.length - 1)
        reverse += popped
        return popPush(str.slice(0, -1))
    }

    popPush(string)

    return reverse;
}

reverse('hello')

export function reverseSolution(str){
    if (str.length <= 1) return str;
    return reverseSolution(str.slice(1)) + str[0]
}

