// function to return true of values in xArray have the corresponding value squared in the yArray.
export function same(xArr, yArr){
    if (xArr.length !== yArr.length){
        return false;
    }
    for (let i = 0; i < xArr.length; i++){
        // find the correct .indexOf() in yArr where xArr[i] ** 2 is located
        let correctIndex = yArr.indexOf(xArr[i] ** 2);
        // if the array doesn't have this 'correctIndex', it will return -1, if it returns -1, return false
        if (correctIndex === -1){
            return false;
        }
        // if the array does have this 'correctIndex', remove it from the yArr
        // this is done to ensure we don't count values 2x.
        yArr.splice(correctIndex, 1);
    }
    return true;
};

// this function would be o(n^2) because of the nested loop.

// -------------------------- REFACTORED -------------------------- //

export function sameRefactor(xArr, yArr) {
    // check lengths make sure they are equal 
    if (xArr.length !== yArr.length){
        return false;
    }

    // next we want to create two objects that will store the frequency of each value in the array
    let xCounter = {}; // { 1: 1, 2: 1, 3: 1}
    let yCounter = {}; // { 1: 1, 4: 1, 9: 1}

    // for each value in the array, we want to create a key in the object and increment the value
    // with this we will be able to compare the frequency of each value in the array
    for (let val of xArr){
        xCounter[val] = (xCounter[val] || 0) + 1;
    }
    for (let val of yArr){
        yCounter[val] = (yCounter[val] || 0) + 1;
    }

    // next we would compare the keys in the objects to see if they are the same
    for (let key in xCounter){
        // if the key in xCounter**2 does not exist in yCounter, return false
        // i.e. xCounter[1] ** 2 = 1
        // check in yCounter if there is a key of 1
        // if there is no key of 1, return false
        if (!(key ** 2 in yCounter)){
            return false;
        }
        // if the value of yCounter[key ** 2] !== xCounter[key], return false
        // if the frequency of the key in xCounter does not match the frequency of the key in yCounter, return false
        if (yCounter[key ** 2] !== xCounter[key]){
            return false;
        }
    }
    return true;
}

// this time complexity would then be linear: O(N)

