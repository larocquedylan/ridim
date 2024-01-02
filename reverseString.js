// function that 

export function arrUnshiftLoop(x) {
    let t0 = performance.now();
    performance.mark('start');
    let arr = x.split("");    
    let reversedWord = []
    for (let i = 0; i < arr.length; i++) {
        let letter = arr[i];
        reversedWord.unshift(letter);
    }
    let t1 = performance.now();
    console.log("arrUnshift took " + (t1 - t0) + " milliseconds.");
    console.log(reversedWord.join(""));
};

export function arrReverded(x) {
    let t0 = performance.now();
    let arr = x.split("");
    let reversedWord = arr.reverse();
    let t1 = performance.now();
    console.log("arrReversed took " + (t1 - t0) + " milliseconds.");
    console.log(reversedWord.join(""));
}

export function splitReverseJoin(x){
    let t0 = performance.now();
    let reversedWord = x.split("").reverse().join("");
    let t1 = performance.now();
    console.log("splitReverseJoin took " + (t1 - t0) + " milliseconds.");
    console.log(reversedWord);
}

export function whileReverse(x){
    let t0 = performance.now();
    let i = x.length - 1, o = '';
    while (i > 0 ){
        o += x[i];
        i--;
    }
    let t1 = performance.now();
    console.log("whileReverse took " + (t1 - t0) + " milliseconds.");
    console.log(o);
}

export function whileReverse1(x){
    let t0 = performance.now();
    let i = x.length - 1, o = '';
    while (i > 0 ){
        o += x.substring(i - 1, i);
        i--;
    }
    let t1 = performance.now();
    console.log("whileReverse1 took " + (t1 - t0) + " milliseconds.");
    console.log(o);
}

export function loopReverse(x){
    let t0 = performance.now();
    let string = '';
    for (let i = x.length - 1; i >= 0; string += x[i--]){ }
    let t1 = performance.now();
    console.log("loopReverse took " + (t1 - t0) + " milliseconds.");
    console.log(string);
}

// arrUnshiftLoop('cat');
// arrReverded('cat');
// splitReverseJoin('cat');
// whileReverse('cat');
// whileReverse1('cat');
// loopReverse('cat');


// export default {
//     arrUnshiftLoop,
//     arrReverded,
//     splitReverseJoin,
//     whileReverse,
//     whileReverse1,
//     loopReverse
// };