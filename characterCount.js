// export default function characterCount(str){
//     let obj = {};
//     for (let i = 0; i < str.length; i++){
//         let char = str[i].toLowerCase();
//         if (/[a-z0-9]/.test(char)){
//             if (obj[char] > 0){
//                 obj[char]++;
//             } else {
//                 obj[char] = 1;
//             }
//         }
//     }
//     return obj;
// }

// returnCountUniqueCharacter("aaa") // { a: 3}
// returnCountUniqueCharacter("Hello") // {H:1, e:1, l:2, o: 1}
// returnCountUniqueCharacter("Hello hi") 
// how do we handle caps and uncaps 
// how do we handle " "? 
// { h: ?, h: ?, e: 1, l: 2, o: 1, i: 1}

// function returnCountUniqueCharacter<function> (input: string): array {
	// I want to iterate through the string
	// for each letter I want to estbalish a count
	// if the same character is the one compared, add one more to that characters pair
	// split the input by each character

	// write a function that takes a string as an input and returns an object

	// what it is received an array?
	// what if it receives an object?
	// what if it receives a number?
	// what if we received an empty string?

	// what to do if there are multiple frequencies for a character?

	// what to do if there are no repeated letters?
	
	

// export default function characterCount(str){
//     let obj = {};
//     for (let char in str.toLowerCase())
//     if (/[a-z0-9]/.test(char)){
//         obj[char] = (obj[char] || 0 ) + 1; // if obj[char] exists, increment it, otherwise set it to 1
//     }
//     return obj;
// }



